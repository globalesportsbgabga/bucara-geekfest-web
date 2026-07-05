import styles from "./Section.module.css";

import useReveal from "../../hooks/useReveal";

function Section({ children }) {

    const { ref, visible } = useReveal();

    return (

        <div

            ref={ref}

            className={`${styles.section} ${visible ? styles.visible : ""}`}

        >

            {children}

        </div>

    );

}

export default Section;