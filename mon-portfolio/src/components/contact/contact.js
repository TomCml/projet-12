import React, { useState, useRef } from "react";
import "./contact.scss";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  // Référence pour gérer le scroll
  const formRef = useRef(null);

  const sendContact = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,
      message: message,
    };

    axios
      .post(process.env.REACT_APP_DEV_API + "/api/email/send", data)
      .then((response) => {
        setLoading(false);
        setConfirmation(true);

        // Défilement doux vers le formulaire ou la confirmation
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);

        // Défilement vers le formulaire en cas d'erreur
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }
      });
  };

  return (
    <div className="contact" id="contact" ref={formRef}>
      {loading ? (
        <h3>Envoi de votre message...</h3>
      ) : error ? (
        <h3>Erreur : {error.message}</h3>
      ) : confirmation ? (
        <h3>
          Votre message a été envoyé, je vous recontacterai dans les plus brefs
          délais.
        </h3>
      ) : (
        <>
          <h2>Contactez-moi</h2>
          <form onSubmit={sendContact}>
            <label htmlFor="email">Votre email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="textarea">Parlez-moi de votre projet</label>
            <textarea
              className="large-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              size="fixed"
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
