import styles from "./HeroBackground.module.css";

function HeroBackground() {
  return (
    <>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/assets/video/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.background}></div>

      <div className={styles.lightOne}></div>

      <div className={styles.lightTwo}></div>

      <div className={styles.lightThree}></div>

      <div className={styles.overlay}></div>
    </>
  );
}

export default HeroBackground;