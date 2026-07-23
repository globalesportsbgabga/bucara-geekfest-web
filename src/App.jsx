import "./styles/app.css";

import Navbar from "./components/Navbar";

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

import Gallery from "./sections/Gallery/Gallery";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="main-layout">

        <Hero />

        <Marquee />

        <Sponsors />

        <Guests />

        <Gallery />

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