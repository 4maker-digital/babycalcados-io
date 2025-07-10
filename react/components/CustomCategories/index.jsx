import React, { useEffect } from 'react';
import styles from './OutrasCategorias.css';
import Slider from "react-slick";

const OutrasCategorias = ({ categorias }) => {
  
  const sliderRef = React.createRef();

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: categorias.length > 6 ? 6 : categorias.length,
    slidesToScroll: 1,
    prevArrow: <a> 
      <svg className={styles.prevArrow}  style={{ display: "block" }} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.09823 0.735058C9.15513 0.791818 9.20027 0.859247 9.23107 0.933482C9.26187 1.00772 9.27772 1.0873 9.27772 1.16767C9.27772 1.24805 9.26187 1.32763 9.23107 1.40187C9.20027 1.4761 9.15513 1.54353 9.09823 1.60029L2.19811 8.50015L9.09823 15.4C9.21295 15.5147 9.2774 15.6704 9.2774 15.8326C9.2774 15.9949 9.21295 16.1505 9.09823 16.2652C8.98351 16.38 8.82792 16.4444 8.66568 16.4444C8.50344 16.4444 8.34784 16.38 8.23312 16.2652L0.901659 8.93276C0.844763 8.876 0.799622 8.80857 0.768822 8.73434C0.738021 8.6601 0.722168 8.58052 0.722168 8.50015C0.722168 8.41977 0.738021 8.34019 0.768822 8.26596C0.799622 8.19172 0.844763 8.12429 0.901659 8.06753L8.23312 0.735058C8.28987 0.678154 8.35729 0.633007 8.43152 0.602203C8.50574 0.571398 8.58531 0.555542 8.66568 0.555542C8.74604 0.555542 8.82561 0.571398 8.89983 0.602203C8.97406 0.633007 9.04148 0.678154 9.09823 0.735058Z" fill="#034EA1" />
      </svg>
    </a>,
    
    nextArrow: <a> 
      <svg className={styles.nextArrow} style={{ display: "block" }} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.901659 0.735058C0.958411 0.678154 1.02583 0.633007 1.10006 0.602203C1.17428 0.571398 1.25385 0.555542 1.33421 0.555542C1.41458 0.555542 1.49415 0.571398 1.56837 0.602203C1.6426 0.633007 1.71002 0.678154 1.76677 0.735058L9.09823 8.06753C9.15513 8.12429 9.20027 8.19172 9.23107 8.26596C9.26187 8.34019 9.27772 8.41977 9.27772 8.50015C9.27772 8.58052 9.26187 8.6601 9.23107 8.73434C9.20027 8.80857 9.15513 8.876 9.09823 8.93276L1.76677 16.2652C1.65205 16.38 1.49646 16.4444 1.33421 16.4444C1.17197 16.4444 1.01638 16.38 0.901659 16.2652C0.786938 16.1505 0.722488 15.9949 0.722488 15.8326C0.722488 15.6704 0.786938 15.5147 0.901659 15.4L7.80179 8.50015L0.901659 1.60029C0.844763 1.54353 0.799622 1.4761 0.768822 1.40187C0.738021 1.32763 0.722168 1.24805 0.722168 1.16767C0.722168 1.0873 0.738021 1.00772 0.768822 0.933482C0.799622 0.859247 0.844763 0.791818 0.901659 0.735058Z" fill="#034EA1" />
      </svg>
    </a>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: categorias.length > 4 ? 4 : categorias.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: categorias.length > 3 ? 3 : categorias.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: categorias.length > 2 ? 2 : categorias.length,
          slidesToScroll: 1,
        },
      },
    ],

    beforeChange: (current, next) => {
      sliderRef.current.slickGoTo(current);
    }
  };

  // useEffect(() => {
  //   alert(categorias?.length)
  // }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Outras Categorias</h2>
      <div className={`${styles.grid} ${categorias?.length < 7 ? styles.flex : ''}`}>
        {/* {categorias?.length > 6 ? ( */}
          <Slider {...settings} ref={sliderRef}>
            {categorias.map((categoria, index) => (
              <a
                key={index}
                href={categoria?.link}
                className={styles.card}
                style={{ outline: 'none!important', border: 'none!important' }}
              >
                <img
                  src={categoria?.image}
                  alt={categoria?.title}
                  className={styles.image}
                />
                <p className={styles.caption}>{categoria?.title}</p>
              </a>
            ))}
          </Slider>
        {/* ) : (
          categorias.map((categoria, index) => (
            <a
              key={index}
              href={categoria?.link}
              className={styles.card}
            >
              <img
                src={categoria?.image}
                alt={categoria?.title}
                className={styles.image}
              />
              <p className={styles.caption}>{categoria?.title}</p>
            </a>
          ))
        )} */}
      </div>
    </div>
  );
};

export default OutrasCategorias;

OutrasCategorias.schema = {
  title: 'Outras Categorias',
  description: 'Componente para exibir outras categorias com imagem e link.',
  type: 'object',
  properties: {
    categorias: {
      type: 'array',
      title: 'Categorias',
      items: {
        type: 'object',
        properties: {
          image: {
            type: 'string',
            title: 'URL da Imagem',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          title: {
            type: 'string',
            title: 'Título',
          },
          link: {
            type: 'string',
            title: 'URL de Redirecionamento',
          },
        },
      },
    },
  },
};