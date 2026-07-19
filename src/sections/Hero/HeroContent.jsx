import styles from "./HeroContent.module.css";

import HeroInfo from "./HeroInfo";
import HeroButtons from "./HeroButtons";
import HeroCountdown from "./HeroCountdown";
import HeroStats from "./HeroStats";
import HeroBadges from "./HeroBadges";
import HeroScroll from "./HeroScroll";

function HeroContent() {
  return (
    <div className={styles.content}>

      <span className={styles.badge}>
        21 · 22 · 23 AGOSTO 2026
      </span>

      <h1>
        EL EVENTO GEEK
        <br />
        <span>MÁS GRANDE</span>
        <br />
        DEL NORORIENTE COLOMBIANO
      </h1>

      <p>
        Tres días de videojuegos, anime, cosplay,
        K-Pop, TCG, tecnología, invitados especiales,
        competencias, experiencias inmersivas y una
        comunidad que vive la cultura geek como nunca antes.
      </p>

      <HeroInfo />

      <HeroButtons />

      <HeroCountdown />

      <HeroStats />

      <HeroBadges />

      <HeroScroll />

    </div>
  );
}

export default HeroContent;