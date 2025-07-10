import React from "react";

export default function SearchNumberCategory({ search }) {
  return (
    <>
      <div className="vtex-menu-2-x-search">
        <div className="vtex-menu-2-x-search-shelf">
          <ul className="vtex-menu-2-x-search-shelf-container">
            {search?.map(item => {
              return <li className="vtex-menu-2-x-search-shelf-container-list"><a className="vtex-menu-2-x-search-shelf-container-link" href={item.url}>{item.text}</a></li>
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

SearchNumberCategory.schema = {
  title: "Busca Categoria",
  type: "object",
  properties: {
    search: {
      title: "Categoria",
      type: "array",
      items: {
        title: "Item",
        type: "object",
        properties: {
          text: {
            title: "Texto",
            description: "Texto",
            type: "string",
          },
          url: {
            title: "URL",
            description: "Link do texto",
            type: "string",
            default: "/",
          },
        },
      },
    },
  },
};
