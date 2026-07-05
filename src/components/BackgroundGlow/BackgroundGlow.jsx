import styles from "./BackgroundGlow.module.css";

function BackgroundGlow() {
  return (
    <div className={styles.glowContainer}>

      <span className={styles.glowOne}></span>

      <span className={styles.glowTwo}></span>

      <span className={styles.glowThree}></span>

    </div>
  );
}

export default BackgroundGlow;