import React from "react"
import { useProduct } from "vtex.product-context"

import "./style.global.css"

export default function VideoFrame() {
  const { product } = useProduct()

  if (product?.specificationGroups.length < 1) {
    return null
  }

  const allSpecifications = product?.specificationGroups.filter(spec => spec?.originalName === "allSpecifications")[0].specifications
  const video = allSpecifications.filter(video => video.originalName === "Video")[0]?.values[0]
  const imgProduct = allSpecifications.filter(video => video.originalName === "Img-produto")[0]?.values[0]

  return (
    <div className="vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--customDescription">
      <section className="vtex-store-components-3-x-container vtex-flex-layout-0-x-flexRowContent--customDescription">
        <section className="vtex-store-components-3-x-imageProduct" dangerouslySetInnerHTML={{ __html: imgProduct }}>
        </section>
        <section className="vtex-store-components-3-x-videoProduct" dangerouslySetInnerHTML={{ __html: video }}>
        </section>
      </section>
    </div>
  )
}
