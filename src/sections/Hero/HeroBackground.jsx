
import { useEffect, useState } from "react";
import styles from "./HeroBackground.module.css";

const posters = [
  "/assets/hero/afiche-torneos.png",
  "/assets/hero/afiche-cosplay.png",
  "/assets/hero/afiche-kpop.png",
  "/assets/hero/afiche-experiencias.png",
];

function HeroBackground() {
  const [activePoster, setActivePoster] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePoster((current) => (current + 1) % posters.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.posters}>
        {posters.map((poster, index) => (
          <img
            key={poster}
            src={poster}
            alt=""
            aria-hidden="true"
            className={`${styles.poster} ${
              activePoster === index ? styles.active : ""
            }`}
          />
        ))}
      </div>

      <div className={styles.background}></div>
      <div className={styles.lightOne}></div>
      <div className={styles.lightTwo}></div>
      <div className={styles.lightThree}></div>
      <div className={styles.overlay}></div>
    </>
  );
}

export default HeroBackground;
