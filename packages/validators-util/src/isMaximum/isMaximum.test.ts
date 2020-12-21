import { isMaximum } from "./isMaximum";

describe("isMaximum", () => {
    it("should return true for number smaller than max value", () => {
        expect(isMaximum("-1338", 1337)).toBe(true);
        expect(isMaximum("0", 1337)).toBe(true);
        expect(isMaximum("2", 1337)).toBe(true);
    });

    it("should return true for number equal to max value", () => {
        expect(isMaximum("1337", 1337)).toBe(true);
    });

    it("should return false for number bigger than max max value", () => {
        expect(isMaximum("1338", 1337)).toBe(false);
    });

    it("should return null if value is not a number", () => {
        expect(isMaximum("l33t", 1337)).toBe(null);
    });
});
