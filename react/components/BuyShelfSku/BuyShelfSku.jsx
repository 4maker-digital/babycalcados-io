import React, { useEffect, useState, useRef } from "react";
import { useProduct } from "vtex.product-context";
import Slider from "react-slick";
import { useOrderItems } from 'vtex.order-items/OrderItems';
import { useDevice } from 'vtex.device-detector';

function NextArrow(props) {
  const { onClick } = props;
  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };
  return (
    <svg className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--topbar-next`} style={{ display: "block" }} onClick={handleClick} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.901659 0.735058C0.958411 0.678154 1.02583 0.633007 1.10006 0.602203C1.17428 0.571398 1.25385 0.555542 1.33421 0.555542C1.41458 0.555542 1.49415 0.571398 1.56837 0.602203C1.6426 0.633007 1.71002 0.678154 1.76677 0.735058L9.09823 8.06753C9.15513 8.12429 9.20027 8.19172 9.23107 8.26596C9.26187 8.34019 9.27772 8.41977 9.27772 8.50015C9.27772 8.58052 9.26187 8.6601 9.23107 8.73434C9.20027 8.80857 9.15513 8.876 9.09823 8.93276L1.76677 16.2652C1.65205 16.38 1.49646 16.4444 1.33421 16.4444C1.17197 16.4444 1.01638 16.38 0.901659 16.2652C0.786938 16.1505 0.722488 15.9949 0.722488 15.8326C0.722488 15.6704 0.786938 15.5147 0.901659 15.4L7.80179 8.50015L0.901659 1.60029C0.844763 1.54353 0.799622 1.4761 0.768822 1.40187C0.738021 1.32763 0.722168 1.24805 0.722168 1.16767C0.722168 1.0873 0.738021 1.00772 0.768822 0.933482C0.799622 0.859247 0.844763 0.791818 0.901659 0.735058Z" fill="#000"/>
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
    <svg className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--topbar-prev`} style={{ display: "block" }} onClick={handleClick} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09823 0.735058C9.15513 0.791818 9.20027 0.859247 9.23107 0.933482C9.26187 1.00772 9.27772 1.0873 9.27772 1.16767C9.27772 1.24805 9.26187 1.32763 9.23107 1.40187C9.20027 1.4761 9.15513 1.54353 9.09823 1.60029L2.19811 8.50015L9.09823 15.4C9.21295 15.5147 9.2774 15.6704 9.2774 15.8326C9.2774 15.9949 9.21295 16.1505 9.09823 16.2652C8.98351 16.38 8.82792 16.4444 8.66568 16.4444C8.50344 16.4444 8.34784 16.38 8.23312 16.2652L0.901659 8.93276C0.844763 8.876 0.799622 8.80857 0.768822 8.73434C0.738021 8.6601 0.722168 8.58052 0.722168 8.50015C0.722168 8.41977 0.738021 8.34019 0.768822 8.26596C0.799622 8.19172 0.844763 8.12429 0.901659 8.06753L8.23312 0.735058C8.28987 0.678154 8.35729 0.633007 8.43152 0.602203C8.50574 0.571398 8.58531 0.555542 8.66568 0.555542C8.74604 0.555542 8.82561 0.571398 8.89983 0.602203C8.97406 0.633007 9.04148 0.678154 9.09823 0.735058Z" fill="#000"/>
    </svg>
  );
}

export default function BuyShelfSku() {
  const context = useProduct();
  const [skuList, setSkuList] = useState([]);
  const [textAdd, setTextAdd] = useState(false);
  const [buttonBuyActive, setButtonBuyActive] = useState(true);
  const sliderRef = React.createRef();
  const { addItems } = useOrderItems();
  const { isMobile } = useDevice();
  const wrapperRef = useRef(null);

  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: isMobile ? 3 : 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      if (!buttonBuyActive) {
        sliderRef.current.slickGoTo(current);
      }
    }
  };

  useEffect(() => {
    if (context?.product?.items) {
      const sortedSkus = context.product.items.sort((a, b) => {
        const sizeA = a.variations[0]?.values[0];
        const sizeB = b.variations[0]?.values[0];
        return parseInt(sizeA) - parseInt(sizeB);
      });
      setSkuList(sortedSkus);
    }
  }, [context?.product?.productId]);

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    event.preventDefault();

    const options = {
      allowedOutdatedData: ['paymentData'],
    }

    addItems([{
        ...options,
        id: product?.itemId,
        seller: "1",
        quantity: 1,
    }]);

    var minicart = document.getElementsByClassName(
      'vtex-minicart-2-x-openIconContainer'
    )[0]

    minicart.click();

    setButtonBuyActive(!buttonBuyActive);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    setTextAdd(true);
  };

  /*const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setButtonBuyActive(true);
      setTextAdd(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); */

  return (
    <div ref={wrapperRef} className="vtex-product-summary-2-x-buy--item" style={{width: buttonBuyActive && !isMobile ? "13%" : "100%"}} onMouseLeave={() => setButtonBuyActive(true)}>
      {buttonBuyActive && !isMobile ? (
        <div className="vtex-product-summary-2-x-buy--item-content">
          <div className="vtex-product-summary-2-x-buy--item-content--button" onClick={handleClick}></div>
          <h2
            className="vtex-product-summary-2-x-buy--item-content--title"
            style={{ display: textAdd ? "block" : "none" }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setButtonBuyActive(!buttonBuyActive)
              setTextAdd(false);
            }}
          >
            Adicionar à sacola
          </h2>
        </div>
      ) : (
        <div className="vtex-product-summary-2-x-buy--item-sku-list">
          <Slider {...settings} ref={sliderRef}>
            {skuList?.map((product, index) => (
              <button key={index} onClick={(event) => handleAddToCart(event, product)} className={`vtex-product-summary-2-x-buy--item-sku-list-button ${product?.sellers[0]?.commertialOffer?.AvailableQuantity <= 0 ? "vtex-product-summary-2-x-buy--item-sku-list-button--inactive" : "" }`}>
                {product?.variations[0]?.values[0]}
              </button>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
