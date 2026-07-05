import Card from "@/components/ui/Card/Card";

import styles from "./GuestCard.module.css";

import socialIcons from "@/utils/socialIcons";

function GuestCard({ guest }) {

    return (

        <Card className={styles.card}>

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
                                rel="noreferrer"
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