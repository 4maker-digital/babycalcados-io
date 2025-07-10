import React from "react";
import { useDevice } from 'vtex.device-detector';
import { Helmet } from 'vtex.render-runtime';

export default function RateIframe() {
  const { isMobile } = useDevice();

  return (
    <>
      <Helmet>
        <script defer charset="utf-8" src="//widgets.rr.skeepers.io/carousel/8ac39d94-3ae9-f594-69cc-3ce537147de6/6127b1c3-598d-4987-abd1-3a3124f3c418.js"></script>
      </Helmet>
      <div class="skeepers_carousel_container" data-slides-count="4"></div>
    </>
  );
}
