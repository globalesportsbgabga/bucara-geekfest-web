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

          <a href="#invitados">Invitados</a>

          <a href="#torneos">Torneos</a>

          <a href="#agenda">Agenda</a>

          <a href="#contacto">Contacto</a>

        </nav>

        <div className={styles.actions}>

          <button className={styles.secondary}>
            VIP
          </button>

          <button className={styles.primary}>
            Comprar Entradas
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;