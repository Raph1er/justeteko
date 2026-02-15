import React from "react";

const Contact = () => (
  <section className="contact-root">
    <style jsx>{`
      .contact-root {
        min-height: 100vh;
        background: linear-gradient(120deg, #fff0f6 0%, #fbcfe8 100%);
        padding: 5rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .contact-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        color: #db2777;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .contact-description {
        font-size: 1.25rem;
        color: #6b1839;
        max-width: 700px;
        margin: 0 auto 2.5rem auto;
        text-align: center;
        line-height: 1.7;
      }
      .contact-form {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(236, 72, 153, 0.08);
        padding: 2rem 2.5rem;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
      .form-label {
        color: #db2777;
        font-weight: 600;
        margin-bottom: 0.3rem;
      }
      .form-input, .form-textarea {
        width: 100%;
        padding: 0.7rem 1rem;
        border: 1px solid #fbcfe8;
        border-radius: 8px;
        font-size: 1rem;
        color: #6b1839;
        background: #fff0f6;
        outline: none;
        transition: border 0.2s;
      }
      .form-input:focus, .form-textarea:focus {
        border: 1.5px solid #db2777;
      }
      .form-textarea {
        min-height: 100px;
        resize: vertical;
      }
      .form-button {
        background: linear-gradient(90deg, #db2777 0%, #ec4899 100%);
        color: #fff;
        font-weight: 700;
        font-size: 1.1rem;
        border: none;
        border-radius: 8px;
        padding: 0.9rem 0;
        cursor: pointer;
        margin-top: 0.5rem;
        box-shadow: 0 2px 12px rgba(236, 72, 153, 0.12);
        transition: background 0.2s, box-shadow 0.2s;
      }
      .form-button:hover {
        background: linear-gradient(90deg, #ec4899 0%, #db2777 100%);
        box-shadow: 0 4px 24px rgba(236, 72, 153, 0.18);
      }
      .contact-info {
        margin-top: 2.5rem;
        color: #6b1839;
        text-align: center;
        font-size: 1.1rem;
      }
      .contact-info strong {
        color: #db2777;
      }
    `}</style>
    <h1 className="contact-title">Contactez-nous</h1>
    <p className="contact-description">
      Une question, une réservation ou un projet ? Écrivez-nous, notre équipe vous répondra dans les plus brefs délais !
    </p>
    <form className="contact-form" onSubmit={e => e.preventDefault()}>
      <label className="form-label" htmlFor="name">Nom</label>
      <input className="form-input" id="name" name="name" type="text" placeholder="Votre nom" required />
      <label className="form-label" htmlFor="email">Email</label>
      <input className="form-input" id="email" name="email" type="email" placeholder="Votre email" required />
      <label className="form-label" htmlFor="message">Message</label>
      <textarea className="form-textarea" id="message" name="message" placeholder="Votre message..." required />
      <button className="form-button" type="submit">Envoyer</button>
    </form>
    <div className="contact-info">
      <div><strong>Adresse :</strong> 123 Avenue des Roses, Abidjan</div>
      <div><strong>Téléphone :</strong> +225 01 23 45 67 89</div>
      <div><strong>Email :</strong> contact@residencestecelia.com</div>
    </div>
  </section>
);

export default Contact;
