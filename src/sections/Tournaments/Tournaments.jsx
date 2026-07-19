import styles from "./Tournaments.module.css";
import tournaments from "../../data/tournaments";

function Tournaments() {

    return (

        <section
            className={styles.tournaments}
            id="torneos"
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Torneos Oficiales
                </span>

                <h2>
                    ¿Estás listo para competir?
                </h2>

                <p className={styles.description}>
                    Inscríbete directamente en tu torneo favorito y asegura tu cupo
                    antes de que se agoten.
                </p>

                <div className={styles.grid}>

                    {tournaments.map((tournament) => (

                        <article
                            key={tournament.id}
                            className={styles.card}
                        >

                            <div className={styles.imageContainer}>

                                <img
                                    src={tournament.image}
                                    alt={tournament.title}
                                    className={styles.image}
                                />

                                <span className={styles.category}>
                                    {tournament.category}
                                </span>

                            </div>

                            <div className={styles.content}>

                                <h3>
                                    {tournament.title}
                                </h3>

                                <p>
                                    {tournament.description}
                                </p>

                                <div className={styles.info}>

                                    <div>
                                        <strong>🏆 Premio</strong>
                                        <span>{tournament.prize}</span>
                                    </div>

                                    <div>
                                        <strong>👥 Cupos</strong>
                                        <span>{tournament.slots}</span>
                                    </div>

                                    <div>
                                        <strong>📅 Fecha</strong>
                                        <span>{tournament.date}</span>
                                    </div>

                                </div>

                                <span className={styles.status}>
                                    🟢 {tournament.status}
                                </span>

                                <a
                                    href={tournament.register}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >
                                    Inscribirme Ahora
                                </a>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Tournaments;