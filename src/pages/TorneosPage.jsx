
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";
import tournaments from "../data/tournaments";
import styles from "./TorneosPage.module.css";

function TorneosPage() {
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
              TORNEOS <span>GAMER</span>
            </h1>

            <p>
              Veinte espacios de competencia para demostrar
              tu habilidad, enfrentarte a otros jugadores y
              vivir la emoción de Bucara GeekFest.
            </p>

            <div className={styles.eventInfo}>
              <span>2 · 3 · 4 ABRIL 2027</span>
              <span>NEOMUNDO · BUCARAMANGA</span>
            </div>
          </div>
        </section>

        <section className={styles.introduction}>
          <span className={styles.sectionLabel}>
            COMPETENCIAS OFICIALES
          </span>

          <h2>Encuentra tu próximo desafío</h2>

          <p>
            Explora los videojuegos que formarán parte de
            nuestros torneos. Cada competencia contará con
            información, reglamento y proceso de inscripción
            propios.
          </p>

          <div className={styles.vipNotice}>
            <strong>Requisito de participación</strong>

            <p>
              Para competir es necesario contar con un pase
              VIP vigente para el día del torneo. El pase VIP
              de un día permite participar únicamente en la
              fecha de su validez. El pase VIP de tres días
              permite participar durante las tres jornadas
              del evento.
            </p>
          </div>
        </section>

        <section className={styles.tournaments}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              VIDEOJUEGOS
            </span>

            <h2>Los torneos</h2>

            <p>
              Consulta los detalles de cada competencia.
            </p>
          </div>

          <div className={styles.grid}>
            {tournaments.map((tournament) => {
              const isPending =
                tournament.status === "Por definir";

              const hasRegulation =
                Boolean(tournament.regulation);

              const hasRegistration =
                Boolean(tournament.register);

              return (
                <article
                  key={tournament.id}
                  className={
                    isPending
                      ? styles.pendingCard
                      : styles.card
                  }
                >
                  {isPending ? (
                    <>
                      <span>{tournament.id}</span>

                      <h3>{tournament.title}</h3>

                      <p>
                        {tournament.description}
                      </p>

                      <span className={styles.pendingLabel}>
                        PRÓXIMAMENTE
                      </span>
                    </>
                  ) : (
                    <>
                      <div className={styles.imageContainer}>
                        {tournament.image && (
                          <img
                            src={tournament.image}
                            alt={tournament.title}
                            className={styles.image}
                            loading="lazy"
                          />
                        )}

                        <span className={styles.category}>
                          {tournament.category}
                        </span>
                      </div>

                      <div className={styles.content}>
                        <h3>{tournament.title}</h3>

                        <p className={styles.description}>
                          {tournament.description}
                        </p>

                        <div className={styles.info}>
                          <div>
                            <strong>Premio</strong>
                            <span>{tournament.prize}</span>
                          </div>

                          <div>
                            <strong>Cupos</strong>
                            <span>{tournament.slots}</span>
                          </div>

                          <div>
                            <strong>Fecha</strong>
                            <span>{tournament.date}</span>
                          </div>
                        </div>

                        <span
                          className={`${styles.status} ${
                            isPending ? styles.pending : ""
                          }`}
                        >
                          {tournament.status}
                        </span>

                        <div className={styles.actions}>
                          {hasRegulation ? (
                            <a
                              href={tournament.regulation}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.disabledButton}
                            >
                              VER REGLAMENTO
                            </a>
                          ) : (
                            <span className={styles.disabledButton}>
                              REGLAMENTO PRÓXIMAMENTE
                            </span>
                          )}

                          {hasRegistration ? (
                            <a
                              href={tournament.register}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.disabledButton}
                            >
                              INSCRIBIRME
                            </a>
                          ) : (
                            <span className={styles.disabledButton}>
                              INSCRIPCIONES PRÓXIMAMENTE
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.closing}>
          <h2>¿Tienes lo necesario para ganar?</h2>

          <p>
            Prepara tu estrategia y mantente pendiente de
            la apertura de las inscripciones.
          </p>

          <span>BUCARA GEEKFEST LVL 2 · 2027</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TorneosPage;
