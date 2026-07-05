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
                Bucara GeekFest 2026
            </span>

            <h1>
                Vive la experiencia
                <br />
                <span>Bucara GeekFest</span>
            </h1>

            <p>
                El evento más grande de cultura geek,
                anime, cosplay, videojuegos,
                K-Pop, TCG, tecnología y entretenimiento
                de Santander.
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