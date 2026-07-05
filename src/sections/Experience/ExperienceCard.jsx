import Card from "@/components/ui/Card/Card";

import styles from "./Experience.module.css";

import icons from "@/utils/icons";

import { ArrowRight } from "lucide-react";

function ExperienceCard({ icon, title, description }) {

    const Icon = icons[icon];

    return (

        <Card className={styles.card}>

            <div className={styles.icon}>

                <Icon
                    size={46}
                    strokeWidth={2}
                />

            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <div className={styles.link}>

                Explorar

                <ArrowRight size={18} />

            </div>

        </Card>

    );

}

export default ExperienceCard;