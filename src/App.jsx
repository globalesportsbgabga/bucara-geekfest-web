import { useState } from "react";

import "./styles/app.css";

import Navbar from "./components/Navbar";
import Level2Loader from "./components/Level2Loader/Level2Loader";

import Hero from "./sections/Hero/Hero";
import Guests from "./sections/Guests/Guests";
import Exhibitors from "./sections/Exhibitors/Exhibitors";
import Tournaments from "./sections/Tournaments/Tournaments";
import BannerCTA from "./sections/BannerCTA/BannerCTA";
import RegistrationHub from "./sections/RegistrationHub/RegistrationHub";
import Schedule from "./sections/Schedule/Schedule";
import Sponsors from "./sections/Sponsors/Sponsors";
import Faq from "./sections/Faq/Faq";
import Footer from "./sections/Footer/Footer";
import Experience from "./sections/Experience/Experience";
import Marquee from "./sections/Marquee/Marquee";

import Analytics from "./components/system/Analytics";

function App() {
    const [showLoader, setShowLoader] = useState(true);

    return (
        <div className="app">

            {showLoader && (
                <Level2Loader
                    onComplete={() => setShowLoader(false)}
                />
            )}

            <Analytics />

            <Navbar />

            <main className="main-layout">

                <Hero />

                <Marquee />

                <Sponsors />

                <Guests />

                <Exhibitors />

                <BannerCTA />

                <Tournaments />

                <Experience />

                <RegistrationHub />

                <Schedule />

                <Faq />

            </main>

            <Footer />

        </div>
    );
}

export default App;