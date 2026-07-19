import styles from "./Card.module.css";

function Card({
    children,
    className = "",
    onClick,
    ...props
}) {

    return (

        <article
            className={`${styles.card} ${className}`}
            onClick={(e) => {

                console.log("CARD CLICK");

                if (onClick) {
                    onClick(e);
                }

            }}
            {...props}
        >

            {children}

        </article>

    );

}

export default Card;