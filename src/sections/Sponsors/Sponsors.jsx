import styles from "./Sponsors.module.css";
import sponsors from "../../data/sponsors";

function Sponsors() {

    const sponsorsOfficial = sponsors.filter(
        (item) => item.type === "sponsor"
    );

    const allies = sponsors.filter(
        (item) => item.type === "ally"
    );

    function Card({ item }) {

        return (

            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
            >

                <img
                    src={item.image}
                    alt={item.name}
                />

                <h3>
                    {item.name}
                </h3>

            </a>

        );

    }

    return (

        <section
            className={styles.sponsors}
            id="patrocinadores"
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Patrocinadores & Aliados
                </span>

                <h2>

                    Gracias por creer en Bucara GeekFest

                </h2>

                <p>

                    Empresas, marcas y aliados que hacen posible
                    esta experiencia para toda la comunidad geek.

                </p>

                <h3 className={styles.title}>

                    PATROCINADORES OFICIALES

                </h3>

                <div className={styles.gridSponsors}>

                    {sponsorsOfficial.map((item)=>(

                        <Card
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

                <h3 className={styles.title}>

                    APOYAN

                </h3>

                <div className={styles.gridAllies}>

                    {allies.map((item)=>(

                        <Card
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Sponsors;