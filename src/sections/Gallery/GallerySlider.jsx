import { useEffect, useState } from "react";

import styles from "./GallerySlider.module.css";

import GalleryControls from "./GalleryControls";
import GalleryLightbox from "./GalleryLightbox";

function GallerySlider({ images }) {

    const [current, setCurrent] = useState(0);

    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {

        if (selectedIndex !== null) return;

        const interval = setInterval(() => {

            setCurrent(prev =>
                prev === images.length - 1 ? 0 : prev + 1
            );

        }, 4500);

        return () => clearInterval(interval);

    }, [selectedIndex, images.length]);

    function nextSlide(){

        setCurrent(prev=>

            prev===images.length-1 ? 0 : prev+1

        );

    }

    function prevSlide(){

        setCurrent(prev=>

            prev===0 ? images.length-1 : prev-1

        );

    }

    function nextImage(){

        setSelectedIndex(prev=>

            prev===images.length-1 ? 0 : prev+1

        );

    }

    function prevImage(){

        setSelectedIndex(prev=>

            prev===0 ? images.length-1 : prev-1

        );

    }

    return(

        <>

            <div className={styles.slider}>

                <div className={styles.track}>

                    {images.map((item,index)=>(

                        <article

                            key={item.id}

                            className={`${styles.card} ${
                                index===current ? styles.active : ""
                            }`}

                            onClick={()=>setSelectedIndex(index)}

                        >

                            <img

                                src={item.image}

                                alt={item.title}

                                loading="lazy"

                            />

                            <div className={styles.overlay}>

                                <h3>{item.title}</h3>

                                <span>{item.year}</span>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

            <GalleryControls

                current={current}

                total={images.length}

                onPrev={prevSlide}

                onNext={nextSlide}

            />

            <GalleryLightbox

                image={selectedIndex!==null ? images[selectedIndex] : null}

                images={images}

                current={selectedIndex ?? 0}

                onPrev={prevImage}

                onNext={nextImage}

                onClose={()=>setSelectedIndex(null)}

            />

        </>

    );

}

export default GallerySlider;