import React, { ReactNode } from "react";
import classNames from "classnames";
import { MessageIcon } from "./common/MessageIcon";
import { messageTypes } from "./common/types.d";

interface Props {
    messageType: messageTypes;
    children: ReactNode;
    className?: string;
    inverted?: boolean;
    maxWidth?: string;
    paddingLeft?: string;
}

export const SystemMessage: React.FC<Props> = ({
    messageType,
    children,
    className = "",
    inverted,
    maxWidth,
    paddingLeft,
}) => {
    const componentClassName = classNames("jkl-system-message", "jkl-system-message--" + messageType, className, {
        "jkl-system-message--dark": inverted,
    });

    const styles = Object.entries({
        maxWidth,
        paddingLeft,
    }).reduce((styleObject: { [key: string]: string }, [style, value]) => {
        if (!!value) {
            styleObject[style] = value;
        }

        return styleObject;
    }, {});

    return (
        <div className={componentClassName} role="status">
            <div className="jkl-system-message__content" style={{ ...styles }}>
                <div className="jkl-system-message__icon">
                    <MessageIcon messageType={messageType} />
                </div>
                <p className="jkl-system-message__message jkl-body">{children}</p>
            </div>
        </div>
    );
};
