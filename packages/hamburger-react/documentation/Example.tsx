import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Hamburger } from "../src";
import "@fremtind/jkl-hamburger/hamburger.css";
import "@fremtind/jkl-core/core.min.css";

const Example = ({ boolValues }: ExampleComponentProps) => {
    const [clickOutside, toggleClickOutside] = useState(false);
    const toggleState = (enable: boolean) => toggleClickOutside(enable);

    const divRef = React.useRef(null);
    return (
        <div style={{ padding: "20px" }} ref={divRef}>
            <Hamburger
                insideRef={divRef}
                negative={boolValues && boolValues["Invertert"]}
                onClick={toggleState}
                enableClickOutside={clickOutside}
                onClickOutside={toggleState}
            />
        </div>
    );
};

export default Example;
