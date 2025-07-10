import { useEffect, useState, useRef } from "react";
import { useSearchPage } from "vtex.search-page-context/SearchPageContext";
import style from './styles.css';

export default function CustomFilter() {
  const { searchQuery } = useSearchPage();
  const [specification, setSpecification] = useState();
  const [selected, setSelected] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const priceRange = useRef();

  function ButtonClose(props) {
    const { className, style, onClick } = props;
    const handleClick = () => {
      setShowFilters(prev => !prev);
      if (!showFilters) {
        document.body.classList.add('vtex-flex-layout-0-x-filters-open');
      } else {
        document.body.classList.remove('vtex-flex-layout-0-x-filters-open');
      }
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={handleClick}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M6.97034 6.96888C7.04001 6.89903 7.12277 6.84362 7.21389 6.80581C7.30501 6.768 7.40269 6.74854 7.50134 6.74854C7.59999 6.74854 7.69767 6.768 7.78879 6.80581C7.87991 6.84362 7.96267 6.89903 8.03234 6.96888L12.0013 10.9394L15.9703 6.96888C16.0401 6.89915 16.1229 6.84383 16.214 6.80609C16.3051 6.76836 16.4027 6.74893 16.5013 6.74893C16.6 6.74893 16.6976 6.76836 16.7887 6.80609C16.8798 6.84383 16.9626 6.89915 17.0323 6.96888C17.1021 7.03861 17.1574 7.12139 17.1951 7.2125C17.2329 7.30361 17.2523 7.40126 17.2523 7.49988C17.2523 7.5985 17.2329 7.69615 17.1951 7.78725C17.1574 7.87836 17.1021 7.96115 17.0323 8.03088L13.0618 11.9999L17.0323 15.9689C17.1021 16.0386 17.1574 16.1214 17.1951 16.2125C17.2329 16.3036 17.2523 16.4013 17.2523 16.4999C17.2523 16.5985 17.2329 16.6961 17.1951 16.7873C17.1574 16.8784 17.1021 16.9611 17.0323 17.0309C16.9626 17.1006 16.8798 17.1559 16.7887 17.1937C16.6976 17.2314 16.6 17.2508 16.5013 17.2508C16.4027 17.2508 16.3051 17.2314 16.214 17.1937C16.1229 17.1559 16.0401 17.1006 15.9703 17.0309L12.0013 13.0604L8.03234 17.0309C7.96261 17.1006 7.87982 17.1559 7.78872 17.1937C7.69761 17.2314 7.59996 17.2508 7.50134 17.2508C7.40272 17.2508 7.30507 17.2314 7.21396 17.1937C7.12286 17.1559 7.04007 17.1006 6.97034 17.0309C6.90061 16.9611 6.84529 16.8784 6.80756 16.7873C6.76982 16.6961 6.75039 16.5985 6.75039 16.4999C6.75039 16.4013 6.76982 16.3036 6.80756 16.2125C6.84529 16.1214 6.90061 16.0386 6.97034 15.9689L10.9408 11.9999L6.97034 8.03088C6.9005 7.96121 6.84508 7.87845 6.80727 7.78733C6.76946 7.69621 6.75 7.59853 6.75 7.49988C6.75 7.40123 6.76946 7.30355 6.80727 7.21243C6.84508 7.12131 6.9005 7.03855 6.97034 6.96888Z" fill="#212529"/>
      </svg>
    );
  }

  useEffect(() => {
    const facetsData = searchQuery.facets.specificationFilters.filter((item) => item.hidden === false && item.name !== "Marca" && item.name !== "Coleção" && item.name !== "Estampa").map((item) => item);
    let allFacets = [];
    facetsData.forEach((item) => { allFacets = [...allFacets, ...item.facets] });
    const selectedFacets = allFacets.filter((facet) => facet.selected);

    if (selectedFacets?.length === 0 && searchQuery?.variables?.selectedFacets?.length > 0) {
      setSelected(searchQuery.variables.selectedFacets);
    } else {
      setSelected(selectedFacets);
    }

    setSpecification(facetsData);
  }, [searchQuery]);

  useEffect(() => {
    setTimeout(() => {
      const vtexPriceRange = document.querySelector('.vtex-search-result-3-x-filter__container--priceRange .vtex-slider-container')
      if (priceRange?.current) {
        priceRange.current?.append(vtexPriceRange)
      }
    }, 3000)
  }, [priceRange])

  const handleChange = (facet) => {
    const isSelected = selected.findIndex((item) => item.value === facet.value) >= 0 ? true : false;
    if (isSelected) {
      const newArray = selected.filter((item) => item.value !== facet.value);
      setSelected(newArray);
    } else {
      setSelected((prev) => [...prev, facet]);
    }

    document.querySelector(`.vtex-search-result-3-x-filterAccordionItemBox--${facet.value} .vtex-checkbox__input`)?.click();

    setTimeout(() => {
      handleApply()
    }, 1000)
  };

  const handleShowFilters = () => {
    setShowFilters(prev => !prev)

    if (!showFilters) {
      document.body.classList.add('vtex-flex-layout-0-x-filters-open');
    } else {
      document.body.classList.remove('vtex-flex-layout-0-x-filters-open');
    }
  }

  const handleApply = () => {
    let applyButton = document.querySelector('.vtex-search-result-3-x-filterApplyButtonWrapper .vtex-button__label')
    applyButton.click()

    if (showFilters) setShowFilters(false)

    setTimeout(() => {
      document.body.classList.remove('vtex-flex-layout-0-x-filters-open');
    }, 1000)
  }

  const handleClearFilter = () => {
    setSelected([]);
    setActiveFilters([]);
    selected.forEach(facet => {
      setTimeout(() => {
        document.querySelector(`.vtex-search-result-3-x-filterAccordionItemBox--${facet.value} .vtex-checkbox__input`)?.click()
      }, 100)
    })
    setTimeout(() => {
      handleApply()
    }, 1000)
  }

  const handleFilterDropdown = (filterName) => {
    setActiveFilters((prevActiveFilters) =>
      prevActiveFilters.includes(filterName)
        ? prevActiveFilters.filter((name) => name !== filterName)
        : [...prevActiveFilters, filterName]
    );
  }

  return (
    <>
      <div className={style.customFilters}>
        <button className={style.btnShowFilters} onClick={handleShowFilters}>Filtros</button>
        {showFilters && <div className={style.overlay} onClick={() => setShowFilters(false)}></div>}
      </div>
      {specification && (
        <div className={!showFilters ? `${style.filterContainer}` : `${style.active} ${style.filterContainer}`}>
          <div className={style.container}>
            <div className={style.containerCloseContent}>
              <h2 className={style.containerCloseContentTitle}>
                Filtrar por
              </h2>
              <button className={style.containerCloseContentButton}>
                <ButtonClose />
              </button>
            </div>
            {specification?.length > 0 &&
              specification.map((item) => (
                <div
                  key={item.name}
                  className={`${style.filterColumn} ${item.name} ${activeFilters.includes(item.name) ? style.active : ""}`}
                  onClick={() => handleFilterDropdown(item.name)}
                >
                  <h4 className={activeFilters.includes(item.name) ? style.active : ""}>{item.name}</h4>
                  <div className={style.filterList}>
                    {item?.facets?.length > 0 &&
                      item.facets.sort((a, b) => {
                        let nameA = parseInt(a.name);
                        let nameB = parseInt(b.name);

                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                      }).map((facet) => (
                        <label key={facet.name}>
                          <input
                            type="checkbox"
                            name={facet.name}
                            checked={
                              selected.findIndex((item) => item.value === facet.value && item.key === facet.key) >= 0
                                ? true
                                : false
                            }
                            onChange={() => handleChange(facet)}
                          />
                          {facet.name}
                        </label>
                      ))}
                  </div>
                </div>
              ))}
            <div className={style.priceRangeContainer} ref={priceRange}>
              <h4>Faixa de preço</h4>
            </div>
            <div className={style.buttonsContainer}>
              <button className={style.btnClear} onClick={() => handleClearFilter()}>Limpar filtros</button>
              <button className={style.btnApply} onClick={() => handleApply()}>Aplicar filtros</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
