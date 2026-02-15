import React from "react";

const Conference = () => (
  <section className="conference-root">
    <style jsx>{`
      .conference-root {
        min-height: 100vh;
        background: linear-gradient(120deg, #fff0f6 0%, #fbcfe8 100%);
        padding: 5rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .conference-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        color: #db2777;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .conference-description {
        font-size: 1.25rem;
        color: #6b1839;
        max-width: 700px;
        margin: 0 auto 2.5rem auto;
        text-align: center;
        line-height: 1.7;
      }
      .conference-img {
        width: 100%;
        max-width: 700px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15);
        margin-bottom: 2rem;
        object-fit: cover;
      }
      .conference-details {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(236, 72, 153, 0.08);
        padding: 2rem 2.5rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .details-title {
        color: #db2777;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        text-align: center;
      }
      .details-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .detail-item {
        font-size: 1.1rem;
        color: #6b1839;
        margin-bottom: 0.7rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #fbcfe8;
        padding-bottom: 0.5rem;
      }
      .detail-item:last-child {
        border-bottom: none;
      }
      .detail-highlight {
        color: #ec4899;
        font-weight: 600;
      }
    `}</style>
    <h1 className="conference-title">Espace Conférence</h1>
    <p className="conference-description">
      Organisez vos séminaires, réunions et événements dans un cadre moderne, équipé des dernières technologies et d'un service sur-mesure.
    </p>
    <img src="/images/gallery/conference.jpg" alt="Conférence" className="conference-img" />
    <div className="conference-details">
      <div className="details-title">Nos Atouts</div>
      <ul className="details-list">
        <li className="detail-item">Salle modulable <span className="detail-highlight">jusqu'à 200 pers.</span></li>
        <li className="detail-item">Équipements audio/vidéo <span className="detail-highlight">inclus</span></li>
        <li className="detail-item">Restauration sur place <span className="detail-highlight">personnalisée</span></li>
        <li className="detail-item">Accès Wi-Fi haut débit <span className="detail-highlight">gratuit</span></li>
      </ul>
    </div>
  </section>
);

export default Conference;
