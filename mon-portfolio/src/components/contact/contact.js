import React, { useState, useRef } from "react";
import "./contact.scss";
import axios from "axios";
import Loader from "../loader/loader";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
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

        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);

        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }
      });
  };

  return (
    <section className="contact" id="contact" ref={formRef}>
      {loading ? (
        <Loader />
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
    </section>
  );
};

export default Contact;
