import styles from "./HeroButtons.module.css";

function HeroButtons() {

    return (

        <div className={styles.buttons}>

            <a
                href="https://wa.me/573058144929"
                target="_blank"
                rel="noreferrer"
                className={styles.secondary}
            >
                SER VIP
            </a>

            <a
                href="https://wa.me/573058144929"
                target="_blank"
                rel="noreferrer"
                className={styles.secondary}
            >
                WhatsApp
            </a>

        </div>

    );

}

export default HeroButtons;