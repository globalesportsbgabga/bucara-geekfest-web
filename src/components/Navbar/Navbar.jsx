import styles from "./Navbar.module.css";
import links from "../../data/links";
function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.container}>

        <a href="/" className={styles.logo}>

          <img
            src="/assets/logo/logo.png"
            alt=""
          />

          <span></span>

        </a>

        <nav className={styles.menu}>

  <a href="#inicio">Inicio</a>

  <a href="#experience">Experiencia</a>

  <a href="#invitados">Invitados</a>

  <a href="#expositores">Expositores</a>

  <a href="#torneos">Torneos</a>

  <a href={links.vip} target="_blank" rel="noopener noreferrer">
    Registro
  </a>

  <a href={links.exhibitor} target="_blank" rel="noopener noreferrer">
    Expositores
  </a>

  <a href="#agenda">Agenda</a>

  <a href="#patrocinadores">Patrocinadores</a>

  <a href="#faq">FAQ</a>

</nav>

        <div className={styles.actions}>

<a
    href={links.vip}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.primary}
>
    🎟️ Quieres ser VIP ?
</a>

<a
    href={links.exhibitor}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.primary}
>
    🏪 Quieres ser expositor ?
</a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;