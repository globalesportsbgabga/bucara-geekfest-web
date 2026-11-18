
import Navbar from "../components/Navbar";
import RegistrationHub from "../sections/RegistrationHub/RegistrationHub";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";

function RegistrationPage() {
    return (
        <div className="app">
            <Analytics />

            <Navbar />

            <main className="main-layout">
                <RegistrationHub />
            </main>

            <Footer />
        </div>
    );
}

export default RegistrationPage;
