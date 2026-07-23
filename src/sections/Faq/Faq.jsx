import { useState } from "react";
import styles from "./FAQ.module.css";
import faq from "../../data/faq";

function FAQ() {

    const [active, setActive] = useState(null);

    function toggle(id){

        setActive(active === id ? null : id);

    }

    return(

        <section
            id="faq"
            className={styles.faq}
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Preguntas Frecuentes
                </span>

                <h2>
                    Todo lo que necesitas saber
                </h2>

                <p className={styles.description}>
                    Resolvemos las dudas más comunes para que disfrutes al máximo
                    tu experiencia en Bucara GeekFest.
                </p>

                <div className={styles.accordion}>

                    {faq.map(item=>(

                        <article
                            key={item.id}
                            className={`${styles.item} ${
                                active === item.id ? styles.active : ""
                            }`}
                        >

                            <button

                                className={styles.question}

                                onClick={()=>toggle(item.id)}

                            >

                                <span>

                                    {item.question}

                                </span>

                                <span
                                    className={styles.icon}
                                >

                                    +

                                </span>

                            </button>

                            <div
                                className={styles.answer}
                            >

                                <p>

                                    {item.answer}

                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FAQ;