export const isMinimum = (value: string, min: number) => {
    if (isNaN(Number(value))) {
        return null;
    }

    return Number(value) >= min;
};
