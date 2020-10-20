import React from "react";
import "./style.scss";

const Welcome = () => {
    return (
        <div className="row">
            <article className="meetup-welcome meetup-welcome__wrapper">
                <span className="meetup-welcome__meetup jkl-heading-large">Meetup</span>
                <span className="meetup-welcome__good">The good</span>
                <span className="meetup-welcome__bad">The bad</span>
                <span className="meetup-welcome__ugly">The ugly</span>
                <time className="meetup-welcome__time jkl-small">
                    The 4th of October 2pm,
                    <br />
                    (Oslo) CET
                </time>
                <button className="jkl-button jkl-button--primary jkl-button--inverted">Register now</button>
            </article>
        </div>
    );
};

export default Welcome;
