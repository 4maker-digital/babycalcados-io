import { useEffect, useState } from "react";
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import { useOrderItems } from "vtex.order-items/OrderItems";

import axios from 'axios';

function ButtonMinus() {
  return (
    <svg className={`vtex-minicart-2-x-container--content-itens-item--bottom-minus`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14C7 13.7679 7.09219 13.5454 7.25628 13.3813C7.42038 13.2172 7.64294 13.125 7.875 13.125H20.125C20.3571 13.125 20.5796 13.2172 20.7437 13.3813C20.9078 13.5454 21 13.7679 21 14C21 14.2321 20.9078 14.4546 20.7437 14.6187C20.5796 14.7828 20.3571 14.875 20.125 14.875H7.875C7.64294 14.875 7.42038 14.7828 7.25628 14.6187C7.09219 14.4546 7 14.2321 7 14Z" fill="#000"/>
    </svg>
  );
}

function ButtonPlus() {
  return (
    <svg className={`vtex-minicart-2-x-container--content-itens-item--bottom-plus`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M14 7C14.2321 7 14.4546 7.09219 14.6187 7.25628C14.7828 7.42038 14.875 7.64294 14.875 7.875V13.125H20.125C20.3571 13.125 20.5796 13.2172 20.7437 13.3813C20.9078 13.5454 21 13.7679 21 14C21 14.2321 20.9078 14.4546 20.7437 14.6187C20.5796 14.7828 20.3571 14.875 20.125 14.875H14.875V20.125C14.875 20.3571 14.7828 20.5796 14.6187 20.7437C14.4546 20.9078 14.2321 21 14 21C13.7679 21 13.5454 20.9078 13.3813 20.7437C13.2172 20.5796 13.125 20.3571 13.125 20.125V14.875H7.875C7.64294 14.875 7.42038 14.7828 7.25628 14.6187C7.09219 14.4546 7 14.2321 7 14C7 13.7679 7.09219 13.5454 7.25628 13.3813C7.42038 13.2172 7.64294 13.125 7.875 13.125H13.125V7.875C13.125 7.64294 13.2172 7.42038 13.3813 7.25628C13.5454 7.09219 13.7679 7 14 7Z" fill="#000"/>
    </svg>
  );
}

function ButtonRemove() {
  return (
    <svg className={`vtex-minicart-2-x-container--content-itens-item--bottom-remove`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9.77782 10.3334C9.89569 10.3334 10.0087 10.3785 10.0921 10.4589C10.1754 10.5393 10.2223 10.6483 10.2223 10.7619V15.9048C10.2223 16.0185 10.1754 16.1275 10.0921 16.2078C10.0087 16.2882 9.89569 16.3334 9.77782 16.3334C9.65994 16.3334 9.5469 16.2882 9.46355 16.2078C9.3802 16.1275 9.33337 16.0185 9.33337 15.9048V10.7619C9.33337 10.6483 9.3802 10.5393 9.46355 10.4589C9.5469 10.3785 9.65994 10.3334 9.77782 10.3334ZM12 10.3334C12.1179 10.3334 12.231 10.3785 12.3143 10.4589C12.3977 10.5393 12.4445 10.6483 12.4445 10.7619V15.9048C12.4445 16.0185 12.3977 16.1275 12.3143 16.2078C12.231 16.2882 12.1179 16.3334 12 16.3334C11.8822 16.3334 11.7691 16.2882 11.6858 16.2078C11.6024 16.1275 11.5556 16.0185 11.5556 15.9048V10.7619C11.5556 10.6483 11.6024 10.5393 11.6858 10.4589C11.7691 10.3785 11.8822 10.3334 12 10.3334ZM14.6667 10.7619C14.6667 10.6483 14.6199 10.5393 14.5365 10.4589C14.4532 10.3785 14.3401 10.3334 14.2223 10.3334C14.1044 10.3334 13.9913 10.3785 13.908 10.4589C13.8246 10.5393 13.7778 10.6483 13.7778 10.7619V15.9048C13.7778 16.0185 13.8246 16.1275 13.908 16.2078C13.9913 16.2882 14.1044 16.3334 14.2223 16.3334C14.3401 16.3334 14.4532 16.2882 14.5365 16.2078C14.6199 16.1275 14.6667 16.0185 14.6667 15.9048V10.7619Z" fill="#ADB5BD"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 7.8C18 8.04754 17.9027 8.28493 17.7296 8.45997C17.5565 8.635 17.3217 8.73333 17.0769 8.73333H16.6154V17.1333C16.6154 17.6284 16.4209 18.1032 16.0747 18.4533C15.7284 18.8033 15.2589 19 14.7692 19H9.23077C8.74114 19 8.27156 18.8033 7.92534 18.4533C7.57912 18.1032 7.38462 17.6284 7.38462 17.1333V8.73333H6.92308C6.67826 8.73333 6.44347 8.635 6.27036 8.45997C6.09725 8.28493 6 8.04754 6 7.8V6.86667C6 6.61913 6.09725 6.38173 6.27036 6.2067C6.44347 6.03167 6.67826 5.93333 6.92308 5.93333H10.1538C10.1538 5.6858 10.2511 5.4484 10.4242 5.27337C10.5973 5.09833 10.8321 5 11.0769 5H12.9231C13.1679 5 13.4027 5.09833 13.5758 5.27337C13.7489 5.4484 13.8462 5.6858 13.8462 5.93333H17.0769C17.3217 5.93333 17.5565 6.03167 17.7296 6.2067C17.9027 6.38173 18 6.61913 18 6.86667V7.8ZM8.41662 8.73333L8.30769 8.7884V17.1333C8.30769 17.3809 8.40494 17.6183 8.57806 17.7933C8.75117 17.9683 8.98595 18.0667 9.23077 18.0667H14.7692C15.014 18.0667 15.2488 17.9683 15.4219 17.7933C15.5951 17.6183 15.6923 17.3809 15.6923 17.1333V8.7884L15.5834 8.73333H8.41662ZM6.92308 7.8V6.86667H17.0769V7.8H6.92308Z" fill="#ADB5BD"/>
    </svg>
  );
}

function ButtonScroll() {
  return (
    <svg className={`vtex-minicart-2-x-container--footer__button-scroll`} xmlns="http://www.w3.org/2000/svg" width="44" height="25" viewBox="0 0 44 25" fill="none">
      <rect width="44" height="25" fill="#F8F9FA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3289 10.6641C12.418 10.4866 12.5738 10.3518 12.7622 10.2891C12.9506 10.2264 13.1562 10.2409 13.3339 10.3296L21.9994 14.6601L30.6634 10.3281C30.7515 10.283 30.8477 10.2559 30.9464 10.2482C31.0451 10.2406 31.1443 10.2525 31.2383 10.2833C31.3324 10.3142 31.4194 10.3634 31.4944 10.428C31.5693 10.4926 31.6307 10.5715 31.6751 10.66C31.7194 10.7485 31.7458 10.8448 31.7527 10.9436C31.7596 11.0423 31.7469 11.1415 31.7154 11.2353C31.6838 11.3291 31.634 11.4157 31.5687 11.4902C31.5035 11.5646 31.4242 11.6254 31.3354 11.6691L22.3354 16.1691C22.2311 16.2213 22.116 16.2485 21.9994 16.2485C21.8827 16.2485 21.7677 16.2213 21.6634 16.1691L12.6634 11.6691C12.4859 11.58 12.3511 11.4241 12.2884 11.2357C12.2257 11.0473 12.2402 10.8418 12.3289 10.6641Z" fill="#000"/>
    </svg>
  );
}

export default function CustomMinicart() {
  const { orderForm } = useOrderForm()
  const { addItems, updateQuantity } = useOrderItems()

  const [orderInfo, setOrderInfo] = useState()
  const [discountCoupon, setDiscountCoupon] = useState("")
  const [cep, setCep] = useState("")
  const [orderItemsWithProductInfo, setOrderItemsWithProductInfo] = useState([])

  const [activeScroll, setActiveScroll] = useState(false)

  const [message, setMessage] = useState(null)
  const [coupon, setCoupon] = useState(null)

  const [freight, setFreight] = useState(null)
  const [freightSelected, setFreightSelected] = useState([])

  const verifyCoupon = (e) => {
    const options = {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        coupon: discountCoupon
      })
    };

    fetch('/api/checkout/pub/orderForm/' + orderForm.id + '/attachments/marketingData', options)
    .then(response => response.json())
    .then(response => {
        if(response?.marketingData?.coupon == null) {
            setMessage("Cupom não é válido!")
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        } else {
            setCoupon(response?.marketingData?.coupon)
            updateOrderForm()
        }
    })
    .catch(err => console.error(err));

  }

  const updateOrderForm = () => {
    if (orderForm?.items && orderForm?.items?.length) {
        console.log("orderForm?.items", orderForm?.items)
        const item = orderForm?.items[0]
        updateQuantity({ uniqueId: item?.uniqueId, quantity: item?.quantity })
    }
  }

  useEffect(() => {
    if(orderForm?.marketingData?.coupon != null)
      setCoupon(orderForm?.marketingData?.coupon)
  })

  const removeCoupon = () => {
    const options = {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        coupon: "null"
      })
    };

    fetch('/api/checkout/pub/orderForm/' + orderForm.id + '/attachments/marketingData', options)
      .then(response => response?.json())
      .then(response => {
          setCoupon("")
          setDiscountCoupon("")
          updateOrderForm()
      } )
      .catch(err => console.error(err));
  }

  useEffect(() => {
    const fetchProductInfo = async () => {
      if (orderForm) {
        const items = orderForm?.items
        const updatedItems = []

        for (const item of items) {
          const productId = item?.id
          const response = await axios.get(`/api/catalog_system/pub/products/search/?fq=skuId:${productId}`)
          const productInfo = response?.data

          const updatedItem = {
            ...item,
            productInfoItem: productInfo
          }

          updatedItems.push(updatedItem)
        }

        fetch(`/api/checkout/pub/orderForm/${orderForm.id}/attachments/shippingData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({selectedAddresses: freightSelected})
          })
        .then(resp => resp.json())
        .then((orderFormUpdated) => {
          setOrderItemsWithProductInfo(updatedItems)
          setOrderInfo(orderFormUpdated)
        })
      }
    }

    fetchProductInfo()
  }, [orderForm, freight])

  const formatPrice = (price) => {
    return (price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const onClickPlus = (item) => {
    const filteredItem = item?.productInfoItem[0]?.items?.filter(productItem => productItem?.itemId === item?.id);

    if (item?.quantity <= filteredItem[0]?.sellers[0]?.commertialOffer?.AvailableQuantity) {
      const options = {
        allowedOutdatedData: ['paymentData'],
      }

      addItems([{
        ...options,
        id: item?.id,
        quantity: 1,
        seller: "1"
      }]);
    }
  }

  const onClickMinus = (item) => {
    if (item?.quantity > 1) {
      const options = {
        allowedOutdatedData: ['paymentData'],
      }

      addItems([{
        ...options,
        id: item?.id,
        quantity: -1,
        seller: "1"
      }]);
    }
  }

  const removeItem = (index) => {
    const options = {
      // allowedOutdatedData: ['removeFromCart'],
    }

    updateQuantity({ index: index, quantity: 0 }, options)
  }

  const onClickScroll = () => {
    setActiveScroll(!activeScroll);
  }

  const handleSubmitCep = async () => {
    const postalCode = cep.replace('-', '').replace('.', '')
    const isValid = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
    .then(resp => resp.json())
    .catch(error => console.error(error))

    if(isValid?.cep) {
      fetch(`/api/checkout/pub/orderForm/${orderForm.id}/attachments/shippingData`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({selectedAddresses: [{ postalCode: postalCode, country: "BRA" }]})
        })
      .then(resp => resp.json())
      .then((resp) => {
        setFreight(resp?.shippingData?.address?.postalCode)
        setFreightSelected(resp?.shippingData?.selectedAddresses)
      })
    }
  }

  const removeFreight = () => {
    setCep("")
    setFreight(null)
  }

  return (
    <>
      <div className={`vtex-minicart-2-x-container--content ${!!activeScroll ? "vtex-minicart-2-x-container--content--active" : ""}`}>
        <ul className="vtex-minicart-2-x-container--content-itens">
          {orderItemsWithProductInfo.map((item, index) => (
              <li key={item?.id} className="vtex-minicart-2-x-container--content-itens-item" data-id={item?.id}>
                <a className="vtex-minicart-2-x-container--content-itens-item-link" href={item?.detailUrl}>
                  <img src={item?.imageUrls?.at1x} />
                </a>
                <div className="vtex-minicart-2-x-container--content-itens-item--info">
                  <h2 className="vtex-minicart-2-x-container--content-itens-item__name">{item?.name}</h2>

                  {item?.productInfoItem?.[0]?.["Gênero"]?.[0] ? (
                    <span className="vtex-minicart-2-x-container--content-itens-item__gender">{item?.productInfoItem[0]["Gênero"][0]}</span>
                    ) : null
                  }
                  {item?.productInfoItem?.[0]?.["Cor / Tonalidade"]?.[0] ? (
                      <span className="vtex-minicart-2-x-container--content-itens-item__color">Cor: {item?.productInfoItem[0]["Cor / Tonalidade"][0]}</span>
                    ) : null
                  }

                  <div className="vtex-minicart-2-x-container--content-itens-item--prices">
                    {item?.skuSpecifications?.[0]?.["fieldValues"]?.[0] ? (
                        <span className="vtex-minicart-2-x-container--content-itens-item__size">Tamanho: {item?.skuSpecifications[0]["fieldValues"][0]}</span>
                      ) : (
                        <span className="vtex-minicart-2-x-container--content-itens-item__size">Tamanho: Único</span>
                      )
                    }

                    <h3 className="vtex-minicart-2-x-container--content-itens-item--prices--total">{formatPrice(item?.price)}</h3>
                  </div>

                  <div className="vtex-minicart-2-x-container--content-itens-item--bottom">
                    <div className="vtex-minicart-2-x-container--content-itens-item--bottom--quantity">
                      <button className="vtex-minicart-2-x-container--content-itens-item--bottom--quantity-minus" onClick={() => onClickMinus(item)}>
                        <ButtonMinus />
                      </button>
                      <input className="vtex-minicart-2-x-container--content-itens-item--bottom--quantity-value" value={item?.quantity}></input>
                      <button className="vtex-minicart-2-x-container--content-itens-item--bottom--quantity-plus" onClick={() => onClickPlus(item)}>
                        <ButtonPlus />
                      </button>
                    </div>
                    <div className="vtex-minicart-2-x-container--content-itens-item--bottom--remove">
                      <button className="vtex-minicart-2-x-container--content-itens-item--bottom--remove-button" title="Remover" onClick={() => removeItem(index)}>
                        <ButtonRemove />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </div>
      {orderInfo &&
        <div className={`vtex-minicart-2-x-container--footer ${!!activeScroll ? "vtex-minicart-2-x-container--footer--active" : ""}`}>
          <button className="vtex-minicart-2-x-container--footer--scroll" onClick={onClickScroll} >
            <ButtonScroll />
          </button>
          <ul className="vtex-minicart-2-x-container--footer-itens">
            <li className="vtex-minicart-2-x-container--footer-itens-item">
              <p className="vtex-minicart-2-x-container--footer-itens-item--title">Subtotal</p>
              {orderInfo?.totalizers?.filter(item => item.id === "Items").map(filteredTotalizers => {
                return (
                  <p className="vtex-minicart-2-x-container--footer-itens-item--text">{formatPrice(filteredTotalizers?.value)}</p>
                )
              })}
            </li>
            {!activeScroll &&
              <>
                <li className="vtex-minicart-2-x-container--footer-itens-item">
                  <p className="vtex-minicart-2-x-container--footer-itens-item--title">Cupom de desconto</p>
                  <div className="vtex-minicart-2-x-container--footer-itens-item--code">
                    {coupon ? (
                        <>
                          <p className="vtex-minicart-2-x-container--footer-itens-item--text">{coupon}</p>

                          <button className="vtex-minicart-2-x-container--footer-itens-item--code--remove" onClick={removeCoupon}>
                            <ButtonRemove />
                          </button>
                        </>
                    ) : (
                      <>
                        {message != null ?
                        <small className="vtex-minicart-2-x-container--footer-itens-item--code--error">{ message }</small>
                    :
                        <>
                          <input
                            type="text"
                            onChange={(e) => setDiscountCoupon(e.target.value)}
                            className="vtex-minicart-2-x-container--footer-itens-item--code-input"
                            value={discountCoupon}
                            placeholder="Insira aqui"
                            name="discountCoupon"
                          ></input>
                          <button className="vtex-minicart-2-x-container--footer-itens-item--code-button" onClick={verifyCoupon}>Aplicar</button>
                        </>
                        }
                      </>
                    )}
                  </div>
                </li>
                <li className="vtex-minicart-2-x-container--footer-itens-item">
                  <p className="vtex-minicart-2-x-container--footer-itens-item--title">Calcule o frete</p>
                  <div className="vtex-minicart-2-x-container--footer-itens-item--code">
                    {freight ? (
                        <>
                          <p className="vtex-minicart-2-x-container--footer-itens-item--text">{freight}</p>

                          <button className="vtex-minicart-2-x-container--footer-itens-item--code--remove" onClick={removeFreight}>
                            <ButtonRemove />
                          </button>
                        </>
                      ) : (
                        <>
                          <input
                            type="text"
                            onChange={(e) => setCep(e.target.value)}
                            className="vtex-minicart-2-x-container--footer-itens-item--code-input"
                            value={cep}
                            placeholder="Informe o CEP"
                            name="cep"
                          ></input>
                          <button className="vtex-minicart-2-x-container--footer-itens-item--code-button" onClick={handleSubmitCep}>Calcular</button>
                        </>
                    )}
                  </div>
                </li>
              </>
            }
            <li className="vtex-minicart-2-x-container--footer-itens-item">
              <p className="vtex-minicart-2-x-container--footer-itens-item--title">Descontos</p>
              {coupon ? (
                <>
                  {orderInfo?.totalizers?.filter(item => item.id === "Discounts").map(filteredTotalizers => {
                    return (
                      <p className="vtex-minicart-2-x-container--footer-itens-item--text">{formatPrice(filteredTotalizers?.value)}</p>
                    )
                  })}
                </>
              ) : (
                <p className="vtex-minicart-2-x-container--footer-itens-item--text">-</p>
              )}
            </li>
            <li className="vtex-minicart-2-x-container--footer-itens-item">
              <p className="vtex-minicart-2-x-container--footer-itens-item--title">Frete</p>
              {freight ? (
                <>
                  {orderInfo?.totalizers?.filter(item => item.id === "Shipping").map(filteredTotalizers => {
                    return (
                      <>
                        {filteredTotalizers?.value <= 0 ? (
                          <p className="vtex-minicart-2-x-container--footer-itens-item--text">Frete grátis</p>
                        ) : (
                          <p className="vtex-minicart-2-x-container--footer-itens-item--text">{formatPrice(filteredTotalizers?.value)}</p>
                        )}
                      </>
                    )
                  })}
                </>
              ) : (
                <p className="vtex-minicart-2-x-container--footer-itens-item--text">-</p>
              )}
            </li>
            <li className="vtex-minicart-2-x-container--footer-itens-item">
              <p className="vtex-minicart-2-x-container--footer-itens-item--title">Total</p>
              <p className="vtex-minicart-2-x-container--footer-itens-item--text">{formatPrice(orderInfo?.value)}</p>
            </li>
          </ul>

          <a className="vtex-minicart-2-x-container--footer__button" href="/checkout">Finalizar compra</a>
        </div>
      }
    </>
  );
}
