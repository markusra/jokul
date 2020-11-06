import React, { FocusEvent, useState, ChangeEvent } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Select, NativeSelect } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    // prettier-ignore
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    /* const values = [
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "huawei", label: "Huawei" },
        { value: "LG", label: "LG" },
    ]; */

    // prettier-ignore
    const values = [
        "1,4 TSI 125hk Businessline, 125 hk, 1,4 l, Bensin, Forhjulstrekk, Sedan",
        "1,4 TSI 125hk Businessline, 125 hk, 1,4 l, Bensin, Forhjulstrekk, Stasjonsvogn",
        "1,4 TSI 125hk Businessline DSG, 125 hk, 1,4 l, Bensin, Forhjulstrekk, Sedan",
        "1,4 TSI 125hk Businessline DSG, 125 hk, 1,4 l, Bensin, Forhjulstrekk, Stasjonsvogn",
        "1,4 TSI 125hk Businessline DSG (K), 125 hk, 1,4 l, Bensin, Forhjulstrekk, Stasjonsvogn",
        "1,4 TSI 150hk 4MOTION Businessline, 150 hk, 1,4 l, Bensin, Firehjulstrekk, Sedan",
        "1,4 TSI 150hk 4MOTION Businessline, 150 hk, 1,4 l, Bensin, Firehjulstrekk, Stasjonsvogn",
        "1,4 TSI 150hk 4MOTION Highline, 150 hk, 1,4 l, Bensin, Firehjulstrekk, Sedan",
        "1,4 TSI 150hk 4MOTION Highline, 150 hk, 1,4 l, Bensin, Firehjulstrekk, Stasjonsvogn",
        "1,6 TDI 120hk Businessline, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Sedan",
        "1,6 TDI 120hk Businessline, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "1,6 TDI 120hk Businessline DSG, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Sedan",
        "1,6 TDI 120hk Businessline DSG, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "1,6 TDI 120hk Businessline DSG (K), 120 hk, 1,6 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "1,6 TDI 120hk Highline, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Sedan",
        "1,6 TDI 120hk Highline, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "1,6 TDI 120hk Highline DSG, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Sedan",
        "1,6 TDI 120hk Highline DSG, 120 hk, 1,6 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "1,6 TDI 120hk Highline DSG (K), 120 hk, 1,6 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "2,0 BiTDI 240hk Highline 4MOTION DSG, 240 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 BiTDI 240hk Highline 4MOTION DSG (K), 240 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TDI 150hk 4MOTION Businessline, 150 hk, 2,0 l, Diesel, Firehjulstrekk, Sedan",
        "2,0 TDI 150hk 4MOTION Businessline, 150 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TDI 150hk 4MOTION Highline, 150 hk, 2,0 l, Diesel, Firehjulstrekk, Sedan",
        "2,0 TDI 150hk 4MOTION Highline, 150 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TDI 150hk Businessline DSG, 150 hk, 2,0 l, Diesel, Forhjulstrekk, Sedan",
        "2,0 TDI 150hk Businessline DSG, 150 hk, 2,0 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "2,0 TDI 150hk Businessline DSG (K), 150 hk, 2,0 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "2,0 TDI 150hk Highline DSG, 150 hk, 2,0 l, Diesel, Forhjulstrekk, Sedan",
        "2,0 TDI 150hk Highline DSG, 150 hk, 2,0 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "2,0 TDI 150hk Highline DSG (K), 150 hk, 2,0 l, Diesel, Forhjulstrekk, Stasjonsvogn",
        "2,0 TDI 190hk Businessl. 4MOTION DSG, 190 hk, 2,0 l, Diesel, Firehjulstrekk, Sedan",
        "2,0 TDI 190hk Businessl. 4MOTION DSG, 190 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TDI 190hk Businessl. 4MOTION DSG (K), 190 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TDI 190hk Highline 4MOTION DSG, 190 hk, 2,0 l, Diesel, Firehjulstrekk, Sedan",
        "2,0 TDI 190hk Highline 4MOTION DSG, 190 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TDI 190hk Highline 4MOTION DSG (K), 190 hk, 2,0 l, Diesel, Firehjulstrekk, Stasjonsvogn",
        "2,0 TSI 280hk Highline 4MOTION DSG, 280 hk, 2,0 l, Bensin, Firehjulstrekk, Stasjonsvogn",
        "2,0 TSI 280hk Highline 4MOTION DSG (K), 280 hk, 2,0 l, Bensin, Firehjulstrekk, Stasjonsvogn"
    ];
    const [value, setValue] = useState<string>();
    const universalSetValue = (input: string | ChangeEvent<HTMLSelectElement> | undefined) => {
        if (typeof input === "string") {
            setValue(input);
        } else if (input) {
            setValue(input.target.value);
        }
    };

    const onFocus = (input: string | FocusEvent<HTMLSelectElement> | undefined) => {
        console.log("Focus: ", input);
    };
    const onBlur = (input: string | FocusEvent<HTMLSelectElement> | undefined) => {
        console.log("Blur: ", input);
    };

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Hjelpsom beskjed" : undefined;
    const variant = choiceValues && (choiceValues["Etikettvariant"] as LabelVariant);
    const searchAble = boolValues && boolValues["Med søk"];
    return (
        <C
            forceCompact={boolValues && boolValues["Kompakt"]}
            inverted={boolValues && boolValues["Invertert"]}
            variant={variant}
            label="Hvilket merke er telefonen?"
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            onChange={universalSetValue}
            searchable={searchAble}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default Example;
