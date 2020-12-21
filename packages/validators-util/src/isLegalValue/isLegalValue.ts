export const isLegalValue = (value: string, illegalValues: string[]) => {
    return !illegalValues.some((illegalValue: string) => value === illegalValue);
};
