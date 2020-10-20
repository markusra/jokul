import React from "react";
import "./style.scss";

const Play = () => {
    return (
        <aside className="row row--topmargin">
            <div className="meetup-play">
                <button
                    onClick={() => window.open("https://vimeo.com/459349631/4f79d04d51", "_blank")}
                    type="button"
                    className="meetup-play__button"
                >
                    <img src="assets/img/play.svg" alt="Play Jøkul movie" />
                </button>
            </div>
        </aside>
    );
};

export default Play;
