import styles from "./HeroStats.module.css";

const stats = [
  {
    number: "+5.000",
    label: "Visitantes",
    icon: "👥",
  },
  {
    number: "+50",
    label: "Expositores",
    icon: "🏪",
  },
  {
    number: "+20",
    label: "Torneos",
    icon: "🏆",
  },
  {
    number: "3",
    label: "Días",
    icon: "📅",
  },
];

function HeroStats() {
  return (
    <div className={styles.stats}>

      {stats.map((stat, index) => (

        <div
          key={index}
          className={styles.card}
        >

          <span className={styles.icon}>
            {stat.icon}
          </span>

          <span className={styles.number}>
            {stat.number}
          </span>

          <span className={styles.label}>
            {stat.label}
          </span>

        </div>

      ))}

    </div>
  );
}

export default HeroStats;