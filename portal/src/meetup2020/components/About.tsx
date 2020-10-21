import React from "react";
import "./style.scss";

const About = () => {
    return (
        <article className="row row--topmargin">
            <div className="meetup-about">
                <h2 className="meetup-heading jkl-title-small jkl-layout-spacing--medium-bottom">About</h2>
                <p className="jkl-body jkl-layout-spacing--small-bottom">
                    The digital product industry has been welcoming design systems for a while. Many organizations have
                    been better able to preserve brand guidelines, speed up time-to-market, or improve the user&apos;s
                    experience by establishing and maintaining a functioning design system.
                </p>
                <p className="jkl-body jkl-layout-spacing--small-bottom">
                    This event will attempt to look beyond: To uncover the good, the bad, and the ugly experiences from
                    inside our design systems. What has thrilled users? Where has it gone wrong? How did we prevail – if
                    at all?
                </p>
                <p className="jkl-body">
                    Join us for an exciting look at the inside of a few design systems and the efforts made to make them
                    great.
                </p>
                <a
                    href="https://www.meetup.com/Fremtind/events/274057345"
                    target="_blank"
                    rel="noreferrer"
                    className="jkl-button jkl-button--secondary jkl-button--inverted jkl-layout-spacing--medium-top"
                >
                    Register now
                </a>
            </div>
        </article>
    );
};

export default About;
