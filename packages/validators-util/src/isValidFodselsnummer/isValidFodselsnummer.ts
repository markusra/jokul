// Weights for the CDV algorithm validating org and ssn numbers
const intFactor1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
const intFactor2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
const modCheck = 11;

const control = (ssn: string, factors: number[]) => Number(ssn.charAt(factors.length));
const factor = (ssn: string, f: number, idx: number) => f * Number(ssn.charAt(idx));

function calcCheckSum(ssn: string, factors: number[]) {
    const intCheckSum = factors.reduce((sum, f, idx) => sum + factor(ssn, f, idx), 0);
    return modCheck - (((intCheckSum - 1) % modCheck) + 1) === control(ssn, factors);
}

function isValid(ssn: string) {
    if (isNaN(Number(ssn))) {
        return null;
    }

    return ssn.length === 11 && calcCheckSum(ssn, intFactor1) && calcCheckSum(ssn, intFactor2);
}

export const isValidFodselsnummer = (value: string) => isValid(value);
