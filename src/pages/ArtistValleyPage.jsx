
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";
import styles from "./ArtistValleyPage.module.css";

const FORM_URL = "https://forms.gle/jWo1cCAR3fEnfSpQ7";
const WHATSAPP_URL = "https://wa.me/573058144929";

const modalities = [
  {
    id: "comercial",
    number: "01",
    name: "Zona Comercial",
    label: "PARTICIPACIÓN CON COSTO",
    description:
      "Un espacio para ilustradores, artistas gráficos y creadores independientes que desean exhibir y comercializar sus propias creaciones durante Bucara GeekFest.",
    benefits: [
      "Exhibir tus obras y creaciones.",
      "Vender tus productos durante el evento.",
      "Dar a conocer tu trabajo artístico.",
      "Conectar directamente con los visitantes.",
    ],
    type: "commercial",
  },
  {
    id: "exhibicion",
    number: "02",
    name: "Zona de Exhibición",
    label: "PARTICIPACIÓN GRATUITA",
    description:
      "Un espacio para artistas que desean mostrar su talento, compartir sus obras y dar visibilidad a sus proyectos creativos, sin realizar actividades comerciales dentro del evento.",
    benefits: [
      "Exhibir tus obras y creaciones.",
      "Repartir tarjetas y material publicitario.",
      "Dar a conocer tu portafolio artístico.",
      "Establecer contactos y relaciones profesionales.",
    ],
    type: "exhibition",
  },
];

function ArtistValleyPage() {
  return (
    <div className="app">
      <Analytics />
      <Navbar />

      <main className={`main-layout ${styles.page}`}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              BUCARA GEEKFEST LVL 2 · 2027
            </span>

            <h1>
              ARTIST <span>VALLEY</span>
            </h1>

            <p className={styles.subtitle}>
              El espacio donde ilustradores, artistas gráficos y
              creadores independientes comparten su talento,
              exhiben sus obras y conectan con la comunidad geek.
            </p>

            <div className={styles.eventInfo}>
              <span>2 · 3 · 4 ABRIL 2027</span>
              <span>NEOMUNDO · BUCARAMANGA</span>
            </div>
          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section className={styles.introduction}>
          <span className={styles.sectionLabel}>
            EL ESPACIO CREATIVO
          </span>

          <h2>
            El talento creativo tiene su propio escenario.
          </h2>

          <p>
            Artist Valley reúne a ilustradores, artistas gráficos,
            diseñadores y creadores independientes en un espacio
            dedicado al arte, la imaginación y la cultura geek.
            Una oportunidad para mostrar tu trabajo, compartir
            tus creaciones y conectar con nuevos públicos.
          </p>
        </section>

        {/* MODALIDADES */}
        <section className={styles.modalities}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              FORMAS DE PARTICIPAR
            </span>

            <h2>Dos modalidades. Un mismo espacio creativo.</h2>

            <p>
              Elige la modalidad que corresponda a tu propósito
              como artista o creador.
            </p>
          </div>

          <div className={styles.modalityGrid}>
            {modalities.map((modality) => (
              <article
                className={`${styles.modalityCard} ${
                  modality.type === "commercial"
                    ? styles.commercialCard
                    : styles.exhibitionCard
                }`}
                key={modality.id}
              >
                <span className={styles.modalityNumber}>
                  {modality.number}
                </span>

                <div className={styles.modalityContent}>
                  <span className={styles.modalityLabel}>
                    {modality.label}
                  </span>

                  <h3>{modality.name}</h3>

                  <p>{modality.description}</p>

                  <ul>
                    {modality.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalityButton}
                  >
                    SOLICITAR PARTICIPACIÓN →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONDICIONES */}
        <section className={styles.conditions}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              INFORMACIÓN IMPORTANTE
            </span>

            <h2>Condiciones de participación</h2>

            <p>
              Cada modalidad tiene condiciones específicas que
              deben respetarse durante el desarrollo del evento.
            </p>
          </div>

          <div className={styles.conditionGrid}>
            <article className={styles.conditionCard}>
              <div className={styles.conditionIcon}>01</div>

              <h3>Zona comercial</h3>

              <p>
                Los participantes de esta modalidad pueden exhibir
                y vender sus propias creaciones dentro de Bucara GeekFest.
                Esta modalidad tiene un costo de participación.
              </p>
            </article>

            <article className={styles.conditionCard}>
              <div className={styles.conditionIcon}>02</div>

              <h3>Zona de exhibición</h3>

              <p>
                Los participantes pueden mostrar sus obras y repartir
                tarjetas, folletos y material publicitario. Esta modalidad
                es gratuita y no permite realizar ventas dentro del evento.
              </p>
            </article>

            <article className={styles.conditionCard}>
              <div className={styles.conditionIcon}>03</div>

              <h3>Negociaciones externas</h3>

              <p>
                Los artistas de exhibición pueden establecer contactos
                y conversar sobre posibles trabajos o encargos. Sin embargo,
                cualquier venta, cobro o transacción deberá concretarse
                fuera del evento.
              </p>
            </article>
          </div>
        </section>

        {/* REGISTRO */}
        <section className={styles.registration}>
          <div className={styles.registrationContent}>
            <span className={styles.sectionLabel}>
              CONVOCATORIA ARTIST VALLEY
            </span>

            <h2>
              Tu talento merece
              <span> un escenario.</span>
            </h2>

            <p>
              Si eres ilustrador, artista gráfico o creador independiente,
              te invitamos a formar parte de Artist Valley en Bucara GeekFest
              LVL 2.
            </p>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.registrationButton}
            >
              DILIGENCIAR FORMULARIO →
            </a>

            <div className={styles.contact}>
              <span>¿NECESITAS MÁS INFORMACIÓN?</span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP: 305 814 4929
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ArtistValleyPage;
