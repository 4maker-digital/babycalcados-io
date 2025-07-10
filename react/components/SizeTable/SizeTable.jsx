import React from "react";

import { useProduct } from "vtex.product-context";

export default function SizeTable({ banners }) {
  const { product } = useProduct();

  if (banners?.length < 1) {
    return null
  }

  const filteredBanner = banners?.filter(banner => banner?.categoryId == product?.categoryId)

  console.log("filteredBanner", filteredBanner)

  return (
    <div className="vtex-store-components-3-x-sizeTable">
      <img alt={filteredBanner[0]?.alt} className="vtex-store-components-3-x-bannersCustom-image" src={filteredBanner[0]?.banner} />
    </div>
  );
}

SizeTable.schema = {
  title: "Banners Tabela de medidas",
  type: "object",
  properties: {
    banners: {
      title: "Banners",
      type: "array",
      items: {
        title: "Banner",
        type: "object",
        properties: {
          banner: {
            title: "Cadastre o banner",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          categoryId: {
            title: "ID da Categoria",
            type: "string",
            default: "",
          },
          alt: {
            title: "Texto alternativo",
            type: "string",
            default: "",
          },
        },
      },
    },
  },
};
