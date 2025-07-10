import React, { useEffect } from "react";

import { useProduct } from "vtex.product-context";

export default function HideSizeTable() {
  const { product } = useProduct();

  useEffect(() => {
    if (product.categoryId === "983087079") {
      document.querySelector(".vtex-modal-layout-0-x-triggerContainer--medidas").style.display = 'none'
    }
  }, [product])

  return null
}
