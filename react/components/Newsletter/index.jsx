import React, { useEffect, useState } from 'react';
import defaultProps from './defaultProps.json';
import schemaEditor from './schemaEditor.json';
import axios from 'axios';

import "./style.global.css";

function Newsletter({ title, subTitle, placeholderemail, placeholdername, textbutton }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == '' || email == '') {
      alert('Por favor, preencha seu nome e e-mail.');
      return false;
    } else if (!validateEmail(email)) {
      alert('Por favor, preencha um e-mail válido.');
      return false;
    }

    axios
      .patch(`/api/dataentities/NL/documents`, {
        nome: name,
        email: email,
      })
      .then(({ data }) => {
        setEmail('');
        setName('');
        alert('Obrigado por se cadastrar em nossa Newsletter!');
      });
  };

  useEffect(() => {
    setShow(true)
  }, [])

  return show && (
    <section className="vtex-hide-react">
      <div className="e-newsletter-center">
        <div className="e-newsletter-top">
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
        </div>

        <form className="e-form-newsletter" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name"
            name="name"
            placeholder={placeholdername}
          ></input>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            name="email"
            placeholder={placeholderemail}
          ></input>
          <button type="submit" className="e-btn">
            {textbutton}
          </button>
        </form>
      </div>
    </section>
  );
}

Newsletter.defaultProps = defaultProps;
Newsletter.getSchema = (_) => schemaEditor;

export default Newsletter;
