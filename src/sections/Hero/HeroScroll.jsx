import styles from "./HeroScroll.module.css";

function HeroScroll() {

    return (

        <div className={styles.scroll}>

            <span className={styles.mouse}>

                <span className={styles.wheel}></span>

            </span>

            <p>Desliza para descubrir</p>

        </div>

    );

}

export default HeroScroll;