import styles from "./GalleryControls.module.css";

function GalleryControls({

    onPrev,

    onNext,

    current,

    total

}){

    return(

        <div className={styles.controls}>

            <button
                onClick={onPrev}
                className={styles.button}
            >
                ←
            </button>

            <div className={styles.counter}>

                {current + 1}

                <span>

                    /

                </span>

                {total}

            </div>

            <button
                onClick={onNext}
                className={styles.button}
            >
                →
            </button>

        </div>

    );

}

export default GalleryControls;