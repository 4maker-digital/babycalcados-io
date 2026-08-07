import React, { useEffect, useState } from "react";
import { useProduct } from "vtex.product-context";

export default function PDPSimilars() {
  const context = useProduct();
  const [uniqueProducts, setUniqueProducts] = useState([]);

  async function getSimilars() {
    const response = await fetch(`/api/catalog_system/pub/products/crossselling/similars/${context?.product?.productId}`);
    const data = await response.json();

    const uniqueProductsMap = new Map();
    data.forEach(product => {
      const urlIdentifier = product.productId; // ID único do produto
      if (!uniqueProductsMap.has(urlIdentifier)) {
        uniqueProductsMap.set(urlIdentifier, product);
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

  if (uniqueProducts.length < 1) {
    return null;
  }

  return (
    <div className="vtex-product-summary-2-x-similars-pdp-container">
      <span className="vtex-product-summary-2-x-similars-pdp-title">Selecione uma cor:</span>
      <div className="vtex-product-summary-2-x-similars-pdp-item">
        {uniqueProducts.map((product, index) => {
          const isSameProduct = context?.product?.productId === product.productId;

          return (
            <a
              title={product['Cor / Tonalidade']?.[0]}
              className="vtex-product-summary-2-x-similars-pdp-item-link"
              key={index}
              href={product?.link}
              onClick={handleClick}
              style={{
                border: isSameProduct ? '1px solid #034ea1' : 'none',
                padding: isSameProduct ? '4px' : '',
                borderRadius: isSameProduct ? '30px' : '',
              }}
            >
              <img className="vtex-product-summary-2-x-similars-pdp-item-link-img" src={product?.items[0]?.images[0]?.imageUrl} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
