import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./style.global.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--topbar-next ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      style={{ display: "block" }}
      onClick={onClick}
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M11.8812 8.20592L6.74188 12.7022C6.13625 13.2328 5.1875 12.8015 5.1875 11.9962V3.00373C5.18735 2.82351 5.23914 2.64705 5.33669 2.4955C5.43424 2.34396 5.57341 2.22374 5.73752 2.14925C5.90164 2.07476 6.08375 2.04916 6.26204 2.0755C6.44033 2.10185 6.60725 2.17903 6.74281 2.2978L11.8803 6.79405C11.981 6.88204 12.0617 6.99056 12.117 7.11232C12.1723 7.23408 12.2009 7.36626 12.2009 7.49999C12.2009 7.63371 12.1723 7.76589 12.117 7.88765C12.0617 8.00941 11.981 8.11793 11.8803 8.20592H11.8812Z"
        fill="#183249"
      />
    </svg>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--topbar-prev ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      style={{ display: "block" }}
      onClick={onClick}
      fill="none"
    >
      <path
        d="M4.11874 8.20592L9.25812 12.7022C9.86374 13.2328 10.8125 12.8015 10.8125 11.9962V3.00373C10.8126 2.82351 10.7608 2.64705 10.6633 2.4955C10.5657 2.34396 10.4266 2.22374 10.2625 2.14925C10.0984 2.07476 9.91624 2.04916 9.73795 2.0755C9.55966 2.10185 9.39274 2.17903 9.25718 2.2978L4.11968 6.79405C4.01898 6.88204 3.93828 6.99056 3.88298 7.11232C3.82768 7.23408 3.79907 7.36626 3.79907 7.49999C3.79907 7.63371 3.82768 7.76589 3.88298 7.88765C3.93828 8.00941 4.01898 8.11793 4.11968 8.20592H4.11874Z"
        fill="#183249"
      />
    </svg>
  );
}

export default function TopBarComponent({ topbarContent }) {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <>
      {topbarContent?.length > 0 && showSlider && (
        <div className="vtex-flex-layout-0-x-flexRow--topbar">
          <Slider {...settings}>
            {topbarContent.map((item, index) => (
              <div key={index}>
                {item?.link ? (
                  <a
                    className="vtex-rich-text-0-x-link--topbar-link"
                    href={item?.link}
                    style={{ 
                      textDecoration: "none"
                    
                    }}
                  >
                    <p
                      className="vtex-rich-text-0-x-paragraph--topbar-title"
                      dangerouslySetInnerHTML={{ __html: item?.titleItem }}
                    />
                  </a>
                ) : (
                  <p
                    className="vtex-rich-text-0-x-paragraph--topbar-title"
                    dangerouslySetInnerHTML={{ __html: item?.titleItem }}
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}

TopBarComponent.schema = {
  title: "Top Bar - Conteudo",
  type: "object",
  properties: {
    topbarContent: {
      title: "Top Bar - Conteudo",
      type: "array",
      items: {
        type: "object",
        properties: {
          __editorItemTitle: {
            title: "Texto",
            type: "string",
            description: "Titulo"
          },
          titleItem: {
            title: "Texto - Conteudo",
            type: "string",
            description:
              "O input aceita HTML. Exemplo: <strong>item</strong>"
          },

          link : {
            title: "Link",
            type: "string",
            description: "Link do item"
          }
        }
      }
    }
  }
};
