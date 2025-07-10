import { useState, useEffect } from "react";
import { useSearchPage } from "vtex.search-page-context/SearchPageContext";
import { useDevice } from "vtex.device-detector";

import Flag from "./Flag";

import style from "./styles.css";

export default function SelectedFiltersBar() {
    const { searchQuery } = useSearchPage();
    const { isMobile } = useDevice()
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        let allFacets = [];
        const facetsData = searchQuery.facets.specificationFilters.filter((item) => item.hidden === false && item.name !== "Marca" && item.name !== "Coleção" && item.name !== "Estampa").map((item) => item);
        facetsData.forEach((item) => { allFacets = [...allFacets, ...item.facets]});
        const selectedFacets = allFacets.filter((facet) => facet.selected);

        if(selectedFacets?.length === 0 && searchQuery?.variables?.selectedFacets?.length > 0) {
            setSelected(searchQuery.variables.selectedFacets);
        } else {
            setSelected(selectedFacets)
        }
    }, [searchQuery]);

    const handleApply = () => {
        let applyButton = document.querySelector('.vtex-search-result-3-x-filterApplyButtonWrapper .vtex-button__label')
        applyButton.click()
        if(showFilters) setShowFilters(false)
      }

      const handleClearFilter = () => {
        selected.forEach(facet => {
          setTimeout(() => {
          document.querySelector(`.vtex-search-result-3-x-filterAccordionItemBox--${facet.value} .vtex-checkbox__input`)?.click()
          }, 100)
        })
        setTimeout(() => {
          handleApply()
        }, 1000)
      }

  return (
    <>
    {!isMobile && selected?.length > 0 && selected[0]?.name && (
        <div className={style.flagsContainer}>
          {selected.map((item) => (
            <Flag key={item.name} item={item} handleApply={handleApply} />
          ))}
          <button className={style.btnClear} onClick={() => handleClearFilter()}>Limpar filtros</button>
        </div>
      )}
    </>
  )
}
