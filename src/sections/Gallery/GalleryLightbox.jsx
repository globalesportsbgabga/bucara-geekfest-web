import { useEffect, useRef } from "react";
import styles from "./GalleryLightbox.module.css";

function GalleryLightbox({
    image,
    images,
    current,
    onClose,
    onPrev,
    onNext
}) {

    const startX = useRef(null);

    useEffect(() => {

        function handleKey(e) {

            if (e.key === "Escape") onClose();

            if (e.key === "ArrowLeft") onPrev();

            if (e.key === "ArrowRight") onNext();

        }

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);

    }, [onClose, onPrev, onNext]);

    if (!image) return null;

    function handleTouchStart(e) {

        startX.current = e.touches[0].clientX;

    }

    function handleTouchEnd(e) {

        if (startX.current === null) return;

        const endX = e.changedTouches[0].clientX;

        const distance = endX - startX.current;

        if (distance > 70) {

            onPrev();

        } else if (distance < -70) {

            onNext();

        }

        startX.current = null;

    }

    return (

        <div
            className={styles.backdrop}
            onClick={onClose}
        >

            <div
                className={styles.background}
                style={{
                    backgroundImage: `url(${image.image})`
                }}
            />

            <div className={styles.overlay}></div>

            <button
                className={styles.close}
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
            >
                ✕
            </button>

            <button
                className={`${styles.arrow} ${styles.left}`}
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
            >
                ‹
            </button>

            <img
                src={image.image}
                alt={image.title}
                className={styles.image}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            />

            <button
                className={`${styles.arrow} ${styles.right}`}
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
            >
                ›
            </button>

            <div className={styles.info}>

                <h2>{image.title}</h2>

                <p>
                    {current + 1} / {images.length}
                </p>

            </div>

        </div>

    );

}

export default GalleryLightbox;