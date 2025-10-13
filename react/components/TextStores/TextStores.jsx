import React from "react";
import RichText from 'vtex.rich-text/index'

import "./style.global.css";

export default function TextStores({ config }) {
  if (!config || config?.length < 1) {
    return null
  }

  return (
    <div className='vtex-store-components-3-x-textStores'>
      {config?.map((item) => (
        <div className='vtex-flex-layout-0-x-flexRowContent--textStores'>
          <h3 className="vtex-rich-text-0-x-heading vtex-rich-text-0-x-textStores">{item.title}</h3>
          <RichText text={item.text} />
        </div>
      ))}
    </div>
  )
}

TextStores.schema = {
  title: "Texto Nossas Lojas",
  type: "object",
  properties: {
    config: {
      title: "Texto",
      type: "array",
      items: {
        title: "Texto",
        type: "object",
        properties: {
          title: {
            title: "Título",
            type: "string"
          },
          text: {
            type: 'string',
            title: 'Texto (MarkDown)',
            widget: {
              'ui:widget': 'textarea'
            },
          },
        },
      },
    },
  },
};
