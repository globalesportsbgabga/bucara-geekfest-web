import styles from "./Faq.module.css";
import faq from "../../data/faq";

function Faq() {
  return (
    <section
      className={styles.faq}
      id="faq"
    >
      <div className={styles.container}>

        <span className={styles.badge}>
          Preguntas Frecuentes
        </span>

        <h2>
          Todo lo que debes saber
        </h2>

        <p className={styles.description}>
          Aquí respondemos las dudas más comunes sobre el Bucara GeekFest.
        </p>

        <div className={styles.list}>

          {faq.map((item) => (

            <article
              key={item.id}
              className={styles.card}
            >

              <h3>
                {item.question}
              </h3>

              <p>
                {item.answer}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Faq;