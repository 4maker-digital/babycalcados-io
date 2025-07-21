import React from "react"

export default function Benefits({ benefits }) {
  if (benefits?.length < 1) {
    return null
  }

  return (
    <div className="vtex-store-components-3-x-benefits">
      <ul className="vtex-store-components-3-x-benefits-list">
        {benefits?.map((benefit, i) => (
          <li className="vtex-store-components-3-x-benefits-item">
            <a href={benefit.link} className="vtex-store-components-3-x-benefits-item-text">
              <img alt="Icone" className="vtex-store-components-3-x-benefits-image" src={benefit.icon} />
              <p className="vtex-store-components-3-x-benefits-item-paragraph">{benefit.text2}</p>
              <p className="vtex-store-components-3-x-benefits-item-paragraph">{benefit.text1}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Benefits.schema = {
  title: "Benefits Custom",
  type: "object",
  properties: {
    benefits: {
      title: "Benefits",
      type: "array",
      items: {
        title: "Benefits",
        type: "object",
        properties: {
          icon: {
            title: "Icone",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          text1: {
            title: "Texto sem negrito",
            type: "string",
            default: "",
          },
          text2: {
            title: "Texto com negrito",
            type: "string",
            default: "",
          },
          link: {
            title: "Link redirect",
            type: "string",
            default: "",
          },
        },
      },
    },
  },
}
