import styles from "./RegistrationHub.module.css";

import links from "../../data/links";

import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";

const registrations = [
  {
    id: 1,
    title: "Registro general",
    description:
      "Recibe noticias, anuncios e información oficial del Bucara GeekFest.",
    button: "Registrarme",
    link: links.tickets,
  },
  {
    id: 2,
    title: "Inscripción a Torneos",
    description:
      "Consulta las categorías disponibles e inscríbete para competir.",
    button: "Ir al formulario",
    link: links.tournaments,
  },
  {
    id: 3,
    title: "Concurso Cosplay",
    description:
      "Participa con tu mejor cosplay y demuestra tu talento.",
    button: "Inscribirme",
    link: links.cosplay,
  },
  {
    id: 4,
    title: "Quiero ser Expositor",
    description:
      "Reserva un stand para mostrar y vender tus productos.",
    button: "Solicitar Stand",
    link: links.exhibitor,
  },
  {
    id: 5,
    title: "Quiero ser Patrocinador",
    description:
      "Conoce nuestros planes de patrocinio y haz crecer tu marca con nosotros.",
    button: "Más información",
    link: links.sponsor,
  },
];

function RegistrationHub() {
  return (
    <section className={styles.registration} id="registro">

      <SectionContainer>

        <SectionTitle
          badge="Centro de Inscripciones"
          title="Todo comienza aquí"
          subtitle="Selecciona la opción que mejor se adapte a ti y forma parte del Bucara GeekFest."
        />

        <div className={styles.grid}>

          {registrations.map((item) => (

            <article
              key={item.id}
              className={styles.card}
            >

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {item.button}
              </a>

            </article>

          ))}

        </div>

      </SectionContainer>

    </section>
  );
}

export default RegistrationHub;