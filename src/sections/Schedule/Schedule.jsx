import styles from "./Schedule.module.css";

const schedule = [
  {
    day: "21 AGO",
    title: "Inauguración",
    description: "Apertura oficial, escenario principal y primeras actividades."
  },
  {
    day: "22 AGO",
    title: "Competencias",
    description: "Cosplay, videojuegos, TCG, K-Pop y actividades especiales."
  },
  {
    day: "23 AGO",
    title: "Gran Final",
    description: "Finales, premiaciones y cierre oficial del Bucara GeekFest."
  }
];

function Schedule() {
  return (
    <section className={styles.schedule} id="agenda">

      <div className={styles.container}>

        <span className={styles.badge}>
          Agenda
        </span>

        <h2>Cronograma del Evento</h2>

        <p>
          Tres días llenos de cultura geek, videojuegos,
          anime, cosplay, tecnología y entretenimiento.
        </p>

        <div className={styles.timeline}>

          {schedule.map((item, index) => (

            <article
              key={index}
              className={styles.card}
            >

              <div className={styles.day}>
                {item.day}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Schedule;