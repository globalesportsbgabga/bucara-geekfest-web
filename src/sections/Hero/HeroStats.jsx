
import styles from "./HeroStats.module.css";

const stats = [
  {
    number: "+15.000",
    label: "Asistentes proyectados",
    icon: "👥",
  },
  {
    number: "+100",
    label: "Expositores",
    icon: "🏪",
  },
  {
    number: "+20",
    label: "Torneos",
    icon: "🏆",
  },
  {
    number: "3 días",
    label: "De cultura geek",
    icon: "🎮",
  },
];

function HeroStats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat) => (
        <div
          key={stat.label}
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
