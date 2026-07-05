import styles from "./HeroBadges.module.css";

const badges = [
    "🎮 Gaming",
    "🎭 Cosplay",
    "🎌 Anime",
    "🎤 K-Pop",
    "🃏 TCG",
    "🎨 Artistas",
    "🛍️ Zona Comercial",
    "💻 Tecnología"
];

function HeroBadges() {

    return (

        <div className={styles.badges}>

            {badges.map((badge) => (

                <span
                    key={badge}
                    className={styles.badge}
                >
                    {badge}
                </span>

            ))}

        </div>

    );

}

export default HeroBadges;