import React from "react";
import "./style.scss";

const Welcome = () => {
    return (
        <div className="row">
            <article className="meetup-welcome meetup-welcome__wrapper">
                <span className="meetup-welcome__meetup jkl-heading-large">Meetup</span>
                <span className="meetup-welcome__good">Beyond</span>
                <span className="meetup-welcome__bad">Design</span>
                <span className="meetup-welcome__ugly">Systems</span>
                <time className="meetup-welcome__time jkl-small">
                    The 4th of October 2pm,
                    <br />
                    (Oslo) CET
                </time>
                <a
                    href="https://www.meetup.com/Fremtind/events/274057345"
                    target="_blank"
                    rel="noreferrer"
                    className="jkl-button jkl-button--primary jkl-button--inverted"
                >
                    Register now
                </a>
            </article>
        </div>
    );
};

export default Welcome;
