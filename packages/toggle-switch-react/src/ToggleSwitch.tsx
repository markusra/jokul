import React, { ReactNode, MouseEventHandler } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";
import classNames from "classnames";

interface Props {
    children: ReactNode;
    pressed?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    inverted?: boolean;
    helpLabel?: string;
}

export const ToggleSwitch = ({ children, pressed, onClick, className, disabled, inverted, helpLabel }: Props) => {
    const componentClassName = classNames("jkl-toggle-switch", className, {
        "jkl-toggle-switch--inverted": inverted,
    });

    return (
        <>
            <button
                type="button"
                aria-pressed={!!pressed}
                disabled={disabled}
                className={componentClassName}
                onClick={onClick}
            >
                <span className="jkl-toggle-switch__label">{children}</span>
                <span className="jkl-toggle-switch__pill">
                    <span className="jkl-toggle-switch__dot" />
                </span>
            </button>
            <SupportLabel inverted={inverted} className="jkl-toggle-switch__help-label" helpLabel={helpLabel} />
        </>
    );
};
