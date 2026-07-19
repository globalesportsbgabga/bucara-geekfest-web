import styles from "./SectionTitle.module.css";

function SectionTitle({

    badge,

    title,

    subtitle,

    center = true

}){

    return(

        <div
            className={`${styles.wrapper} ${center ? styles.center : ""}`}
        >

            {badge && (

                <span className={styles.badge}>

                    {badge}

                </span>

            )}

            <h2>

                {title}

            </h2>

            {subtitle && (

                <p>

                    {subtitle}

                </p>

            )}

        </div>

    );

}

export default SectionTitle;