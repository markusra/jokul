import { isLegalValue } from "./isLegalValue";

describe("isLegalValue", () => {
    it("should return true if the value is not an illegal value", () => {
        expect(isLegalValue("1", ["2", "3", "4"])).toBe(true);
    });

    it("should return false if the value is an illegal value", () => {
        expect(isLegalValue("3", ["2", "3", "4"])).toBe(false);
    });
});
