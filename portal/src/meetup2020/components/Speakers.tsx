import React, { FunctionComponent } from "react";
import "./style.scss";

type SpeakerProps = {
    image: string;
    name: string;
    title: string;
    location: string;
    slogan: string;
    bio: string;
    webpage?: string;
    linkedin?: string;
    facebook?: string;
    youtube?: string;
    twitter?: string;
    medium?: string;
};

const Speaker: FunctionComponent<SpeakerProps> = ({
    image,
    name,
    title,
    location,
    slogan,
    bio,
    webpage,
    linkedin,
    facebook,
    youtube,
    twitter,
    medium,
}) => (
    <div className="meetup-speakers meetup-speakers__wrapper">
        <img src={image} className="meetup-speakers meetup-speakers__image" alt={name} />
        <div className="meetup-speakers meetup-speakers__content">
            <div className="meetup-speakers meetup-speakers__contentbox">
                <h2>{name}</h2>
                <p>
                    {title}
                    <br />
                    {location}
                </p>
                <p className="meetup-speakers meetup-speakers__slogan">{slogan}</p>
                <p>{bio}</p>
                <div className="row">
                    {webpage && (
                        <div className="meetup-speakers meetup-speakers__link-wrapper">
                            <a
                                className="meetup-speakers meetup-speakers__link-link"
                                href={webpage}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {webpage}
                            </a>
                        </div>
                    )}
                    <div className="meetup-speakers meetup-speakers__social">
                        {linkedin && (
                            <a href={linkedin} title="LinkedIn" target="_blank" rel="noreferrer">
                                <img src="assets/img/social-in.svg" alt="social icon linkedin" />
                            </a>
                        )}
                        {facebook && (
                            <a href={facebook} title="Facebook" target="_blank" rel="noreferrer">
                                <img src="assets/img/social-face.svg" alt="social icon facebook" />
                            </a>
                        )}
                        {youtube && (
                            <a href={youtube} title="youtube" target="_blank" rel="noreferrer">
                                <img src="assets/img/social-tube.svg" alt="social icon youtube" />
                            </a>
                        )}
                        {twitter && (
                            <a href={twitter} title="twitter" target="_blank" rel="noreferrer">
                                <img src="assets/img/social-twitter.svg" alt="social icon twitter" />
                            </a>
                        )}
                        {medium && (
                            <a href={medium} title="youtube" target="_blank" rel="noreferrer">
                                <img src="assets/img/social-medium.svg" alt="social icon medium" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Speakers = () => {
    return (
        <div className="row row--topmargin">
            <h1>Main Speakers</h1>
            <section className="meetup-speakers">
                <Speaker
                    image="assets/img/speaker-morgane-big.jpg"
                    name="Morgane Peng"
                    title="Director of User Experience at Societe Generale"
                    location="United Kingdom"
                    slogan="Vision and Streategy"
                    bio="Morgane Peng is responsible for the design vision and strategy of Societe Generale Corporate & Investment Banking. She delivers united and meaningful experiences with her team across Societe Generale products for start-ups, corporates and financial institutions."
                    webpage="morganepeng.com"
                    linkedin="https://www.linkedin.com/in/morganepeng/"
                    twitter="https://twitter.com/morganepeng"
                    medium="https://medium.com/@morganepeng"
                />
                <Speaker
                    image="assets/img/speaker-mike-big.jpg"
                    name="Mike Hall"
                    title="UX Lead for the Service NSW Transactional Design System at Service NSW"
                    location="Australia"
                    slogan="Transactional Design System"
                    bio="Owner and founder of Parsley Design Systems, a design system tool and methodology for implementing and maintaining efficient design operations in both agencies and complex corporate/Government environments. "
                    webpage="mikehallportfolio.wordpress.com"
                    linkedin="https://www.linkedin.com/in/mikehall/"
                />
                <Speaker
                    image="assets/img/speaker-glenn-big.jpg"
                    name="Glenn Brownlee"
                    title="Development Manager and Design System Lead at Fremtind"
                    location="Norway"
                    slogan="Jøkul Design System"
                    bio="Experienced senior software developer and architect. Focusing mainly on frontend while maintaining a solid perspective on the whole stack; including native mobile clients."
                    linkedin="https://www.linkedin.com/in/gbrownlee/"
                />
            </section>
        </div>
    );
};

export default Speakers;
