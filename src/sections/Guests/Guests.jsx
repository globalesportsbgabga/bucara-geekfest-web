import styles from "./Guests.module.css";

import guests from "../../data/guests";

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
                    Invitados Especiales
                </span>

                <h2>
                    Conoce a nuestros invitados
                </h2>

                <p className={styles.description}>
                    Cosplayers, artistas, creadores de contenido y personalidades
                    que harán del Bucara GeekFest una experiencia inolvidable.
                </p>

                <div className={styles.grid}>

                    {guests.map((guest) => (

                        <article
                            key={guest.id}
                            className={styles.card}
                        >

                            <img
                                src={guest.image}
                                alt={guest.name}
                            />

                            <h3>
                                {guest.name}
                            </h3>

                            <span>
                                {guest.role}
                            </span>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Guests;