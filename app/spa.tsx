
import React from "react";

const Spa = () => (
  <section className="spa-root">
    <style jsx>{`
      .spa-root {
        min-height: 100vh;
        background: linear-gradient(120deg, #fff0f6 0%, #f9a8d4 100%);
        padding: 5rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .spa-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        color: #181214;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .spa-description {
        font-size: 1.25rem;
        color: #6b1839;
        max-width: 700px;
        margin: 0 auto 2.5rem auto;
        text-align: center;
        line-height: 1.7;
      }
      .spa-img {
        width: 100%;
        max-width: 700px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15);
        margin-bottom: 2rem;
        object-fit: cover;
      }
      .spa-services {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(236, 72, 153, 0.08);
        padding: 2rem 2.5rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .services-title {
        color: #db2777;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        text-align: center;
      }
      .services-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .service-item {
        font-size: 1.1rem;
        color: #6b1839;
        margin-bottom: 0.7rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #fbcfe8;
        padding-bottom: 0.5rem;
      }
      .service-item:last-child {
        border-bottom: none;
      }
      .service-highlight {
        color: #ec4899;
        font-weight: 600;
      }
    `}</style>
    <h1 className="spa-title">Espace Spa & Bien-être</h1>
    <p className="spa-description">
      Offrez-vous un moment de détente absolue dans notre spa, avec soins personnalisés, hammam, sauna et espace relaxation.
    </p>
    <img src="/images/gallery/spa.jpg" alt="Spa" className="spa-img" />
    <div className="spa-services">
      <div className="services-title">Nos Prestations</div>
      <ul className="services-list">
        <li className="service-item">Massage relaxant <span className="service-highlight">50€ / 30min</span></li>
        <li className="service-item">Accès Hammam & Sauna <span className="service-highlight">inclus</span></li>
        <li className="service-item">Soins visage & corps <span className="service-highlight">sur réservation</span></li>
        <li className="service-item">Espace tisanerie <span className="service-highlight">offert</span></li>
      </ul>
    </div>
  </section>
);

export default Spa;
