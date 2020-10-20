import React from "react";
import "./style.scss";

const Paneldebate = () => {
    return (
        <div className="row row--topmargin">
            <article className="meetup-paneldebate">
                <h1>Paneldebate</h1>
                <p className="meetup-paneldebate meetup-paneldebate__slogan">
                    A panel debate with questions from the audience and the moderator.
                </p>
                <div className="meetup-paneldebate meetup-paneldebate__grid">
                    <div>imag 1</div>
                    <div>
                        <div>imag 2, imag 2, imag 2</div>
                        <div>imag 2, imag 2, imag 2</div>
                    </div>
                </div>
                <div className="meetup-paneldebate meetup-paneldebate__grid-container">
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item1">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--big"
                            src="assets/img/speaker-tali-small.jpg"
                            alt="Speaker Tali"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                            Tali Krakowsky Apel
                        </figcaption>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item2">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--small"
                            src="assets/img/speaker-glenn-small.jpg"
                            alt="Speaker Glenn"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                            Glenn Brownlee
                        </figcaption>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item3">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--small"
                            src="assets/img/speaker-eduardo-small.jpg"
                            alt="Eduardo Ibacache Rodriguez"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                            Eduardo Ibacache Rodriguez
                        </figcaption>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item4">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--small"
                            src="assets/img/speaker-eirik-small.jpg"
                            alt="Eirik Fatland"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                            Eirik Fatland
                        </figcaption>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item4">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--small"
                            src="assets/img/speaker-pio-small.jpg"
                            alt="Pio Rasch-Halvorsen"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                            Pio Rasch-Halvorsen
                        </figcaption>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item5">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--small"
                            src="assets/img/speaker-morgane-small.jpg"
                            alt="Morgane Peng"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">Morgane Peng</figcaption>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item7">
                        <img
                            className="meetup-paneldebate meetup-paneldebate__image--small"
                            src="assets/img/speaker-mike-small.jpg"
                            alt="Mike Hall"
                        />
                        <figcaption className="meetup-paneldebate meetup-paneldebate__caption">Mike Hall</figcaption>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Paneldebate;
