import React, { useState, useEffect } from "react"

import "./style.global.css"

export default function Cookies() {
  const [hide, isHide] = useState(true)

  const handleClick = () => {
    window.localStorage.setItem("accept-lgpd", true);
    isHide(true)
  }

  useEffect(() => {
    if (window?.localStorage?.getItem("accept-lgpd") === 'false' || window?.localStorage?.getItem("accept-lgpd") === null) {
      isHide(false)
    }
  }, [hide])

  return (
      window && !hide && (
        <div className="baby-lgpd" style={{ display: !hide && "flex" }}>
            <p>A Loja Baby utiliza <strong>cookies</strong> para uma melhor experiência de navegação. Conheça nossa <a href="/politica-de-privacidade">Política de Privacidade.</a></p>
            <button onClick={() => handleClick()}>Concordar e fechar</button>
        </div>
      )
  )
}
