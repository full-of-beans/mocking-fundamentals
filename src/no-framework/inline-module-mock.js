const fn = (implementation = () => {}) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return implementation(...args);
  };

  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = newImplementation =>
    (implementation = newImplementation);
  return mockFn;
};

const utilsPath = require.resolve("../utils.js");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1)
  }
};

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Kid 1", "Kid 2");
assert.strictEqual(winner, "Kid 1");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Kid 1", "Kid 2"],
  ["Kid 1", "Kid 2"]
]);

delete require.cache[utilsPath];
