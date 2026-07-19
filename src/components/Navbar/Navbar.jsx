import styles from "./Navbar.module.css";
import links from "../../data/links";
import Button from "../Button/Button";

function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.container}>

        <a href="/" className={styles.logo}>
          <img
            src="/assets/logo/logo.png"
            alt="Bucara GeekFest"
          />
        </a>

        <nav className={styles.menu}>

          <a href="#inicio">Inicio</a>

          <a href="#experience">Experiencia</a>

          <a href="#invitados">Invitados</a>

          <a href="#expositores">Expositores</a>

          <a href="#torneos">Torneos</a>

          <a href="#agenda">Agenda</a>

          <a href="#patrocinadores">Patrocinadores</a>

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
            VIP
          </Button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;