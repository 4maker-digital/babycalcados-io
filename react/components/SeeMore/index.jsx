import React, { useState } from "react"

import "./style.global.css"

function SeeMore() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="see-more" onClick={() => {
      setIsActive(!isActive)

      !isActive && (document.querySelector('.vtex-rich-text-0-x-paragraph--seoText').style.cssText = 'overflow: initial; display: block;');
      isActive && (document.querySelector('.vtex-rich-text-0-x-paragraph--seoText').style.cssText = 'overflow: hidden; display: -webkit-box;');
    }}>
      {isActive ?
        (<>
          Mostrar menos
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <defs>
              <clipPath id="clip-path">
                <rect id="Retângulo_279" data-name="Retângulo 279" width="36" height="36" transform="translate(1099 1089)" fill="#fff" stroke="#707070" stroke-width="1"/>
              </clipPath>
            </defs>
            <g id="Grupo_de_máscara_1" data-name="Grupo de máscara 1" transform="matrix(-1, -0.017, 0.017, -1, 1115.822, 1144.637)" clipPath="url(#clip-path)">
              <path id="Caminho_6649" data-name="Caminho 6649" d="M9,18.33a1.125,1.125,0,0,1,1.125-1.125H23.159l-4.831-4.828a1.126,1.126,0,0,1,1.593-1.593l6.75,6.75a1.125,1.125,0,0,1,0,1.593l-6.75,6.75a1.126,1.126,0,0,1-1.593-1.593l4.831-4.829H10.125A1.125,1.125,0,0,1,9,18.33Z" transform="translate(1098.999 1088.67)" fill="#034ea1" fillRule="evenodd"/>
            </g>
          </svg>
        </>)
      : (
        <>
          Mostrar mais
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 18.0002C9 17.7018 9.11853 17.4157 9.32951 17.2047C9.54048 16.9937 9.82663 16.8752 10.125 16.8752H23.1593L18.3285 12.0467C18.1173 11.8355 17.9986 11.5489 17.9986 11.2502C17.9986 10.9515 18.1173 10.6649 18.3285 10.4537C18.5397 10.2425 18.8263 10.1238 19.125 10.1238C19.4237 10.1238 19.7103 10.2425 19.9215 10.4537L26.6715 17.2037C26.7763 17.3082 26.8594 17.4323 26.9161 17.569C26.9728 17.7057 27.002 17.8522 27.002 18.0002C27.002 18.1482 26.9728 18.2947 26.9161 18.4314C26.8594 18.5681 26.7763 18.6922 26.6715 18.7967L19.9215 25.5467C19.7103 25.7579 19.4237 25.8766 19.125 25.8766C18.8263 25.8766 18.5397 25.7579 18.3285 25.5467C18.1173 25.3355 17.9986 25.0489 17.9986 24.7502C17.9986 24.4515 18.1173 24.1649 18.3285 23.9537L23.1593 19.1252H10.125C9.82663 19.1252 9.54048 19.0067 9.32951 18.7957C9.11853 18.5847 9 18.2986 9 18.0002Z"
              fill="#034EA1"
            />
          </svg>
        </>
      )}
    </div>
  )
}

export default SeeMore
