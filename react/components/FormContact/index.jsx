import React, { useEffect } from "react";

export default function FormContact() {
  useEffect(() => {
    window.handleClick = (e) => {
      // e.preventDefault();
      alert("Mensagem enviada com sucesso!");

      window.location.href="/"
    };
  }, []);

  return (
    <div className="vtex-flex-layout-0-x-flexRow--contact-container">
      <h1>Entre em contato</h1>
      <div
        className="vtex-flex-layout-0-x-flexRow--text"
        dangerouslySetInnerHTML={{ __html: `<style>
          input, textarea{
            width: 300px;
          }

          .btn.btn-primary{
            width: 150px;
          }

          .form-control {
            display: block;
            width: 100%;
            height: 45px;
            padding: 6px 20px;
            line-height: 1.42857;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 0;
          }

          .vtex-flex-layout-0-x-flexRow--contact-container label {
            display: inline-block;
            font-weight: 700;
            margin-bottom: 5px;
          }

          .btnEnviarForm {
            float: right;
            width: auto !important;
            color: #fff;
            background-color: #174193;
            border-color: #14377d;
            outline: 0 !important;
            font-weight: 600;
            letter-spacing: .5px;
            text-transform: uppercase;
            padding: 17px 27px;
            font-size: 12px;
            line-height: 1.42857;
            border-radius: 0;
            display: inline-block;
            margin-bottom: 0;
            text-align: center;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            background-image: none;
            border: 1px solid transparent;
            white-space: nowrap;
            user-select: none;
          }

          </style>
          <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST" id="formularioFaleConosco">
            <input type=hidden name="orgid" value="00D1U000000u3zS" />
            <input type=hidden name="retURL" value="https://www.babycalcados.com.br" />
            <input type=hidden  id="recordType" name="recordType" value="0121U0000007tAn" />

            <label for="name">Nome do contato: </label><br><input class="form-control"  id="name" maxlength="80" name="name" size="20" type="text" /><br>

            <label for="email">E-mail:</label><br><input class="form-control"  id="email" maxlength="80" name="email" size="20" type="text" /><br>

            <label for="00N1U00000VGO8r">País: </label><br><input class="form-control"  id="00N1U00000VGO8r" maxlength="255" name="00N1U00000VGO8r" size="20" type="text" /><br>

            <label for="00N1U00000VGO8q">Estado:</label><br><input class="form-control"  id="00N1U00000VGO8q" maxlength="255" name="00N1U00000VGO8q" size="20" type="text" /><br>

            <label for="00N1U00000VGO8n">Cidade:</label><br><input class="form-control"  id="00N1U00000VGO8n" maxlength="255" name="00N1U00000VGO8n" size="20" type="text" /><br>

            <label for="phone">Telefone:</label><br><input class="form-control"  id="phone" maxlength="40" name="phone" size="20" type="text" /><br>

            <label for="subject">Assunto:</label><br><input class="form-control"  id="subject" maxlength="80" name="subject" size="20" type="text" /><br>

            <label for="description">Descrição: </label><br><textarea class="form-control" name="description"></textarea><br>

            <input type="submit" name="submit" class="btn btn-primary btnEnviarForm" onclick="handleClick(event)" />
          </form>
        `}}
      />
    </div>
  );
}
