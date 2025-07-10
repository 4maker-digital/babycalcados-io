import React, { useEffect, useState } from 'react';
import { useProduct } from 'vtex.product-context';
import { useOrderItems } from 'vtex.order-items/OrderItems'
import { canUseDom } from 'vtex.render-runtime';
import handleAddToCartObject from '../../Helpers/HandleAddToCartObject';

// import css modules
import styles from './FloatingBuyButton.module.css';

const FloatingBuyButton = () => {
  const product = useProduct()?.product;

  const [hasSelectedItem, setHasSelectedItem] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  if (!product) return null;

  const { addItems } = useOrderItems()
  const selectedItem = useProduct()?.selectedItem;
  const productPrice = selectedItem?.sellers[0]?.commertialOffer?.Price;
  const installments = selectedItem?.sellers[0]?.commertialOffer?.Installments;
  const selectedItemId = selectedItem?.itemId;
  const productName = selectedItem?.name;

  const lowerInstallment = installments?.reduce((prev, current) => {
    return prev.Value < current.Value ? prev : current;
  });

  const installmentsNumber = lowerInstallment.NumberOfInstallments;
  const installmentsValue = lowerInstallment.Value;
  const installmentsText = `${installmentsNumber}x de R$ ${installmentsValue}`;

  useEffect(() => {
    setTimeout(()=> {
      const skuSelectorItem = document.querySelectorAll(".vtex-store-components-3-x-skuSelectorItem");

      skuSelectorItem.forEach((item) => {
        item.addEventListener('click', () => {
          setHasSelectedItem(true);
          setShowAlert(false);
          console.log("hasSelectedItem", hasSelectedItem)
        });
      });

    }, 1000)

  }, [])


  const addToCart = () => {

    if (!hasSelectedItem) {
      const elementY = document.querySelector(".vtex-store-components-3-x-skuSelectorItem").offsetTop
      const elementHeight = document.querySelector(".vtex-store-components-3-x-skuSelectorItem").offsetHeight * 4
      window.scroll(0, (elementY - elementHeight))
      setShowAlert(true);
      return
    }

    const objAddToCart = handleAddToCartObject(selectedItemId, productName)
    addItems(objAddToCart)
    document.getElementsByClassName("vtex-minicart-2-x-minicartIconContainer")[0]?.click()


  }

  return (
    <div className={styles.floatingBuyButton}>
       {showAlert &&
        <span style={{position: "absolute", top: "-40px", right: "8px", padding: "7px", background: "#f3e09a", borderRadius: "10px", "borderBottomRightRadius": "0px"}}> Por favor, selecione o tamanho </span>
       }
        <div className={styles.valuesWrapper}>
            <div className={styles.value}>
               Por R$ {productPrice} <br />
                <span className={styles.installments}> {installmentsText} </span>
            </div>
        </div>
        <div className={styles.buyButtonWrapper}>
            <a className={styles.button} onClick={addToCart}>Comprar</a>
        </div>
    </div>
  );
};


export default FloatingBuyButton;
