
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";
import tcg from "../data/tcg";
import styles from "./TCGPage.module.css";

function TCGPage() {
  return (
    <div className="app">
      <Analytics />
      <Navbar />

      <main className={`main-layout ${styles.page}`}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              BUCARA GEEKFEST LVL 2 · 2027
            </span>

            <h1>
              TRADING CARD <span>GAMES</span>
            </h1>

            <p>
              Estrategia, colección y competencia se encuentran
              en el universo de los juegos de cartas.
              Prepárate para demostrar tu habilidad en los
              torneos TCG de Bucara GeekFest.
            </p>

            <div className={styles.eventInfo}>
              <span>2 · 3 · 4 ABRIL 2027</span>
              <span>NEOMUNDO · BUCARAMANGA</span>
            </div>
          </div>
        </section>

        <section className={styles.introduction}>
          <span className={styles.sectionLabel}>
            COMPETENCIAS TCG
          </span>

          <h2>El juego está en tus cartas</h2>

          <p>
            Tres universos de cartas coleccionables tendrán
            su espacio de competencia en esta edición.
            Consulta próximamente los detalles de cada torneo.
          </p>

          <div className={styles.organizer}>
            <span className={styles.organizerLabel}>
              PATROCINADOR Y ORGANIZADOR OFICIAL DE LOS TORNEOS TCG
            </span>

            <img
              src="/assets/tcg/arcana-games.png"
              alt="Arcana Games"
              className={styles.organizerLogo}
            />

            <p>
              Arcana Games, patrocinador de Bucara GeekFest
              LVL 2, estará a cargo de la organización de las
              competencias de Trading Card Games durante el evento.
            </p>
          </div>
        </section>

        <section className={styles.competitions}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              JUEGOS CONFIRMADOS
            </span>

            <h2>Elige tu universo</h2>

            <p>
              Próximamente publicaremos reglamentos,
              fechas y procesos de inscripción.
            </p>
          </div>

          <div className={styles.grid}>
            {tcg.map((game) => (
              <article
                key={game.id}
                className={styles.card}
                style={{
                  "--card-image": game.image
                    ? `url("${game.image}")`
                    : "none",
                }}
              >
                <span className={styles.status}>
                  PRÓXIMAMENTE
                </span>

                <span className={styles.category}>
                  {game.category}
                </span>

                <div className={styles.content}>
                  <h3>{game.title}</h3>

                  <p className={styles.description}>
                    {game.description}
                  </p>

                  <div className={styles.info}>
                    <div>
                      <strong>Premio</strong>
                      <span>{game.prize}</span>
                    </div>

                    <div>
                      <strong>Cupos</strong>
                      <span>{game.slots}</span>
                    </div>

                    <div>
                      <strong>Fecha</strong>
                      <span>{game.date}</span>
                    </div>
                  </div>

                  <div className={styles.actions}>
                    <span className={styles.disabledButton}>
                      REGLAMENTO PRÓXIMAMENTE
                    </span>

                    <span className={styles.disabledButton}>
                      INSCRIPCIONES PRÓXIMAMENTE
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing}>
          <h2>Prepara tu mazo</h2>

          <p>
            La competencia está por comenzar.
            Mantente pendiente de los próximos anuncios.
          </p>

          <span>TCG · ARCANA GAMES · BUCARA GEEKFEST 2027</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TCGPage;
