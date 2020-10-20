import React from "react";
import "./style.scss";

const Program = () => {
    return (
        <div className="row row--topmargin">
            <footer className="meetup-footer">
                <div className="meetup-footer__item">
                    <a
                        className="jkl-link jkl-small meetup-footer__link"
                        href="https://www.fremtind.no"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Fremtind Forsikring AS
                    </a>
                </div>
                <div className="meetup-footer__item">
                    <a
                        className="jkl-link jkl-small meetup-footer__link"
                        href="https://www.fremtind.no"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Personvern og vilkår
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Program;
