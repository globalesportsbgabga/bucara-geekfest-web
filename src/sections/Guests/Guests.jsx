
import styles from "./Guests.module.css";
import useReveal from "../../hooks/useReveal";

function Guests() {
    const { ref, visible } = useReveal();

    return (
        <section
            id="invitados"
            ref={ref}
            className={`${styles.guests} ${visible ? styles.visible : ""}`}
        >
            <div className={styles.container}>

                <span className={styles.badge}>
                    Invitados Especiales · LVL 2
                </span>

                <h2>
                    Nuevos talentos están por llegar
                </h2>

                <p className={styles.description}>
                    Estamos preparando una nueva edición llena de sorpresas.
                    Muy pronto conocerás a los invitados especiales que harán
                    parte de Bucara GeekFest 2027.
                </p>

                <div className={styles.expectationPanel}>
                    <div className={styles.spotlight}>
                        <span className={styles.spotlightIcon}>✦</span>
                    </div>

                    <span className={styles.comingSoon}>
                        PRÓXIMAMENTE
                    </span>

                    <h3>
                        Los invitados de LVL 2
                        <br />
                        se revelarán muy pronto
                    </h3>

                    <p>
                        Cosplayers, artistas, creadores de contenido
                        y grandes talentos están por descubrirse.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Guests;
