
import styles from "./HeroInfo.module.css";

function HeroInfo() {
  const items = [
    {
      icon: "📍",
      title: "Neomundo",
      text: "Salones Barichara y Pienta",
    },
    {
      icon: "📅",
      title: "2 · 3 · 4",
      text: "Abril 2027",
    },
    {
      icon: "👥",
      title: "+15.000",
      text: "Asistentes proyectados",
    },
    {
      icon: "🏆",
      title: "Copa Cosplay",
      text: "K-Pop y mucho más",
    },
  ];

  return (
    <div className={styles.info}>
      {items.map((item) => (
        <div
          key={item.title}
          className={styles.card}
        >
          <div className={styles.icon}>
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroInfo;
