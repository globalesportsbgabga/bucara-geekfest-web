import styles from "./Marquee.module.css";

function Marquee() {

    const text = [

        "🎮 VIDEOJUEGOS",

        "🏆 ESPORTS",

        "🎭 COSPLAY",

        "🎤 K-POP",

        "🃏 TCG",

        "👾 FREE PLAY",

        "🎨 ARTISTAS",

        "🛍️ EXHIBIDORES",

        "⭐ INVITADOS"

    ];

    const items = [...text,...text];

    return (

        <section className={styles.marquee}>

            <div className={styles.track}>

                {items.map((item,index)=>(

                    <span key={index}>
                        {item}
                    </span>

                ))}

            </div>

        </section>

    );

}

export default Marquee;