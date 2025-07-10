import React from "react";

export default function SearchNumber({ search }) {
  return (
    <>
      <div className="vtex-menu-2-x-search">
        <div className="vtex-menu-2-x-search-shelf">
          <ul className="vtex-menu-2-x-search-shelf-container">
            {search?.[0].items.map(item => {
              return <li className="vtex-menu-2-x-search-shelf-container-list"><a className="vtex-menu-2-x-search-shelf-container-link" href={item.url}>{item.text}</a></li>
            })}
          </ul>
          <a className="vtex-menu-2-x-search-shelf-button" href={search?.[0].url}>{search?.[0].text}</a>
        </div>
      </div>
    </>

  );
}

SearchNumber.schema = {
  title: "Busca Vitrine",
  type: "object",
  properties: {
    search: {
      title: "Search",
      type: "array",
      items: {
        title: "Item",
        type: "object",
        properties: {
          items: {
            title: "Links",
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
      },
    },
  },
};
