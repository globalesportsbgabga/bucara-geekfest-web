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
          Torneos
        </span>

        <h2>
          Vive la competencia
        </h2>

        <p className={styles.description}>
          Participa en nuestros torneos y actividades durante los tres días del Bucara GeekFest.
        </p>

        <div className={styles.grid}>

          {tournaments.map((tournament) => (

            <article
              key={tournament.id}
              className={styles.card}
            >

              <span className={styles.category}>
                {tournament.category}
              </span>

              <h3>
                {tournament.title}
              </h3>

              <p>
                {tournament.description}
              </p>

              <span className={styles.status}>
                {tournament.status}
              </span>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Tournaments;