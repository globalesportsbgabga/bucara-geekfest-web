import styles from "./Gallery.module.css";
import gallery from "../../data/gallery";
import GallerySlider from "./GallerySlider";

function Gallery() {

    return (

        <section
            id="galeria"
            className={styles.gallery}
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Galería
                </span>

                <h2>
                    Revive los mejores momentos
                </h2>

                <p className={styles.description}>
                    Cada evento anterior deja recuerdos inolvidables.
                    Explora algunos de los mejores momentos vividos por nuestra comunidad.
                </p>

            </div>

            <GallerySlider
                images={gallery}
            />

        </section>

    );

}

export default Gallery;