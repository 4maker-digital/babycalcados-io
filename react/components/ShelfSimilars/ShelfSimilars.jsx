import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";

export default function ShelfSimilars() {
  const context = useProduct();
  const [uniqueProducts, setUniqueProducts] = useState([]);

  async function getSimilars() {
    const response = await fetch(`/api/catalog_system/pub/products/crossselling/similars/${context?.product?.productId}`);
    const data = await response.json();

    const uniqueProductsMap = new Map();
    data.forEach(product => {
      const color = product['Cor / Tonalidade'][0];
      if (!uniqueProductsMap.has(color)) {
        uniqueProductsMap.set(color, product);
      }
    });

    const uniqueProductsArray = Array.from(uniqueProductsMap.values());

    setUniqueProducts(uniqueProductsArray);
  }

  useEffect(() => {
    getSimilars();
  }, [context?.product?.productId]);

  const handleClick = (event) => {
    event.stopPropagation(); // Impede a propagação do evento de clique para os elementos pai
  };

  return (
    <div className="vtex-product-summary-2-x-similars-item">
      {uniqueProducts.map((product, index) => (
        <a className="vtex-product-summary-2-x-similars-item-link" key={index} href={product?.link} onClick={handleClick}>
          <img className="vtex-product-summary-2-x-similars-item-link-img" src={product?.items[0]?.images[0]?.imageUrl} />
        </a>
      ))}
    </div>
  );
}
