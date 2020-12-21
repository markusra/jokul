import { isMinimum } from "./isMinimum";

describe("isMinimum", () => {
    it("should return true for number bigger than min value", () => {
        expect(isMinimum("1338", 1337)).toBe(true);
    });

    it("should return true for number equal to min value", () => {
        expect(isMinimum("1337", 1337)).toBe(true);
    });

    it("should return false for number smaller than min value", () => {
        expect(isMinimum("1", 1337)).toBe(false);
    });

    it("should return null if value is not a number", () => {
        expect(isMinimum("l33t", 1337)).toBe(null);
    });
});
