
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navigation = [
        { label: "Inicio", href: "/#inicio" },
        { label: "Experiencia", href: "/#experience" },
        { label: "Copa Cosplay", href: "/copa-cosplay" },
        { label: "K-Pop", href: "/kpop" },
        { label: "Torneos", href: "/torneos" },
        { label: "TCG", href: "/tcg" },
        { label: "Artist Valley", href: "/artist-valley" },
        { label: "Expositores", href: "/expositores" },
        { label: "Invitados", href: "/#invitados" },
        { label: "Agenda", href: "/#agenda" },
        { label: "FAQ", href: "/#faq" },
    ];

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <a
                    href="/#inicio"
                    className={styles.logo}
                    onClick={closeMenu}
                >
                    <img
                        src="/assets/hero/logo-lvl2%20-%20copia.png"
                        alt="Bucara GeekFest LVL 2"
                    />
                </a>

                {/* MENÚ ESCRITORIO */}
                <nav className={styles.menu}>
                    {navigation.map((item) => (
                        <a key={item.label} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <a
                        href="/entradas"
                        className={styles.ticketsLink}
                    >
                        ENTRADAS
                    </a>
                </div>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    type="button"
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* MENÚ MÓVIL */}
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}
            >
                <button
                    type="button"
                    className={styles.close}
                    onClick={closeMenu}
                    aria-label="Cerrar menú"
                >
                    ✕
                </button>

                {navigation.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </a>
                ))}

                <div className={styles.mobileButtons}>
                    <a
                        href="/entradas"
                        className={styles.mobileTicketsLink}
                        onClick={closeMenu}
                    >
                        ENTRADAS
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
