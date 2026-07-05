import styles from "./HeroBackground.module.css";

function HeroBackground() {
  return (
    <>
      <div className={styles.background}></div>

      <div className={styles.lightOne}></div>

      <div className={styles.lightTwo}></div>

      <div className={styles.lightThree}></div>

      <div className={styles.overlay}></div>
    </>
  );
}

export default HeroBackground;