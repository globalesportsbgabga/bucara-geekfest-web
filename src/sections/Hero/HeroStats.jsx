import styles from "./HeroStats.module.css";

const stats = [
    {
        value: "+5.000",
        label: "Asistentes"
    },
    {
        value: "100",
        label: "Expositores"
    },
    {
        value: "30+",
        label: "Actividades"
    },
    {
        value: "3",
        label: "Días"
    }
];

function HeroStats() {

    return (

        <div className={styles.stats}>

            {stats.map((item) => (

                <div
                    key={item.label}
                    className={styles.card}
                >

                    <span className={styles.value}>
                        {item.value}
                    </span>

                    <span className={styles.label}>
                        {item.label}
                    </span>

                </div>

            ))}

        </div>

    );

}

export default HeroStats;