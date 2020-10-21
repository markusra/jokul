import React from "react";
import "./style.scss";

const Hero = () => {
    return (
        <div className="row">
            <section className="meetup-hero__wrapper">
                <h1 className="meetup-hero meetup-hero__heading jkl-body">
                    Beyond Design
                    <br />
                    Systems 2020
                </h1>
                <a
                    href="https://www.meetup.com/Fremtind/events/274057345"
                    target="_blank"
                    rel="noreferrer"
                    className="meetup-button-link jkl-button jkl-button--compact jkl-button--secondary jkl-button--inverted"
                >
                    Register now
                </a>
            </section>
        </div>
    );
};

export default Hero;
