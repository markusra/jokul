import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../meetup2020/components/Hero";
import Welcome from "../meetup2020/components/Welcome";
import Play from "../meetup2020/components/Play";
import Speakers from "../meetup2020/components/Speakers";
import About from "../meetup2020/components/About";
import Paneldebate from "../meetup2020/components/Paneldebate";
import Program from "../meetup2020/components/Program";
import Sponsor from "../meetup2020/components/Sponsor";
import Footer from "../meetup2020/components/Footer";
import { Bakgrunnsvideo } from "../meetup2020/components/BG";
import "./meetup.scss";

const Meetup = () => {
    return (
        <>
            <Helmet>
                <html lang="no-nb" data-theme="dark" />
                <title>Meetup - Beyond Design Systems</title>
            </Helmet>
            <Hero />
            <div className="meetup-bg">
                <Bakgrunnsvideo
                    videoSrc="/assets/video/intro-1000k.mp4"
                    videoWebmSrc="/assets/video/intro-100k.webm"
                    posterImgSrc="/assets/img/intro.jpg"
                />
            </div>
            <main className="meetup-main">
                <Welcome />
                <Play />
                <About />
                <Speakers />
                <Paneldebate />
                <Program />
                <Sponsor />
                <Footer />
            </main>
        </>
    );
};

export default Meetup;
