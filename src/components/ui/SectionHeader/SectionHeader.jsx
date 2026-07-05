import styles from "./SectionHeader.module.css";

function SectionHeader({
    badge,
    title,
    description,
}) {
    return (
        <div className={styles.header}>

            {badge && (
                <span className={styles.badge}>
                    {badge}
                </span>
            )}

            <h2>{title}</h2>

            {description && (
                <p>
                    {description}
                </p>
            )}

        </div>
    );
}

export default SectionHeader;