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
                <div className="meetup-paneldebate meetup-paneldebate__grid-container">
                    {/* 
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item1">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/tali-krakowsky-apel-5b70624/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--big"
                                src="assets/img/speaker-tali-small.jpg"
                                alt="Speaker Tali"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Tali Krakowsky Apel
                            </figcaption>
                        </a>
                    </div>
                    */}
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item2">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/gbrownlee/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--small"
                                src="assets/img/speaker-glenn-small.jpg"
                                alt="Speaker Glenn"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Glenn Brownlee
                            </figcaption>
                        </a>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item3">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/eduardoir/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--small"
                                src="assets/img/speaker-eduardo-small.jpg"
                                alt="Eduardo Ibacache Rodriguez"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Eduardo Ibacache Rodriguez
                            </figcaption>
                        </a>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item4">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/efatland/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--small"
                                src="assets/img/speaker-eirik-small.jpg"
                                alt="Eirik Fatland"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Eirik Fatland
                            </figcaption>
                        </a>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item4">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/piorh/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--small"
                                src="assets/img/speaker-pio-small.jpg"
                                alt="Pio Rasch-Halvorsen"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Pio Rasch-Halvorsen
                            </figcaption>
                        </a>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item5">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/morganepeng/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--small"
                                src="assets/img/speaker-morgane-small.jpg"
                                alt="Morgane Peng"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Morgane Peng
                            </figcaption>
                        </a>
                    </div>
                    <div className="meetup-paneldebate meetup-paneldebate__grid-container meetup-paneldebate__item meetup-paneldebate__item7">
                        <a
                            className="meetup-paneldebate__link"
                            href="https://www.linkedin.com/in/mikehall/"
                            title="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="meetup-paneldebate meetup-paneldebate__image--small"
                                src="assets/img/speaker-mike-small.jpg"
                                alt="Mike Hall"
                            />
                            <figcaption className="meetup-paneldebate meetup-paneldebate__caption">
                                Mike Hall
                            </figcaption>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Paneldebate;
