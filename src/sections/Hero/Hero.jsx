import styles from "./Hero.module.css";

import HeroBackground from "./HeroBackground";
import HeroAurora from "./HeroAurora";
import HeroContent from "./HeroContent";

function Hero() {

    return (

        <section
            id="inicio"
            className={styles.hero}
        >

            <HeroBackground />

            <HeroAurora />

            <HeroContent />

        </section>

    );

}

export default Hero;