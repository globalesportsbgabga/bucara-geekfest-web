
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";
import links from "../data/links";
import styles from "./KpopPage.module.css";

function KpopPage() {
  const regulationLink = links.kpop.regulation;
  const registrationLink = links.kpop.registration;

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
              BATALLA <span>GRUPAL K-POP</span>
            </h1>

            <p>
              La música, la coreografía y el trabajo en equipo
              se unen en una competencia para celebrar el talento
              de las agrupaciones K-Pop.
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
            EL MUNDO K-POP
          </span>

          <h2>La cultura K-Pop toma el escenario</h2>

          <p>
            La música, el baile y la expresión artística se
            encuentran en Bucara GeekFest LVL 2. Prepárate para
            disfrutar de un espacio dedicado a la cultura K-Pop,
            con competencias y actividades para celebrar el
            talento de sus comunidades y seguidores.
          </p>
        </section>

        {/* COMUNIDAD ORGANIZADORA */}
        <section className={styles.organizer}>
          <span className={styles.sectionLabel}>
            COMUNIDAD ALIADA Y ORGANIZADORA
          </span>

          <div className={styles.organizerCard}>
            <div className={styles.organizerLogo}>
              <img
                src="/assets/hero/ksoul.png"
                alt="K-Soul - Comunidad Cultural Coreana"
              />
            </div>

            <div className={styles.organizerInfo}>
              <span className={styles.organizerTag}>
                COMUNIDAD CULTURAL COREANA
              </span>

              <h2>K-Soul</h2>

              <p>
                K-Soul será nuestra comunidad aliada en la
                organización y coordinación del mundo K-Pop
                de Bucara GeekFest LVL 2, acompañando las
                competencias de baile grupal e individual,
                así como las actividades de este espacio
                dedicado a la cultura coreana.
              </p>
            </div>
          </div>
        </section>

        {/* COMPETENCIAS */}
        <section className={styles.information}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              COMPETENCIAS K-POP
            </span>

            <h2>El talento tiene su propio escenario</h2>

            <p>
              Dos modalidades para compartir la pasión por el
              baile, la música y las coreografías K-Pop.
            </p>
          </div>

          <div className={styles.competitionGrid}>
            <article className={styles.competitionCard}>
              <span className={styles.competitionNumber}>
                01
              </span>

              <h3>Competencia Grupal</h3>

              <p>
                Reúne a tu agrupación, prepara tu coreografía
                y demuestra el talento, la coordinación y
                el trabajo en equipo sobre el escenario.
              </p>

              <span className={styles.competitionStatus}>
                PRÓXIMAMENTE
              </span>
            </article>

            <article className={styles.competitionCard}>
              <span className={styles.competitionNumber}>
                02
              </span>

              <h3>Competencia Individual</h3>

              <p>
                Una oportunidad para que los bailarines
                individuales compartan su talento y pasión
                por las coreografías K-Pop.
              </p>

              <span className={styles.competitionStatus}>
                PRÓXIMAMENTE
              </span>
            </article>
          </div>
        </section>

        {/* PARTICIPACIÓN */}
        <section className={styles.information}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              PARTICIPACIÓN
            </span>

            <h2>Prepara tu presentación</h2>

            <p>
              Próximamente publicaremos las condiciones,
              los requisitos de participación y los procesos
              de inscripción de las competencias.
            </p>
          </div>

          <div className={styles.actionCard}>
            <div>
              <span className={styles.comingSoon}>
                CONVOCATORIA PRÓXIMAMENTE
              </span>

              <h3>¿Quieres participar?</h3>

              <p>
                Mantente pendiente de la apertura de
                inscripciones y de la publicación de los
                reglamentos oficiales.
              </p>
            </div>

            <div className={styles.actions}>
              {regulationLink ? (
                <a
                  href={regulationLink}
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

              {registrationLink ? (
                <a
                  href={registrationLink}
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
        </section>

        {/* CIERRE */}
        <section className={styles.closing}>
          <h2>La próxima coreografía puede ser la tuya.</h2>

          <p>
            Reúne a tu grupo o prepara tu presentación
            individual y vive el mundo K-Pop en Bucara GeekFest.
          </p>

          <span>BUCARA GEEKFEST LVL 2 · 2027</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default KpopPage;
