import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../meetup2020/components/Hero";
import "./meetup2020.scss";

const Meetup2020 = () => {
    return (
        <>
            <Helmet>
                <html lang="no-nb" />
                <title>Meetup 2020 - Jøkul designsystem</title>
            </Helmet>
            <main className="meetup-main">
                <Hero />
            </main>
        </>
    );
};

export default Meetup2020;
