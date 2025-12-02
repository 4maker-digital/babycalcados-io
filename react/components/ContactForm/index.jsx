import { useEffect, useState } from 'react'
import './global.css'

const Formulario = () => {
  const [formStatus, setFormStatus] = useState(false)
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [nomeErr, setNomeErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [subjectErr, setSubjectErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)

  console.log("formStatus", formStatus)

  function sendToMD() {
    fetch('/api/dataentities/CA/documents', {
      method: 'POST',
      body: JSON.stringify({
          name: nome,
          email: email,
          subject: subject,
          message: message,
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((response) => response.json())
      .then((data) => {
          console.log("data", data)
          setFormStatus(true)
      })
  }

  return (
    <div className='formContato'>
      <form onSubmit={(e) => { e.preventDefault(), sendToMD() }}>
        <section className='form1'>
          <div>
              <p>nome *</p>
              <input type="text" onChange={(e) => { setNomeErr(false), setNome(e.target.value) }} />
              {nomeErr && <span>*</span>}
          </div>
          <div>
              <p>email *</p>
              <input type="email" onChange={(e) => { setEmailErr(false), setEmail(e.target.value) }} />
              {emailErr && <span>*</span>}
          </div>
          <div>
              <p>assunto *</p>
              <input type="text" onChange={(e) => { setSubjectErr(false), setSubject(e.target.value) }} />
              {subjectErr && <span>*</span>}
          </div>
          <div>
              <p>mensagem *</p>
              <input type="text" onChange={(e) => { setMessageErr(false), setMessage(e.target.value) }} />
              {messageErr && <span>*</span>}
          </div>
        </section>
        <div>
            {formStatus ?
                <h3>Mensagem enviada com sucesso!</h3>
                :
                <button>Enviar mensagem</button>
            }
        </div>
      </form>
    </div>
  )
}

export default Formulario
