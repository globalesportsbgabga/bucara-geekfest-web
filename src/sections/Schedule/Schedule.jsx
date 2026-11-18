
import styles from "./Schedule.module.css";

const schedule = [
  {
    day: "02 ABR",
    title: "Inauguración",
    description:
      "Programación y actividades próximamente. Muy pronto anunciaremos el cronograma oficial de Bucara GeekFest LVL 2."
  },
  {
    day: "03 ABR",
    title: "Día de actividades",
    description:
      "Programación y actividades próximamente. Muy pronto anunciaremos el cronograma oficial de Bucara GeekFest LVL 2."
  },
  {
    day: "04 ABR",
    title: "Finales y clausura",
    description:
      "Programación y actividades próximamente. Muy pronto anunciaremos el cronograma oficial de Bucara GeekFest LVL 2."
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
          Tres días de Bucara GeekFest LVL 2.
          La programación oficial estará disponible próximamente.
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

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
