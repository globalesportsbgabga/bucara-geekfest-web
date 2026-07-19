import { useState } from "react";

import styles from "./Exhibitors.module.css";

import exhibitors from "../../data/exhibitors";

import SearchBar from "@/components/SearchBar/SearchBar";

function Exhibitors() {

    const [search, setSearch] = useState("");

    const filtered = exhibitors.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    // Divide automáticamente los expositores
    const firstRow = exhibitors.filter((_, index) => index % 2 === 0);
    const secondRow = exhibitors.filter((_, index) => index % 2 !== 0);

    // Duplica cada fila para el efecto infinito
    const rowOne = [...firstRow, ...firstRow];
    const rowTwo = [...secondRow, ...secondRow];

    function Profile({ item }) {

        return (

            <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profile}
            >

                <img
                    src={item.image}
                    alt={item.name}
                    className={styles.logo}
                />

                <h3>{item.name}</h3>

                <span>
                    Visitar Instagram →
                </span>

            </a>

        );

    }

    return (

        <section
            id="zona-comercial"
            className={styles.exhibitors}
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Zona Comercial
                </span>

                <h2>
                    Nuestros Expositores
                </h2>

                <p className={styles.description}>
                    Descubre las marcas, tiendas y emprendimientos
                    que harán parte del Bucara GeekFest.
                </p>

                <SearchBar
                    value={search}
                    onChange={setSearch}
                />

            </div>

            {search === "" ? (

                <>

                    <div className={styles.slider}>

                        <div className={styles.track}>

                            {rowOne.map((item, index) => (

                                <Profile
                                    key={`top-${index}`}
                                    item={item}
                                />

                            ))}

                        </div>

                    </div>

                    <div className={styles.slider}>

                        <div className={styles.trackReverse}>

                            {rowTwo.map((item, index) => (

                                <Profile
                                    key={`bottom-${index}`}
                                    item={item}
                                />

                            ))}

                        </div>

                    </div>

                </>

            ) : (

                <div className={styles.results}>

                    {filtered.length > 0 ? (

                        filtered.map((item) => (

                            <Profile
                                key={item.id}
                                item={item}
                            />

                        ))

                    ) : (

                        <p className={styles.empty}>

                            No encontramos expositores con ese nombre.

                        </p>

                    )}

                </div>

            )}

        </section>

    );

}

export default Exhibitors;