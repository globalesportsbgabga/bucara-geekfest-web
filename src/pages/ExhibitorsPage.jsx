
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer/Footer";
import Analytics from "../components/system/Analytics";
import SearchBar from "../components/SearchBar/SearchBar";

import exhibitors from "../data/exhibitors";
import styles from "./ExhibitorsPage.module.css";

const WHATSAPP_URL = "https://wa.me/573058144929";

function ExhibitorsPage() {
  const [search, setSearch] = useState("");

  const filteredExhibitors = exhibitors.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="app">
      <Analytics />
      <Navbar />

      <main className={`main-layout ${styles.page}`}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              BUCARA GEEKFEST LVL 2 · 2027
            </span>

            <h1>
              NUESTROS <span>EXPOSITORES</span>
            </h1>

            <p className={styles.subtitle}>
              Marcas, tiendas y emprendimientos que se unen a Bucara
              GeekFest para compartir sus productos, propuestas y
              experiencias con toda la comunidad geek.
            </p>

            <div className={styles.eventInfo}>
              <span>2 · 3 · 4 ABRIL 2027</span>
              <span>NEOMUNDO · BUCARAMANGA</span>
            </div>
          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section className={styles.introduction}>
          <span className={styles.sectionLabel}>
            CONOCE A NUESTROS EXPOSITORES
          </span>

          <h2>
            Descubre marcas y propuestas
            <span> que hacen parte del GeekFest.</span>
          </h2>

          <p>
            Explora las marcas, tiendas y emprendimientos que encontrarás
            en Bucara GeekFest LVL 2. Conoce sus propuestas y visita
            sus espacios digitales para descubrir todo lo que tienen
            preparado.
          </p>
        </section>

        {/* DIRECTORIO */}
        <section className={styles.directory}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>
              DIRECTORIO DE EXPOSITORES
            </span>

            <h2>Encuentra tu marca favorita</h2>

            <p>
              Busca por nombre y descubre las propuestas de nuestros
              expositores.
            </p>
          </div>

          <div className={styles.searchContainer}>
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          {search.trim() !== "" && (
            <p className={styles.searchResults}>
              {filteredExhibitors.length === 0
                ? "No encontramos resultados"
                : `${filteredExhibitors.length} resultado${
                    filteredExhibitors.length === 1 ? "" : "s"
                  } encontrado${
                    filteredExhibitors.length === 1 ? "" : "s"
                  }`}
            </p>
          )}

          {filteredExhibitors.length > 0 ? (
            <div className={styles.exhibitorGrid}>
              {filteredExhibitors.map((item) => (
                <a
                  key={item.id}
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profile}
                  aria-label={`Visitar Instagram de ${item.name}`}
                >
                  <div className={styles.logoContainer}>
                    <img
                      src={item.image}
                      alt={`Logo de ${item.name}`}
                      className={styles.logo}
                      loading="lazy"
                    />
                  </div>

                  <h3>{item.name}</h3>

                  <span className={styles.instagramLink}>
                    VISITAR INSTAGRAM →
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <span>⌕</span>

              <h3>No encontramos esa marca</h3>

              <p>
                Prueba con otro nombre o revisa la escritura
                de tu búsqueda.
              </p>
            </div>
          )}
        </section>

        {/* INVITACIÓN */}
        <section className={styles.closing}>
          <div className={styles.closingContent}>
            <span className={styles.sectionLabel}>
              HAZ PARTE DE BUCARA GEEKFEST
            </span>

            <h2>
              ¿Quieres participar como expositor?
            </h2>

            <p>
              ¿Tienes una marca, tienda o emprendimiento y quieres
              conocer las posibilidades de participación?
              Contáctanos para recibir información.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              CONSULTAR POR WHATSAPP →
            </a>

            <span className={styles.contactNumber}>
              305 814 4929
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ExhibitorsPage;
