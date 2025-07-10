import React from 'react'
import Slider from 'react-slick'
import { useDevice } from 'vtex.device-detector'

import './styles.global.css'

const NextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow" onClick={onClick} style={{ position: 'absolute' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
    </div>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prev-arrow" onClick={onClick} style={{ position: 'absolute' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </svg>
    </div>
  )
}

const SliderCustom = ({ items }) => {
  const { isMobile } = useDevice()

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const renderItem = (item) => {
    if (item.type === 'video') {
      return (
        <div className="main-banner-video" style={{ position: 'relative' }}>
          <iframe
            style={{ width: '100%', height: isMobile ? '470px' : '550px', outline: "none" }}
            src={isMobile ? item.videoUrlMobile : item.videoUrl}
            allowFullScreen
          />
          {/* Hidden container for click events */}
          <div className="hidden-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px'
            // background: "rgba(0,0,0,.3)"
             }} onClick={() => window.location.href = item.link}></div>
        </div>
      )
    } else {
      return (
        <div>
          <img
            src={isMobile ? item.imageUrlMobile : item.imageUrlDesktop}
            alt={item.imageAlt}
          />
          <a href={item.link}>{item.linkText}</a>
        </div>
      )
    }
  }

  if (!items) {
    return null
  }

  return (
    <div className="main-banner">
      <Slider {...settings}>
        {items.map((item, index) => (
          <a href={item.link} key={index}>
            <div>{renderItem(item)}</div>
          </a>
        ))}
      </Slider>
    </div>
  )
}

SliderCustom.schema = {
  title: 'Slider Custom',
  type: 'object',
  properties: {
    items: {
      title: 'Items',
      type: 'array',
      items: {
        title: 'Item',
        type: 'object',
        properties: {
          type: {
            title: 'Type',
            type: 'string',
            enum: ['image', 'video'],
            default: 'image',
          },
          imageUrlDesktop: {
            title: 'Desktop Image URL',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          imageUrlMobile: {
            title: 'Mobile Image URL',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          imageAlt: {
            title: 'Image Alt Text',
            type: 'string',
          },
          videoUrl: {
            title: 'Video URL',
            type: 'string',
          },
          videoUrlMobile: {
            title: 'Mobile Video URL',
            type: 'string',
          },
          link: {
            title: 'Link URL',
            type: 'string',
          },
          linkText: {
            title: 'Link Text',
            type: 'string',
          },
        },
        required: ['type'],
      },
    },
  },
}

export default SliderCustom
