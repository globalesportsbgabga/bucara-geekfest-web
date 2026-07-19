import { useState } from "react";
import styles from "./Navbar.module.css";
import links from "../../data/links";
import Button from "../Button/Button";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <header className={styles.navbar}>

            <div className={styles.container}>

                <a
                    href="#inicio"
                    className={styles.logo}
                    onClick={closeMenu}
                >
                    <img
                        src="/assets/logo/logo.png"
                        alt="Bucara GeekFest"
                    />
                </a>

                {/* =====================
                    MENÚ ESCRITORIO
                ====================== */}

                <nav className={styles.menu}>

                    <a href="#inicio">Inicio</a>

                    <a href="#experience">Experiencia</a>

                    <a href="#invitados">Invitados</a>

                    <a href="#zona-comercial">Expositores</a>

                    <a href="#torneos">Torneos</a>

                    <a href="#agenda">Agenda</a>

                    <a href="#patrocinadores">Sponsors</a>

                    <a href="#faq">FAQ</a>

                </nav>

                <div className={styles.actions}>

                    <Button
                        href={links.exhibitor}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                    >
                        Expositor
                    </Button>

                    <Button
                        href={links.vip}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        VIP
                    </Button>

                    <Button
                        href={links.tickets}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                    >
                        Tickets
                    </Button>

                </div>

                {/* =====================
                    BOTÓN HAMBURGUESA
                ====================== */}

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >

                    <span></span>

                    <span></span>

                    <span></span>

                </button>

            </div>

            {/* =====================
                MENÚ MÓVIL
            ====================== */}

            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}
            >

                <button
                    className={styles.close}
                    onClick={closeMenu}
                >
                    ✕
                </button>

                <a href="#inicio" onClick={closeMenu}>Inicio</a>

                <a href="#experience" onClick={closeMenu}>Experiencia</a>

                <a href="#invitados" onClick={closeMenu}>Invitados</a>

                <a href="#zona-comercial" onClick={closeMenu}>Expositores</a>

                <a href="#torneos" onClick={closeMenu}>Torneos</a>

                <a href="#agenda" onClick={closeMenu}>Agenda</a>

                <a href="#patrocinadores" onClick={closeMenu}>Sponsors</a>

                <a href="#faq" onClick={closeMenu}>FAQ</a>

                <div className={styles.mobileButtons}>

                    <Button
                        href={links.tickets}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                    >
                        Comprar Tickets
                    </Button>

                    <Button
                        href={links.vip}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        Pase VIP
                    </Button>

                    <Button
                        href={links.exhibitor}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                    >
                        Quiero ser Expositor
                    </Button>

                </div>

            </div>

        </header>

    );

}

export default Navbar;