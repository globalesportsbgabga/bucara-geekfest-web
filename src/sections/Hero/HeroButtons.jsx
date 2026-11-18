
import styles from "./HeroButtons.module.css";

function HeroButtons() {
  return (
    <div className={styles.buttons}>
      <a
        href="/entradas"
        className={styles.primary}
      >
        OBTÉN TU VIP
      </a>

      <a
        href="https://wa.me/573058144929"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondary}
      >
        CONTÁCTANOS POR WHATSAPP
      </a>
    </div>
  );
}

export default HeroButtons;
