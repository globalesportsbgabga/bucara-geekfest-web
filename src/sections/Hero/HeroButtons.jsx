import styles from "./HeroButtons.module.css";

function HeroButtons() {

    return (

        <div className={styles.buttons}>

            <a
                href="#"
                className={styles.primary}
            >
                Comprar Entradas
            </a>

            <a
                href="https://wa.me/573000000000"
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