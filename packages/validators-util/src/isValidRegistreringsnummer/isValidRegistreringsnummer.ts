export const isValidRegistreringsnummer = (regnummer: string, digits: 4 | 5) => {
    if (digits !== 4 && digits !== 5) {
        throw new TypeError("Argument 'digits' is not valid. The number of digits must be either 4 or 5.");
    }
    return new RegExp(`^[a-z]{2}\\d{${digits}}$`, "i").test(regnummer);
};
