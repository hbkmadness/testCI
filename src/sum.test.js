const sum = require("./sum");

test("Checks the sum of 1+2", () => {
	expect(sum(1, 2)).toBe(3);
});
