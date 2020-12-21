export const isMaximum = (value: string, max: number) => {
    if (isNaN(Number(value))) {
        return null;
    }

    return Number(value) <= max;
};
