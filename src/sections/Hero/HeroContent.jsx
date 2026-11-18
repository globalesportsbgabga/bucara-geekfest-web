
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
        2 · 3 · 4 ABRIL 2027
      </span>

      <img
        src="/assets/hero/logo-lvl2.png"
        alt="Bucara Geek Fest LVL 2"
        className={styles.logo}
      />

      <p>
        Tres días donde el gaming, el anime, el cosplay y la cultura geek
        se encuentran. Vive la Copa Cosplay, las competencias grupales de
        K-Pop, más de 20 torneos, TCG, tecnología, invitados especiales,
        zona comercial y experiencias para toda la comunidad.
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
