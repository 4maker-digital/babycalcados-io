import React from "react";

import { useDevice } from 'vtex.device-detector';

export default function BannerCustom({ banners, Slider }) {
  const { isMobile } = useDevice();

  console.log('Slider', Slider)

  if (banners?.length < 1) {
    return null
  }

  return (
    <div className="vtex-store-components-3-x-bannersCustom">
      <ul className="vtex-store-components-3-x-bannersCustom-list">
        {Slider ? (
          <Slider>
            {banners?.map((banner, i) => (
              <li className="vtex-store-components-3-x-bannersCustom-item" key={i}>
                <a href={banner?.url}>
                  <img alt={banner?.alt} className="vtex-store-components-3-x-bannersCustom-image" src={isMobile ? banner.bannerMobile : banner?.banner} />
                </a>
              </li>
            ))}
          </Slider>
        ) : (
          banners?.map((banner, i) => (
            <li className="vtex-store-components-3-x-bannersCustom-item" key={i}>
              <a href={banner?.url}>
                <img alt={banner?.alt} className="vtex-store-components-3-x-bannersCustom-image" src={isMobile ? banner.bannerMobile : banner?.banner} />
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

BannerCustom.schema = {
  title: "Banner Custom",
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
            title: "Banner",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          bannerMobile: {
            title: "Banner Mobile",
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
