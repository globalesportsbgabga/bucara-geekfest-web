
import styles from "./Sponsors.module.css";
import sponsors from "../../data/sponsors";

function Sponsors() {
  const sponsorsOfficial = sponsors.filter(
    (item) => item.type === "sponsor"
  );

  const collaborators = sponsors.filter(
    (item) => item.type === "collaborator"
  );

  const allies = sponsors.filter(
    (item) => item.type === "ally"
  );

  function Card({ item }) {
    const content = (
      <>
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
          />
        )}

        <h3>{item.name}</h3>

        {!item.image && (
          <span>Logotipo próximamente</span>
        )}
      </>
    );

    if (item.link) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          {content}
        </a>
      );
    }

    return (
      <div className={styles.card}>
        {content}
      </div>
    );
  }

  return (
    <section
      className={styles.sponsors}
      id="patrocinadores"
    >
      <div className={styles.container}>
        <span className={styles.badge}>
          Patrocinadores y marcas colaboradoras
        </span>

        <h2>
          Gracias por creer en Bucara GeekFest
        </h2>

        <p>
          Empresas y marcas que se suman a esta
          experiencia para toda la comunidad geek.
        </p>

        {sponsorsOfficial.length > 0 && (
          <>
            <h3 className={styles.title}>
              PATROCINADORES OFICIALES
            </h3>

            <div className={styles.gridSponsors}>
              {sponsorsOfficial.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {collaborators.length > 0 && (
          <>
            <h3 className={styles.title}>
              MARCAS COLABORADORAS
            </h3>

            <div className={styles.gridAllies}>
              {collaborators.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {allies.length > 0 && (
          <>
            <h3 className={styles.title}>
              ALIADOS INSTITUCIONALES
            </h3>

            <div className={styles.gridAllies}>
              {allies.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Sponsors;
