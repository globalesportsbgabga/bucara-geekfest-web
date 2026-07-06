import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>

      <div className={styles.container}>

        <a href="/" className={styles.logo}>

          <img
            src="/assets/logo/logo.png"
            alt="Bucara GeekFest"
          />

          <span>Bucara GeekFest</span>

        </a>

        <nav className={styles.menu}>

  <a href="#inicio">Inicio</a>

  <a href="#experience">Experiencia</a>

  <a href="#invitados">Invitados</a>

  <a href="#expositores">Expositores</a>

  <a href="#torneos">Torneos</a>

  <a href="#registro">Registro</a>

  <a href="#agenda">Agenda</a>

  <a href="#patrocinadores">Patrocinadores</a>

  <a href="#faq">FAQ</a>

</nav>

        <div className={styles.actions}>

          <a
    href="#registro"
    className={styles.primary}
>
    🎟️ VIP
</a>

          <a
    href="#registro"
    className={styles.primary}
>
    🎟️ Regístrate
</a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;