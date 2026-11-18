
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";
import links from "../data/links";
import styles from "./CopaCosplayPage.module.css";

const categories = [
  {
    id: "cospobre",
    number: "01",
    name: "Cospobre",
    description:
      "Una categoría para demostrar que la creatividad, el ingenio y la pasión por el cosplay no dependen de un gran presupuesto.",
    image: "/assets/cosplay/cospobre.png",
    regulation: links.cosplay.cospobre.regulation,
    registration: links.cosplay.cospobre.registration,
  },
  {
    id: "amateur",
    number: "02",
    name: "Amateur",
    description:
      "Un espacio para cosplayers que quieren compartir su talento, dedicación y trabajo en el escenario.",
    image: "/assets/cosplay/amateur.png",
    regulation: links.cosplay.amateur.regulation,
    registration: links.cosplay.amateur.registration,
  },
  {
    id: "profesional",
    number: "03",
    name: "Profesional",
    description:
      "Una categoría para participantes con experiencia que buscan presentar propuestas de alto nivel artístico y técnico.",
    image: "/assets/cosplay/profesional.png",
    regulation: links.cosplay.profesional.regulation,
    registration: links.cosplay.profesional.registration,
  },
];

function CopaCosplayPage() {
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
              COPA <span>COSPLAY</span>
            </h1>

            <p className={styles.subtitle}>
              El talento, la creatividad y la pasión por dar vida
              a tus personajes favoritos se encuentran en un mismo escenario.
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
            LA COMPETENCIA
          </span>

          <h2>Tres categorías. Una misma pasión.</h2>

          <p>
            La Copa Cosplay de Bucara GeekFest reúne diferentes formas
            de expresión artística alrededor del cosplay. Elige la
            categoría que corresponda a tu participación y consulta
            su información.
          </p>

          <div className={styles.vipNotice}>
            <strong>Requisito de participación</strong>

            <p>
              Para competir es necesario contar con un pase VIP vigente
              para el día de la competencia. El pase VIP de un día
              permite participar únicamente en la fecha de su validez.
              El pase VIP de tres días permite participar durante
              las tres jornadas del evento.
            </p>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className={styles.categories}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              MODALIDADES
            </span>

            <h2>Elige tu categoría</h2>

            <p>
              Cada modalidad contará con su propio reglamento
              y proceso de inscripción.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <article
                className={styles.categoryCard}
                key={category.id}
                style={{
                  "--category-image": `url("${category.image}")`,
                }}
              >
                <span className={styles.categoryNumber}>
                  {category.number}
                </span>

                <div className={styles.categoryContent}>
                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <div className={styles.categoryActions}>
                    {category.regulation ? (
                      <a
                        href={category.regulation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}
                      >
                        LEER REGLAMENTO ↗
                      </a>
                    ) : (
                      <span className={styles.disabledButton}>
                        REGLAMENTO PRÓXIMAMENTE
                      </span>
                    )}

                    {category.registration ? (
                      <a
                        href={category.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryButton}
                      >
                        INSCRIBIRME →
                      </a>
                    ) : (
                      <span className={styles.disabledButton}>
                        INSCRIPCIONES PRÓXIMAMENTE
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* JURADOS */}
        <section className={styles.judges}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              JURADOS OFICIALES
            </span>

            <h2>Expertos que inspiran</h2>

            <p>
              Conoce próximamente a los especialistas invitados
              que formarán parte del jurado de la Copa Cosplay.
            </p>
          </div>

          <div className={styles.judgesPlaceholder}>
            <div className={styles.judgeIcon}>
              <span>★</span>
            </div>

            <h3>Próximamente conocerás a nuestros jurados</h3>

            <p>
              Estamos preparando la presentación de los invitados
              que acompañarán y evaluarán esta competencia.
            </p>

            <span className={styles.judgesStatus}>
              PRESENTACIÓN OFICIAL PRÓXIMAMENTE
            </span>
          </div>
        </section>

        {/* CIERRE */}
        <section className={styles.closing}>
          <h2>¿Estás listo para subir al escenario?</h2>

          <p>
            Prepara tu personaje y mantente pendiente de la apertura
            oficial de las inscripciones.
          </p>

          <span>CONVOCATORIA PRÓXIMAMENTE</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CopaCosplayPage;
