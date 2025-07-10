import React from "react";

export default function MenuCustom({ menu }) {
  return (
    <div className="vtex-menu-2-x-menuContainerHeader">
      <div className="vtex-menu-2-x-menuContainerHeader-content">
        <ul className="vtex-menu-2-x-menuContainerHeader-content-nav">
          {menu?.map((item, index) => (
            <li
              key={index}
              className="vtex-menu-2-x-menuContainerHeader-content-nav-item"
            >
              <a
                className="vtex-menu-2-x-menuContainerHeader-content-nav-item--title"
                href={item?.url}
              >
                {item?.__editorItemTitle}
              </a>

              {item?.sublevel?.length && (
                <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown">
                  <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items">
                    <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-category">
                      {item?.sublevel?.map((_item, index) => (
                        <ul className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-category-items">
                          {_item?.threeLevel?.map((_data, index) => (
                            <li
                              key={index}
                              className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-category-items-item"
                            >
                              <a
                                className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-category-items-item--title"
                                href={_data?.url}
                              >
                                {_data?.__editorItemTitle}
                              </a>
                            </li>
                          ))}

                          {_item?.buttonSeeAll && (
                            <a
                              className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-category--see-all"
                              href={_item?.buttonSeeAllLink}
                            >
                              {_item?.buttonSeeAll}
                            </a>
                          )}
                        </ul>
                      ))}
                    </div>
                    {item?.numberLink?.length && (
                      <div className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-number">
                        <h3 className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-number__title">
                          {item?.numberLink[0]?.__editorItemTitle}
                        </h3>
                        {item?.numberLink?.map((_item, index) => (
                          <ul className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-number-items">
                            {_item?.threeLevel?.map((_data, index) => (
                              <li
                                key={index}
                                className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-number-items-item"
                              >
                                <a
                                  className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-number-items-item--title"
                                  href={_data?.url}
                                >
                                  {_data?.__editorItemTitle}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    )}

                    {item?.banners?.length && (
                      <ul className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-banners">
                        {item?.banners?.map((_item, index) => (
                          <li className="vtex-menu-2-x-menuContainerHeader-content-nav-item--dropdown-items-banners-item">
                            <a href={_item?.url}>
                              <img src={_item?.banner} title={_item?.title} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
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

MenuCustom.schema = {
  title: "Menu Custom",
  type: "object",
  properties: {
    menu: {
      title: "Menu",
      type: "array",
      items: {
        title: "Item",
        type: "object",
        properties: {
          __editorItemTitle: {
            type: "string",
            title: "Título",
          },
          url: {
            title: "URL",
            description: "Link",
            type: "string",
            default: "#",
          },
          sublevel: {
            title: "Subcategoria",
            type: "array",
            items: {
              title: "Item",
              type: "object",
              properties: {
                __editorItemTitle: {
                  type: "string",
                  title: "Título",
                },
                url: {
                  title: "URL",
                  description: "Link",
                  type: "string",
                  default: "#",
                },
                buttonSeeAll: {
                  title: "Texto - Ver todos os produtos",
                  description: "Texto - Ver todos os produtos",
                  type: "string",
                },
                buttonSeeAllLink: {
                  title: "Link - Ver todos os produtos",
                  description: "Link - Ver todos os produtos",
                  type: "string",
                },
                threeLevel: {
                  title: "Subcategoria item",
                  type: "array",
                  items: {
                    title: "Item",
                    type: "object",
                    properties: {
                      __editorItemTitle: {
                        type: "string",
                        title: "Título",
                      },
                      url: {
                        title: "URL",
                        description: "Link",
                        type: "string",
                        default: "#",
                      },
                    },
                  },
                },
              },
            },
          },
          numberLink: {
            title: "Compre por numeração",
            type: "array",
            items: {
              title: "Item",
              type: "object",
              properties: {
                __editorItemTitle: {
                  type: "string",
                  title: "Título",
                },
                threeLevel: {
                  title: "Compre por numeração item",
                  type: "array",
                  items: {
                    title: "Item",
                    type: "object",
                    properties: {
                      __editorItemTitle: {
                        type: "string",
                        title: "Título",
                      },
                      url: {
                        title: "URL",
                        description: "Link",
                        type: "string",
                        default: "#",
                      },
                    },
                  },
                },
              },
            },
          },
          banners: {
            title: "Banners",
            type: "array",
            items: {
              title: "Banner",
              type: "object",
              properties: {
                title: {
                  title: "Título para SEO",
                  type: "string",
                  default: "",
                },
                banner: {
                  title: "Banner",
                  type: "string",
                  widget: {
                    "ui:widget": "image-uploader",
                  },
                },
                url: {
                  title: "Link do Banner",
                  type: "string",
                  default: "",
                },
              },
            },
          },
        },
      },
    },
  },
};
