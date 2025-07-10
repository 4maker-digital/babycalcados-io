import React from "react";

import { useProduct } from "vtex.product-context";

import "./style.global.css";

export default function CustomFlag() {
  const { product } = useProduct();

  return (
    <div className="vtex-stack-layout-0-x-stackItem vtex-stack-layout-0-x-stackItem--prodsum absolute top-0 left-0 w-auto h-auto vtex-stack-layout-0-x-stackItem vtex-stack-layout-0-x-stackItem--prodsum vtex-stack-layout-0-x-stackItem--product-flags vtex-stack-layout-0-x-stackItem--prodsum--product-flags vtex-stack-layout-0-x-stackItem--prodsum--custom-flag" style={{ zIndex: 999999999999}}>
      {product.productClusters.map((product, i) => {
      if (product.id == "361" || product.id == "152") {
          return <span className="vtex-product-highlights-2-x-productHighlightText vtex-product-highlights-2-x-productHighlightText--product-flags-text vtex-product-highlights-2-x-productHighlightText--product-custom-flag">Lançamentos</span>
        }
      })}
    </div>
  )
}
