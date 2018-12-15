const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Kid 1", "Kid 2");

  expect(winner).toBe("Kid 1");

  expect(utils.getWinner.mock.calls).toEqual([
    ["Kid 1", "Kid 2"],
    ["Kid 1", "Kid 2"]
  ]);

  // expect(utils.getWinner).toHaveBeenCalledTimes(2);
  // expect(utils.getWinner).toHaveBeenCalledWith("Kid 1", "Kid 2");
  // expect(utils.getWinner).toHaveBeenNthCalledWith(1, "Kid 1", "Kid 2");
  // expect(utils.getWinner).toHaveBeenNthCalledWith(2, "Kid 1", "Kid 2");

  utils.getWinner.mockRestore();
});
