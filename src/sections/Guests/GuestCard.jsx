import Card from "@/components/ui/Card/Card";
import styles from "./GuestCard.module.css";
import socialIcons from "@/utils/socialIcons";

function GuestCard({ guest }) {

    const instagram = guest.social?.instagram;

    const openInstagram = () => {

        if (instagram) {
            window.open(instagram, "_blank");
        }

    };

    return (

        <Card
            className={styles.card}
            onClick={openInstagram}
        >

            <img
                src={guest.image}
                alt={guest.name}
                className={styles.image}
            />

            <div className={styles.content}>

                <h3>{guest.name}</h3>

                <span>{guest.role}</span>

                <div className={styles.socials}>

                    {Object.entries(guest.social).map(([key, value]) => {

                        if (!value) return null;

                        const Icon = socialIcons[key];

                        return (

                            <a
                                key={key}
                                href={value}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >

                                <Icon size={18} />

                            </a>

                        );

                    })}

                </div>

            </div>

        </Card>

    );

}

export default GuestCard;