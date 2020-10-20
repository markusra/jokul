import React from "react";
import "./style.scss";

const About = () => {
    return (
        <article className="row row--topmargin">
            <div className="meetup-about">
                <h1>About</h1>
                <p>
                    The digital product industry has been welcoming design systems for a while. Many organizations have
                    been better able to preserve brand guidelines, speed up time-to-market, or improve the user&apos;s
                    experience by establishing and maintaining a functioning design system.
                </p>
                <p>
                    This event will attempt to look beyond: To uncover the good, the bad, and the ugly experiences from
                    inside our design systems. What has thrilled users? Where has it gone wrong? How did we prevail – if
                    at all?
                </p>
                <p>
                    Join us for an exciting look at the inside of a few design systems and the efforts made to make them
                    great.
                </p>
                <button className="meetup-hero meetup-hero__button jkl-button jkl-button--secondary jkl-button--inverted">
                    Register now
                </button>
            </div>
        </article>
    );
};

export default About;
