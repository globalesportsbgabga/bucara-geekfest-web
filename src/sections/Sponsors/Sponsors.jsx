import styles from "./Sponsors.module.css";
import sponsors from "../../data/sponsors";

function Sponsors() {
  return (
    <section className={styles.sponsors} id="patrocinadores">

      <div className={styles.container}>

        <span className={styles.badge}>
          Patrocinadores
        </span>

        <h2>
          Ellos hacen posible el Bucara GeekFest
        </h2>

        <p>
          Gracias a nuestros patrocinadores y aliados estratégicos
          por apoyar el crecimiento de la comunidad geek,
          gamer, cosplay y tecnológica.
        </p>

        <div className={styles.grid}>

          {sponsors.map((sponsor) => (

            <article
              key={sponsor.id}
              className={styles.card}
            >

              <img
                src={sponsor.image}
                alt={sponsor.name}
              />

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Sponsors;