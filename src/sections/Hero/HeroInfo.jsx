import styles from "./HeroInfo.module.css";

function HeroInfo() {

    return (

        <div className={styles.info}>

            <div className={styles.item}>
                <span>📅</span>
                <p>21 al 23 de Agosto 2026</p>
            </div>

            <div className={styles.item}>
                <span>📍</span>
                <p>Bucaramanga, Colombia</p>
            </div>

            <div className={styles.item}>
                <span>🕘</span>
                <p>Desde las 9:00 AM</p>
            </div>

        </div>

    );

}

export default HeroInfo;