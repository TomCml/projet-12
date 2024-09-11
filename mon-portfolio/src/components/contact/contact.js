import React, { useEffect, useState } from 'react';
import './contact.scss';
import axios from 'axios';

const Contact = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  }, []);

  const handleSubmit = () => {
    
  }

  return (
    <div className="contact">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit()}>
            <label for="email">Votre e-mail</label>
            <input type="email" id="email"/>
            <label for="textarea">Parlez moi de votre projet</label>
            <textarea class="large-textarea" ></textarea>
            <button type="submit">Envoyer</button>
        </form>
      
    </div>
  );
};

export default Contact;
