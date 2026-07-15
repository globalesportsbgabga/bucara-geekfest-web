import styles from "./Exhibitors.module.css";

import exhibitors from "../../data/exhibitors";

function Exhibitors() {

  const rowOne = [...exhibitors, ...exhibitors];

  const rowTwo = [...exhibitors].reverse();

  const rowTwoLoop = [...rowTwo, ...rowTwo];

  function getUser(link) {
    return link
      .replace("https://www.instagram.com/globalesports/", "")
      .replace("/", "");
  }

  function Profile({ item }) {
    return (
      <a
        href={item.instagram}
        target="_blank"
        rel="noreferrer"
        className={styles.profile}
      >

        <img
          src="/logo.png"
          alt={item.name}
          className={styles.avatar}
        />

        <span className={styles.username}>
          @{getUser(item.instagram)}
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
          Descubre las tiendas, artistas y emprendimientos
          que harán parte del Bucara GeekFest.
        </p>

      </div>

      <div className={styles.slider}>

        <div className={styles.track}>

          {rowOne.map((item, index) => (

            <Profile
              key={index}
              item={item}
            />

          ))}

        </div>

      </div>

      <div className={styles.slider}>

        <div className={styles.trackReverse}>

          {rowTwoLoop.map((item, index) => (

            <Profile
              key={index}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Exhibitors;