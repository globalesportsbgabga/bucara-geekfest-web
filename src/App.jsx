
import "./styles/app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero/Hero";
import Experience from "./sections/Experience/Experience";
import Guests from "./sections/Guests/Guests";
import Schedule from "./sections/Schedule/Schedule";
import Sponsors from "./sections/Sponsors/Sponsors";
import Faq from "./sections/Faq/Faq";
import Footer from "./sections/Footer/Footer";
import Marquee from "./sections/Marquee/Marquee";

import RegistrationPage from "./pages/RegistrationPage";
import CopaCosplayPage from "./pages/CopaCosplayPage";
import KpopPage from "./pages/KpopPage";
import TorneosPage from "./pages/TorneosPage";
import TCGPage from "./pages/TCGPage";
import ArtistValleyPage from "./pages/ArtistValleyPage";
import ExhibitorsPage from "./pages/ExhibitorsPage";

import Analytics from "./components/system/Analytics";

function HomePage() {
    return (
        <div className="app">
            <Navbar />

            <main className="main-layout">
                <Hero />
                <Guests />
                <Marquee />
                <Schedule />
                <Sponsors />
                <Experience />
                <Faq />
            </main>

            <Footer />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            {/* Seguimiento global de todas las páginas */}
            <Analytics />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/entradas" element={<RegistrationPage />} />
                <Route path="/copa-cosplay" element={<CopaCosplayPage />} />
                <Route path="/kpop" element={<KpopPage />} />
                <Route path="/torneos" element={<TorneosPage />} />
                <Route path="/tcg" element={<TCGPage />} />
                <Route path="/artist-valley" element={<ArtistValleyPage />} />
                <Route path="/expositores" element={<ExhibitorsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
