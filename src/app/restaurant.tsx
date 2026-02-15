import React from "react";

const Restaurant = () => (
  <section className="restaurant-root">
    <style jsx>{`
      .restaurant-root {
        min-height: 100vh;
        background: linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%);
        padding: 5rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .restaurant-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        color: #d97706;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .restaurant-description {
        font-size: 1.25rem;
        color: #78350f;
        max-width: 700px; 
        margin: 0 auto 2.5rem auto;
        text-align: center;
        line-height: 1.7;     
      }
      .restaurant-img {
        width: 100%;
        max-width: 700px;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(217, 119, 6, 0.15);
        margin-bottom: 2rem;
        object-fit: cover;
      }
      .restaurant-menu {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(217, 119, 6, 0.08);
        padding: 2rem 2.5rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .menu-title {
        color: #d97706;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        text-align: center;
      }
      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .menu-item {
        font-size: 1.1rem;
        color: #78350f;
        margin-bottom: 0.8rem;
      } 
    `}</style>
    <h1 className="restaurant-title">Bienvenue au Restaurant JusteTeko</h1>
    <p className="restaurant-description">
      Découvrez une expérience culinaire unique au cœur de notre établissement. Notre restaurant vous propose une cuisine raffinée, élaborée à partir d'ingrédients frais et locaux, pour ravir vos papilles à chaque bouchée.
    </p>
    <img  
      src="/restaurant.jpg"
      alt="Restaurant JusteTeko"
      className="restaurant-img"
    />  
    <div className="restaurant-menu">
      <h2 className="menu-title">Notre Menu</h2>
      <ul className="menu-list">
        <li className="menu-item">Entrée : Tartare de saumon frais, avocat et citron vert</li>
        <li className="menu-item">Plat : Filet de bœuf grillé, purée de patates douces et légumes de saison</li>
        <li className="menu-item">Dessert : Fondant au chocolat noir, coulis de framboises et glace vanille</li>
      </ul>
    </div>
  </section>
);

export default Restaurant;