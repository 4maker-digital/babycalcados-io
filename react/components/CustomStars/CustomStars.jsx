import React, { useEffect } from "react";

import { useProduct } from "vtex.product-context";
import { canUseDOM } from "vtex.render-runtime";

export default function CustomStars() {
  return <></>
  const { product } = useProduct();

  useEffect(() => {
    try{

      if (!canUseDOM) return;

      var descendentes = document.querySelectorAll(".vtex-store-components-3-x-skuSelectorItem")
      var button = document.querySelector(".vtex-store-components-3-x-shippingContainer .vtex-button")
      for (var i = 0; i < descendentes.length; i++) {
        descendentes[i]?.addEventListener("click", function (e) {
          var table = document.querySelector(".vtex-store-components-3-x-shippingTable")
          table.style.display = "none"
          
        })
      }
      button?.addEventListener("click", function (e) {
        var table = document.querySelector(".vtex-store-components-3-x-shippingTable")
        table.style.display = "block"
      })
    } catch (error) {
      // console.log(error)
    }

  }, [])

  return (
    <>
      <div className="vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--stars mw9 center">
        <div className="vtex-store-components-3-x-container" style={{ margin: "40px 0" }}>
          <div className="skeepers_product__stars" data-product-id={product.productId} style={{ marginBottom: "20px" }}></div>
          <div className="skeepers_product__reviews" data-product-id={product.productId} data-locale="pt_BR" data-price={product.items?.[0].sellers?.[0].commertialOffer?.Price} data-currency={product.items?.[0].sellers?.[0].commertialOffer?.spotPrice} data-name={product.productName} data-url={product.link} data-image-url={product.items?.[0].images?.[0].imageUrl}></div>
        </div>
      </div>
    </>
  )
}
