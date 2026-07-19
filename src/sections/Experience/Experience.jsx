import styles from "./Experience.module.css";

import experience from "@/data/experience";

import ExperienceCard from "./ExperienceCard";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

function Experience() {

    return (

        <section
            id="experience"
            className={styles.experience}
        >

            <div className={styles.container}>

                <SectionHeader
                    badge="Todo en un solo lugar"
                    title="¿Qué encontrarás en el Bucara GeekFest?"
                    description="Vive un fin de semana lleno de videojuegos, cultura geek, cosplay, K-Pop, invitados especiales, torneos, tiendas, artistas y experiencias para toda la familia."
                />

                <div className={styles.grid}>

                    {experience.map((item) => (

                        <ExperienceCard
                            key={item.id}
                            {...item}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Experience;