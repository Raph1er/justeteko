import React from "react";

const Activities = () => (
  <section className="activities-root">
    <style jsx>{`
      .activities-root {
        min-height: 100vh;
        background: linear-gradient(120deg, #fff0f6 0%, #fbcfe8 100%);
        padding: 5rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .activities-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        color: #db2777;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .activities-description {
        font-size: 1.25rem;
        color: #6b1839;
        max-width: 700px;
        margin: 0 auto 2.5rem auto;
        text-align: center;
        line-height: 1.7;
      }
      .activities-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
      }
      .activity-card {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(236, 72, 153, 0.08);
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .activity-card:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 8px 32px rgba(236, 72, 153, 0.16);
      }
      .activity-img {
        width: 90px;
        height: 90px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1.2rem;
        border: 3px solid #fbcfe8;
      }
      .activity-name {
        color: #db2777;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-align: center;
      }
      .activity-desc {
        color: #6b1839;
        font-size: 1rem;
        text-align: center;
      }
    `}</style>
    <h1 className="activities-title">Activités & Loisirs</h1>
    <p className="activities-description">
      Profitez d'une multitude d'activités pour tous les âges : détente, sport, culture et découvertes au sein de la Résidence Ste Cécilia.
    </p>
    <div className="activities-list">
      <div className="activity-card">
        <img src="/images/gallery/piscine.jpg" alt="Piscine" className="activity-img" />
        <div className="activity-name">Piscine extérieure</div>
        <div className="activity-desc">Nagez et détendez-vous dans notre grande piscine chauffée, entourée de transats et d'un bar à jus.</div>
      </div>
      <div className="activity-card">
        <img src="/images/gallery/fitness.jpg" alt="Fitness" className="activity-img" />
        <div className="activity-name">Salle de fitness</div>
        <div className="activity-desc">Gardez la forme avec des équipements modernes et des cours collectifs animés par des coachs diplômés.</div>
      </div>
      <div className="activity-card">
        <img src="/images/gallery/atelier.jpg" alt="Ateliers" className="activity-img" />
        <div className="activity-name">Ateliers créatifs</div>
        <div className="activity-desc">Participez à des ateliers d'art, de cuisine ou de musique pour petits et grands.</div>
      </div>
      <div className="activity-card">
        <img src="/images/gallery/visite.jpg" alt="Visites" className="activity-img" />
        <div className="activity-name">Visites guidées</div>
        <div className="activity-desc">Découvrez la région avec nos excursions culturelles et balades nature.</div>
      </div>
    </div>
  </section>
);

export default Activities;
