require("../__no-framework-mocks__/utils");
const utilsPath = require.resolve("../utils.js");
const mockUtilsPath = require.resolve("../__no-framework-mocks__/utils.js");
require.cache[utilsPath] = require.cache[mockUtilsPath];

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
