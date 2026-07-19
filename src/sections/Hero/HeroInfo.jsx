import styles from "./HeroInfo.module.css";

function HeroInfo() {

    const items = [

        {
            icon:"📍",
            title:"Neomundo",
            text:"Bucaramanga"
        },

        {
            icon:"📅",
            title:"21 · 22 · 23",
            text:"Agosto 2026"
        },

        {
            icon:"🎮",
            title:"10+",
            text:"Torneos"
        },

        {
            icon:"👥",
            title:"Invitados",
            text:"Especiales"
        }

    ];

    return (

        <div className={styles.info}>

            {items.map((item,index)=>(

                <div
                    key={index}
                    className={styles.card}
                >

                    <div className={styles.icon}>
                        {item.icon}
                    </div>

                    <h3>
                        {item.title}
                    </h3>

                    <span>
                        {item.text}
                    </span>

                </div>

            ))}

        </div>

    );

}

export default HeroInfo;