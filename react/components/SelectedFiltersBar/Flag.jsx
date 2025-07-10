import style from "./styles.css";

export default function Flag({ item, handleApply }) {

  const handleRemove = () => {
    document.querySelector(`.vtex-search-result-3-x-filterAccordionItemBox--${item.value} .vtex-checkbox__input`)?.click()
    setTimeout(() => {
        handleApply()
    }, 500)
  }
  return (
    <>
      {item &&
        item?.name && (
          <span className={style.flagItem}>
            {item.name}
            <button
              className={style.btnRemoveFlag}
              onClick={() => handleRemove()}
            >
              &times;
            </button>
          </span>
        )}
    </>
  );
}
