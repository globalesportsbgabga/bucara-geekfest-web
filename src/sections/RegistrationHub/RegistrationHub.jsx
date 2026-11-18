
import { useState } from "react";
import styles from "./RegistrationHub.module.css";
import links from "../../data/links";
import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";

const tickets = [
  {
    id: "general",
    icon: "🎟️",
    title: "Entrada General",
    description: "Acceso general al evento durante un día.",
    preventa: 10000,
    taquilla: 15000,
    link: links.tickets,
  },
  {
    id: "vip-day",
    icon: "⭐",
    title: "Pase VIP · Un día",
    description: "Disfruta Bucara GeekFest con tu pase VIP de un día.",
    preventa: 30000,
    taquilla: 35000,
    link: links.vip,
  },
  {
    id: "vip-three",
    icon: "👑",
    title: "Pase VIP · Tres días",
    description: "Vive los tres días de Bucara GeekFest con tu pase VIP.",
    preventa: 75000,
    taquilla: 105000,
    link: links.vip,
    featured: true,
  },
];

const registrations = [
  {
    id: 1,
    image: "/assets/registration/cosplay.jpg",
    title: "Copa Cosplay",
    description:
      "Demuestra tu creatividad y talento en nuestras tres categorías: Cospobre, Amateur y Profesional.",
    requirement:
      "Participación exclusiva con pase VIP vigente para el día de la competencia.",
    status: "Próximamente",
    comingSoon: true,
    type: "competition",
  },
  {
    id: 2,
    image: "/assets/registration/kpop.jpg",
    title: "Batalla Grupal K-Pop",
    description:
      "Reúne a tu grupo, prepara tu coreografía y participa en nuestra batalla de baile K-Pop.",
    status: "Próximamente",
    comingSoon: true,
    type: "competition",
  },
  {
    id: 3,
    image: "/assets/registration/torneos.jpg",
    title: "Torneos Gamer",
    description:
      "Compite, demuestra tu nivel y participa en los torneos de videojuegos del evento.",
    requirement:
      "Para competir es necesario contar con un pase VIP vigente para el día del torneo.",
    button: "Ver torneos",
    link: links.tournaments,
    status: "Torneos",
    type: "competition",
  },
  {
    id: 4,
    image: "/assets/registration/artist-valley.jpg",
    title: "Artist Valley",
    description: "Convocatoria para artistas y creadores independientes.",
    button: "Quiero participar",
    link: links.exhibitor,
    status: "Convocatoria",
  },
  {
    id: 5,
    image: "/assets/registration/expositores.jpg",
    title: "Expositores",
    description: "Solicita información para tener un espacio comercial.",
    button: "Solicitar stand",
    link: links.exhibitor,
    status: "Espacios comerciales",
  },
  {
    id: 6,
    image: "/assets/registration/patrocinadores.jpg",
    title: "Patrocinadores",
    description: "Conoce las oportunidades para vincular tu marca.",
    button: "Más información",
    link: links.sponsor,
    status: "Marcas",
  },
];

function formatPrice(value) {
  return `$${value.toLocaleString("es-CO")} COP`;
}

function RegistrationHub() {
  const [activeTab, setActiveTab] = useState("tickets");
  const [selectedTicket, setSelectedTicket] = useState("vip-three");

  const selected = tickets.find(
    (ticket) => ticket.id === selectedTicket
  );

  return (
    <section className={styles.registration} id="registro">
      <SectionContainer>
        <SectionTitle
          badge="Centro de Entradas e Inscripciones"
          title="Todo comienza aquí"
          subtitle="Elige tu entrada, selecciona tu modalidad y prepárate para vivir Bucara GeekFest LVL 2."
        />

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${
              activeTab === "tickets" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("tickets")}
            aria-pressed={activeTab === "tickets"}
          >
            🎟️ ENTRADAS
          </button>

          <button
            type="button"
            className={`${styles.tab} ${
              activeTab === "registrations" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("registrations")}
            aria-pressed={activeTab === "registrations"}
          >
            📝 INSCRIPCIONES
          </button>
        </div>

        {activeTab === "tickets" && (
          <>
            <div className={styles.grid}>
              {tickets.map((ticket) => {
                const isSelected = selectedTicket === ticket.id;

                return (
                  <article
                    key={ticket.id}
                    className={`${styles.card} ${
                      isSelected ? styles.selectedCard : ""
                    } ${ticket.featured ? styles.featuredCard : ""}`}
                  >
                    {ticket.featured && (
                      <span className={styles.featuredLabel}>
                        EXPERIENCIA DE TRES DÍAS
                      </span>
                    )}

                    <span className={styles.cardIcon}>
                      {ticket.icon}
                    </span>

                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>

                    <div className={styles.priceList}>
                      <button
                        type="button"
                        className={`${styles.priceOption} ${
                          isSelected ? styles.selectedPrice : ""
                        }`}
                        onClick={() => setSelectedTicket(ticket.id)}
                        aria-pressed={isSelected}
                      >
                        <span>PREVENTA · COMPRA ANTICIPADA</span>

                        <strong>
                          {formatPrice(ticket.preventa)}
                        </strong>

                        <span className={styles.chooseLabel}>
                          {isSelected
                            ? "✓ Entrada seleccionada"
                            : "Seleccionar entrada"}
                        </span>
                      </button>

                      <div className={styles.ticketBoxOffice}>
                        <div>
                          <span>TAQUILLA · COMPRA PRESENCIAL</span>
                          <strong>
                            {formatPrice(ticket.taquilla)}
                          </strong>
                        </div>

                        <span className={styles.presentialLabel}>
                          En Neomundo
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.selectionSummary}>
              <span className={styles.summaryEyebrow}>
                TU PREVENTA SELECCIONADA
              </span>

              <h3>{selected.title}</h3>

              <p>Compra anticipada · Bucara GeekFest 2027</p>

              <strong className={styles.summaryPrice}>
                {formatPrice(selected.preventa)}
              </strong>

              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.continueButton}
              >
                CONTINUAR CON MI PREVENTA <span>→</span>
              </a>

              <small>
                La compra en taquilla se realiza presencialmente
                durante el evento.
              </small>
            </div>
          </>
        )}

        {activeTab === "registrations" && (
          <>
            <div className={styles.registrationIntro}>
              <h2>¿QUIERES SER PARTE DEL EVENTO?</h2>
              <p>
                Encuentra tu espacio, participa en nuestras actividades
                y forma parte de Bucara GeekFest LVL 2.
              </p>
            </div>

            <div className={`${styles.grid} ${styles.registrationGrid}`}>
              {registrations.map((item) => (
                <article
                  key={item.id}
                  className={`${styles.card} ${styles.registrationCard}`}
                  style={{
                    "--card-image": `url("${item.image}")`,
                  }}
                >
                  <span className={styles.status}>
                    {item.status}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  {item.requirement && (
                    <p className={styles.requirement}>
                      <strong>Requisito:</strong> {item.requirement}
                    </p>
                  )}

                  <div className={styles.actions}>
                    {item.comingSoon ? (
                      <span className={styles.comingSoonLabel}>
                        PRÓXIMAMENTE
                      </span>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                      >
                        {item.button} →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </SectionContainer>
    </section>
  );
}

export default RegistrationHub;
