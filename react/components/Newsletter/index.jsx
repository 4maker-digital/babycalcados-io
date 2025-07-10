import React, { useEffect, useState } from 'react';
import defaultProps from './defaultProps.json';
import schemaEditor from './schemaEditor.json';
import axios from 'axios';

import "./style.global.css";

function Newsletter({ title, placeholderemail, placeholdername, textbutton }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [genero, setGenero] = useState('');
  const [estado, setEstado] = useState('');
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
      .patch(`/api/dataentities/NW/documents`, {
        nome: name,
        email: email,
        genero: genero,
        estado: estado,
      })
      .then(({ data }) => {
        setEmail('');
        setName('');
        setGenero('');
        setEstado('');
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
          <img alt="Newsletter" src="https://babycalcados.vteximg.com.br/arquivos/newsletter.png" />
          <h2>{title}</h2>
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
          <select name="genero" id="genero" required="" onChange={(e) => setGenero(e.target.value)}>
            <option value="">Gênero</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </select>
          <select name="estado" id="estado" required="" onChange={(e) => setEstado(e.target.value)}>
            <option value="">Estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
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
