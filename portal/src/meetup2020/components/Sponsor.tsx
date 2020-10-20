import React from "react";
import "./style.scss";

const Sponsor = () => {
    return (
        <div className="row row--topmargin">
            <article className="meetup-sponsor">
                <h1>Sponsor</h1>
                <a
                    className="meetup-sponsor meetup-sponsor__image"
                    href="https://www.fremtind.no"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="assets/img/Fremtind_neg.svg" alt="Fremtind logo" />
                </a>
            </article>
        </div>
    );
};

export default Sponsor;
