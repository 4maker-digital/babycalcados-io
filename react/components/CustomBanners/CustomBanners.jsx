import React from "react";
import Slider from "react-slick";
import { useDevice } from 'vtex.device-detector';

import "./style.global.css";

function NextArrow(props) {
  const { onClick } = props;
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };
  return (
    <svg className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--topbar-next`} style={{ display: "block" }} onClick={handleClick} width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4938 11.743L2.9365 20.4858C2.77693 20.6488 2.58749 20.7781 2.379 20.8664C2.17051 20.9546 1.94704 21 1.72137 21C1.26561 21 0.828517 20.815 0.506244 20.4858C0.346671 20.3227 0.22009 20.1292 0.13373 19.9162C0.0473695 19.7032 0.00292144 19.4748 0.00292142 19.2443C0.00292138 18.7786 0.183971 18.3321 0.506244 18.0028L7.86548 10.5015L0.506243 3.00017C0.345831 2.83762 0.218509 2.64423 0.131621 2.43115C0.0447331 2.21807 -1.66195e-06 1.98953 -1.68213e-06 1.7587C-1.70231e-06 1.52787 0.044733 1.29932 0.131621 1.08624C0.218509 0.873163 0.345831 0.679773 0.506242 0.517221C0.665344 0.353332 0.854632 0.223246 1.06319 0.134474C1.27174 0.0457019 1.49544 -1.30736e-07 1.72137 -1.50487e-07C1.9473 -1.70239e-07 2.171 0.0457018 2.37956 0.134474C2.58811 0.223245 2.7774 0.353332 2.9365 0.517221L11.4938 9.26001C11.6542 9.42256 11.7815 9.61596 11.8684 9.82903C11.9553 10.0421 12 10.2707 12 10.5015C12 10.7323 11.9553 10.9609 11.8684 11.1739C11.7815 11.387 11.6542 11.5804 11.4938 11.743Z" fill="black"/>
    </svg>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };
  return (
    <svg className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--topbar-prev`} style={{ display: "block" }} onClick={handleClick} width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.506246 11.743L9.0635 20.4858C9.22307 20.6488 9.41251 20.7781 9.621 20.8664C9.82949 20.9546 10.053 21 10.2786 21C10.7344 21 11.1715 20.815 11.4938 20.4858C11.6533 20.3227 11.7799 20.1292 11.8663 19.9162C11.9526 19.7032 11.9971 19.4748 11.9971 19.2443C11.9971 18.7786 11.816 18.3321 11.4938 18.0028L4.13452 10.5015L11.4938 3.00017C11.6542 2.83762 11.7815 2.64423 11.8684 2.43115C11.9553 2.21807 12 1.98953 12 1.7587C12 1.52787 11.9553 1.29932 11.8684 1.08624C11.7815 0.873163 11.6542 0.679773 11.4938 0.517221C11.3347 0.353332 11.1454 0.223246 10.9368 0.134474C10.7283 0.0457019 10.5046 -1.30736e-07 10.2786 -1.50487e-07C10.0527 -1.70239e-07 9.829 0.0457018 9.62044 0.134474C9.41189 0.223245 9.2226 0.353332 9.0635 0.517221L0.506247 9.26001C0.345835 9.42256 0.21851 9.61596 0.131621 9.82903C0.044734 10.0421 9.37989e-07 10.2707 9.17809e-07 10.5015C8.97629e-07 10.7323 0.0447339 10.9609 0.131621 11.1739C0.21851 11.387 0.345835 11.5804 0.506246 11.743Z" fill="black"/>
    </svg>
  );
}
export default function CustomBanners({ config }) {
  const { isMobile } = useDevice();

  console.log("config", config)

  if (config?.length < 1 && config?.[0]?.banners < 1) {
    return null
  }

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: isMobile ? config?.[0]?.qtdItemsMob : config?.[0]?.qtdItemsDesk,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={`vtex-store-components-3-x-bannersCustom ${(config?.[0]?.sliderDesk || config?.[0]?.sliderMob) && "vtex-store-components-3-x-bannersCustom-slider"}`}>
      {(config?.[0]?.sliderDesk || config?.[0]?.sliderMob) ? (
        <Slider {...settings}>
          {config?.[0]?.banners?.map((banner, i) => (
            <li className="vtex-store-components-3-x-bannersCustom-item-slider" key={i}>
              <a href={banner?.url}>
                <img alt={banner?.alt} className="vtex-store-components-3-x-bannersCustom-image" src={isMobile ? banner.bannerMobile : banner?.banner} />
              </a>
            </li>
          ))}
        </Slider>
      ) : (
        <ul className="vtex-store-components-3-x-bannersCustom-list">
          {config?.[0]?.banners?.map((banner, i) => (
            <li className="vtex-store-components-3-x-bannersCustom-item" key={i}>
              <a href={banner?.url}>
                <img alt={banner?.alt} className="vtex-store-components-3-x-bannersCustom-image" src={isMobile ? banner.bannerMobile : banner?.banner} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

CustomBanners.schema = {
  title: "Banners Customizados",
  type: "object",
  properties: {
    config: {
      title: "Config Banners",
      type: "array",
      items: {
        title: "Banner",
        type: "object",
        properties: {
          sliderDesk: {
            title: "É Slider Desktop?",
            type: "boolean",
            default: false,
          },
          sliderMob: {
            title: "É Slider Mobile?",
            type: "boolean",
            default: false,
          },
          qtdItemsDesk: {
            title: "Quantos items no desktop?",
            type: "string",
            default: "4",
          },
          qtdItemsMob: {
            title: "Quantos items no mobile?",
            type: "string",
            default: "2",
          },
          banners: {
            title: "Banners",
            type: "array",
            items: {
              title: "Item",
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
      },
    },
  },
};
