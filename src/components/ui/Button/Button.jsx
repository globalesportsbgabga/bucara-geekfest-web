import styles from "./Button.module.css";

function Button({

    children,

    href,

    variant = "primary",

    target,

    rel,

    onClick

}){

    if(href){

        return(

            <a

                href={href}

                target={target}

                rel={rel}

                className={`${styles.button} ${styles[variant]}`}

            >

                {children}

            </a>

        );

    }

    return(

        <button

            onClick={onClick}

            className={`${styles.button} ${styles[variant]}`}

        >

            {children}

        </button>

    );

}

export default Button;