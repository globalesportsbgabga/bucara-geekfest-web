import styles from "./Level2Loader.module.css";

function Level2Loader() {
    return (
        <div className={styles.loader}>
            <img
                src="/assets/loader/lvl2-loading.png"
                alt="Bucara Geek Fest Level 2"
                className={styles.background}
            />
        </div>
    );
}

export default Level2Loader;