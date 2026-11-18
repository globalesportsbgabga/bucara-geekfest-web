
import styles from "./BannerCTA.module.css";
import links from "../../data/links";

function BannerCTA() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.badge}>
          ARTIST VALLEY · 2027
        </span>

        <h2>
          EL TALENTO CREATIVO
          <br />
          TIENE SU PROPIO
          <br />
          ESCENARIO
        </h2>

        <p>
          Un espacio para ilustradores, artistas, dibujantes,
          diseñadores y creadores independientes. Descubre
          propuestas originales y celebra la creatividad
          en Bucara GeekFest LVL 2.
        </p>

        <a
          href={links.exhibitor}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          🎨 QUIERO PARTICIPAR EN ARTIST VALLEY
        </a>
      </div>
    </section>
  );
}

export default BannerCTA;
