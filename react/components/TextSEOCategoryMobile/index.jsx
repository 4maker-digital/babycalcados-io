import { useEffect, useState, useRef } from "react";

function ButtonSvg() {
  return (
    <svg className={`vtex-flex-layout-0-x-flexRow--svg-seo-category`} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 18.0002C9 17.7018 9.11853 17.4157 9.32951 17.2047C9.54048 16.9937 9.82663 16.8752 10.125 16.8752H23.1593L18.3285 12.0467C18.1173 11.8355 17.9986 11.5489 17.9986 11.2502C17.9986 10.9515 18.1173 10.6649 18.3285 10.4537C18.5397 10.2425 18.8263 10.1238 19.125 10.1238C19.4237 10.1238 19.7103 10.2425 19.9215 10.4537L26.6715 17.2037C26.7763 17.3082 26.8594 17.4323 26.9161 17.569C26.9728 17.7057 27.002 17.8522 27.002 18.0002C27.002 18.1482 26.9728 18.2947 26.9161 18.4314C26.8594 18.5681 26.7763 18.6922 26.6715 18.7967L19.9215 25.5467C19.7103 25.7579 19.4237 25.8766 19.125 25.8766C18.8263 25.8766 18.5397 25.7579 18.3285 25.5467C18.1173 25.3355 17.9986 25.0489 17.9986 24.7502C17.9986 24.4515 18.1173 24.1649 18.3285 23.9537L23.1593 19.1252H10.125C9.82663 19.1252 9.54048 19.0067 9.32951 18.7957C9.11853 18.5847 9 18.2986 9 18.0002Z" fill="#034EA1"/>
    </svg>
  );
}

const TextSEOCategoryMobile = ({ imageSrc, titleSEO, description }) => {
  if (!description) {
    return null
  }
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setShowButton(descriptionRef.current.scrollHeight > 110);
    }
  }, []);

  const addClassesToHtml = html => {
    return html
      .replace(/<p>/g, '<p class="vtex-flex-layout-0-x-description-item">')
      .replace(/<strong>/g, '<strong class="vtex-flex-layout-0-x-description-strong">');
  };

  return (
    <div style={styles.container}>
      <div style={styles.containerContent}>
        {imageSrc && (
          <img src={imageSrc} alt="Imagem" style={styles.image} />
        )}
        <div style={styles.textContainer}>
          <h1 style={styles.title}>{titleSEO}</h1>
          <div
            style={{
              ...styles.description,
              height: isExpanded ? 'auto' : '110px',
              overflow: 'hidden'
            }}
            ref={descriptionRef}
            dangerouslySetInnerHTML={{ __html: addClassesToHtml(description) }}
          >
          </div>
          {showButton && (
            <button onClick={() => setIsExpanded(!isExpanded)} style={styles.button}>
                {isExpanded ? 'Mostrar menos' : 'Mostrar mais'}

                <ButtonSvg />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#E9ECEF',
    marginBottom: '10px'
  },
  containerContent: {
    width: '100%',
    maxWidth: '96rem',
    margin: '0 auto',
    padding: '50px 15px',
    display: 'flex',
    gap: '29px',
    flexDirection: 'column'
  },
  image: {
    width: '368px',
    height: '368px',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    margin: '0 0 15px 0',
    color: '#212529',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29.35px',
  },
  description: {
    overflow: 'hidden',
    transition: 'height 0.3s ease',
  },
  button: {
    marginTop: '10px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    height: 'auto',
    color: '#034EA1',
    backgroundColor: 'transparent',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    lineHeight: '14.63px',
  },
};

TextSEOCategoryMobile.schema = {
  type: 'object',
  title: 'Texto SEO - Mobile',
  description: 'Texto SEO - Mobile',
  properties: {
    imageSrc: {
      title: 'Imagem SEO',
      type: 'string',
      widget: {
          'ui:widget': 'image-uploader',
      },
      default: '',
    },
    titleSEO: {
      title: "Titulo SEO",
      description: "Titulo SEO",
      type: "string",
      default: "",
    },
    description: {
      title: "Descrição SEO",
      description: "Descrição SEO",
      type: "string",
      default: "",
    }
  }
};

export default TextSEOCategoryMobile;
