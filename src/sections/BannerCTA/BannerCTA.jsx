import styles from "./BannerCTA.module.css";
import links from "../../data/links";

function BannerCTA() {

    return (

        <section className={styles.banner}>

            <div className={styles.overlay}></div>

            <div className={styles.content}>

                <span className={styles.badge}>
                    TORNEOS OFICIALES 2026
                </span>

                <h2>
                    ¿ESTÁS LISTO PARA
                    <br />
                    DEMOSTRAR TU NIVEL?
                </h2>

                <p>

                    Más de 10 torneos,
                    premios,
                    invitados especiales
                    y cientos de jugadores
                    competirán durante
                    Bucara GeekFest.

                </p>

                <a

                    href={links.tournaments}

                    target="_blank"

                    rel="noopener noreferrer"

                    className={styles.button}

                >

                    🎮 INSCRIBIRME AHORA

                </a>

            </div>

        </section>

    );

}

export default BannerCTA;