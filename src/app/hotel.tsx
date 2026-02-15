import React from "react";

const Hotel = () => (
  <section className="hotel-root">
    <style jsx>{`
      .hotel-root {
        min-height: 100vh;
        background: linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%);
        padding: 5rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .hotel-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        color: #db2777;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .hotel-description {
        font-size: 1.25rem;
        color: #6b1839;
        max-width: 700px;
        margin: 0 auto 2.5rem auto;
        text-align: center;
        line-height: 1.7;
      }
      .hotel-img {
        width: 100%;
        max-width: 700px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15);
        margin-bottom: 2rem;
        object-fit: cover;
      }
      .hotel-rooms {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(236, 72, 153, 0.08);
        padding: 2rem 2.5rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .rooms-title {
        color: #db2777;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        text-align: center;
      }
      .rooms-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .room-item {
        font-size: 1.1rem;
        color: #6b1839;
        margin-bottom: 0.7rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #fbcfe8;
        padding-bottom: 0.5rem;
      }
      .room-item:last-child {
        border-bottom: none;
      }
      .room-price {
        color: #ec4899;
        font-weight: 600;
      }
    `}</style>
    <h1 className="hotel-title">Notre Hôtel de Luxe</h1>
    <p className="hotel-description">
      Séjournez dans un écrin de confort et de raffinement, avec des chambres et suites élégantes, un service personnalisé et une vue imprenable.
    </p>
    <img src="/images/gallery/hotel.jpg" alt="Hôtel" className="hotel-img" />
    <div className="hotel-rooms">
      <div className="rooms-title">Nos Chambres & Suites</div>
      <ul className="rooms-list">
        <li className="room-item">Chambre Classique <span className="room-price">120€/nuit</span></li>
        <li className="room-item">Chambre Deluxe <span className="room-price">180€/nuit</span></li>
        <li className="room-item">Suite Junior <span className="room-price">250€/nuit</span></li>
        <li className="room-item">Suite Royale <span className="room-price">390€/nuit</span></li>
      </ul>
    </div>
  </section>
);

export default Hotel;
