import React, { useEffect, useState } from "react";

export default function MenuCustomMobile({ menu }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("/api/vtexid/pub/authenticated/user")
      .then(response => response.json())
      .then(user => {
        if (user.user === null) {
          setStatus(null)
        } else {
          setStatus(user.user.split('@')[0])
          document.querySelector(".vtex-menu-2-x-menuContainer--drawer").classList.add("vtex-menu-2-x-menuContainer--drawer--logged")
        }
      })
      .catch(err => console.error(err));
  }, []);

  const toggleDropdown = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };

  return (
    <div className="vtex-menu-2-x-menuContainerHeader">
      <div className="vtex-menu-2-x-menuContainerHeader-content">
        <ul className="vtex-menu-2-x-menuContainerHeader-content-nav">
          {menu?.map((item, index) => (
            <li
              key={index}
              className={`vtex-menu-2-x-menuContainerHeader-content-nav-item ${openItemIndex === index ? "vtex-menu-2-x-menuContainerHeader-content-nav-item--active" : ""}`}
            >
              <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--container" onClick={() => toggleDropdown(index)}>
                <a
                  className="vtex-menu-2-x-menuContainerHeader-content-nav-item--title"
                  href={item?.url}
                >
                  {item?.__editorItemTitle}
                </a>
                <svg style={{ transform: `rotate(${openItemIndex === index ? "90deg" : "0deg"})` }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52906 3.52918C7.59097 3.4671 7.66452 3.41785 7.74549 3.38425C7.82647 3.35064 7.91327 3.33334 8.00094 3.33334C8.08861 3.33334 8.17541 3.35064 8.25639 3.38425C8.33736 3.41785 8.41091 3.4671 8.47282 3.52918L16.4708 11.5282C16.5328 11.5902 16.5821 11.6637 16.6157 11.7447C16.6493 11.8257 16.6666 11.9125 16.6666 12.0002C16.6666 12.0879 16.6493 12.1747 16.6157 12.2557C16.5821 12.3366 16.5328 12.4102 16.4708 12.4721L8.47282 20.4712C8.34767 20.5964 8.17793 20.6667 8.00094 20.6667C7.82395 20.6667 7.65421 20.5964 7.52906 20.4712C7.40391 20.346 7.3336 20.1763 7.3336 19.9992C7.3336 19.8222 7.40391 19.6525 7.52906 19.5273L15.0565 12.0002L7.52906 4.47307C7.46699 4.41115 7.41775 4.33759 7.38415 4.25661C7.35055 4.17562 7.33325 4.0888 7.33325 4.00112C7.33325 3.91344 7.35055 3.82663 7.38415 3.74564C7.41775 3.66466 7.46699 3.5911 7.52906 3.52918Z" fill="#034EA1"/>
                </svg>
              </div>
              {openItemIndex === index && item?.sublevel?.length > 0 && (
                <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-mobile">
                  <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-mobile-items">
                    <ul className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-mobile-items-category">
                      {item?.sublevel?.map((_item, subIndex) => (
                        <li
                          key={subIndex}
                          className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-mobile-items-category-items-item"
                        >
                          <a
                            className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-mobile-items-category-items-item--title"
                            href={_item?.url}
                          >
                            {_item?.__editorItemTitle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MenuCustomMobile.schema = {
  title: "Menu Custom",
  type: "object",
  properties: {
    menu: {
      title: 'Menu',
      type: 'array',
      items: {
        title: "Item",
        type: 'object',
        properties: {
          __editorItemTitle: {
            type: 'string',
            title: 'Título'
          },
          url: {
            title: "URL",
            description: "Link",
            type: 'string',
            default: "#"
          },
          sublevel: {
            title: 'Subcategoria',
            type: 'array',
            items: {
              title: "Item",
              type: 'object',
              properties: {
                __editorItemTitle: {
                  type: 'string',
                  title: 'Título',
                },
                url: {
                  title: "URL",
                  description: "Link",
                  type: 'string',
                  default: "#"
                },
              },
            },
          },
        },
      },
    },
  },
};
