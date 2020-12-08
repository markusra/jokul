import { isValidRegistreringsnummer } from "./isValidRegistreringsnummer";

const isValidBilRegistreringsnummer = (regnummer: string) => isValidRegistreringsnummer(regnummer, 5);
const isValidMcRegistreringsnummer = (regnummer: string) => isValidRegistreringsnummer(regnummer, 4);

describe("isValidRegistreringsnummer", () => {
    describe("bil", () => {
        it("should return true for two letters and 5-digit numbers", () => {
            expect(isValidBilRegistreringsnummer("AB12345")).toBe(true);
        });

        it("should return false if the string is empty", () => {
            expect(isValidBilRegistreringsnummer("")).toBe(false);
        });

        it("should return false if only one letter", () => {
            expect(isValidBilRegistreringsnummer("A12345")).toBe(false);
        });

        it("should return false if the string contains more than two letters and 5-digit numbers", () => {
            expect(isValidBilRegistreringsnummer("AA12345jibberish")).toBe(false);
            expect(isValidBilRegistreringsnummer("AA12345 jibberish")).toBe(false);
            expect(isValidBilRegistreringsnummer("jibberish AA 12345")).toBe(false);
            expect(isValidBilRegistreringsnummer("AA 12345")).toBe(false);
        });
    });

    describe("MC", () => {
        it("should return true for two letters and 4-digit numbers", () => {
            expect(isValidMcRegistreringsnummer("AB1234")).toBe(true);
        });

        it("should return false if the string is empty", () => {
            expect(isValidMcRegistreringsnummer("")).toBe(false);
        });

        it("should return false if only one letter", () => {
            expect(isValidMcRegistreringsnummer("A1234")).toBe(false);
        });

        it("should return false if the string contains more than two letters and 4-digit numbers", () => {
            expect(isValidMcRegistreringsnummer("AA12345jibberish")).toBe(false);
            expect(isValidMcRegistreringsnummer("AA12345 jibberish")).toBe(false);
            expect(isValidMcRegistreringsnummer("jibberish AA 12345")).toBe(false);
            expect(isValidMcRegistreringsnummer("AA 12345")).toBe(false);
        });
    });
});
