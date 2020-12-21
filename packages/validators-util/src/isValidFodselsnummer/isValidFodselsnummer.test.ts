import { isValidFodselsnummer } from "./isValidFodselsnummer";

describe("isValidFodselsnummer", () => {
    it("should return true if the fodselsnummer is valid", () => {
        expect(isValidFodselsnummer("02026000109")).toBe(true);
    });

    it("should return false if the fodselsnummer is invalid", () => {
        expect(isValidFodselsnummer("01234567890")).toBe(false);
    });

    it("should return false if the fodselsnummer is empty", () => {
        expect(isValidFodselsnummer("")).toBe(false);
    });

    it("should return null if the fodselsnummer is not a number", () => {
        expect(isValidFodselsnummer("1337hello")).toBe(null);
    });

    it("should return false if the fodselsnummer is a negative number", () => {
        expect(isValidFodselsnummer("-0202600010")).toBe(false);
    });

    it("should return false if the fodselsnummer has less than 11 digits", () => {
        expect(isValidFodselsnummer("0202600010")).toBe(false);
    });

    it("should return false if the fodselsnummer has more than 11 digits", () => {
        expect(isValidFodselsnummer("020260001091")).toBe(false);
    });
});
