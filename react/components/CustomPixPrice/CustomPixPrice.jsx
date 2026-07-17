import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './CustomPixPrice.module.css'

const formatBRL = value =>
  (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// O items[0] pode estar esgotado; a simulação de um SKU sem estoque não
// devolve o preço. Pegamos o primeiro disponível e só caímos no items[0]
// quando nenhum tem estoque.
const pickSkuId = product => {
  const items = product?.items ?? []
  const available = items.find(
    item => item?.sellers?.[0]?.commertialOffer?.AvailableQuantity > 0
  )

  return (available ?? items[0])?.itemId
}

const CustomPixPrice = ({ label, variant }) => {
  const product = useProduct()?.product
  const skuId = pickSkuId(product)

  const [pixValue, setPixValue] = useState(null)

  useEffect(() => {
    if (!skuId) return

    const requestPixValue = async () => {
      try {
        // RnbBehavior=1 + o pagamento em paymentData.payments são obrigatórios
        // para a simulação disparar a promoção de meio de pagamento
        // (ex.: "5% de desconto à vista" no Pix).
        const res = await fetch(
          '/api/checkout/pub/orderForms/simulation?RnbBehavior=1',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              items: [{ id: skuId, quantity: 1, seller: '1' }],
              country: 'BRA',
              paymentData: {
                payments: [
                  {
                    // 125 = Pix
                    paymentSystem: '125',
                    installments: 1,
                    referenceValue: null,
                    value: 0,
                  },
                ],
              },
            }),
          }
        )

        const responseJson = await res.json()

        // A simulação não tem um "value" no topo, só o array "totals".
        // Somando Items + Discounts (+ Shipping) chegamos no total final
        // já com o desconto do Pix aplicado.
        const total = (responseJson.totals || []).reduce(
          (acc, totalizer) => acc + (totalizer.value || 0),
          0
        )

        setPixValue(total)
      } catch (error) {
        setPixValue(null)
      }
    }

    requestPixValue()
  }, [skuId])

  if (!pixValue) return null

  const className =
    variant === 'pdp' ? styles.customPixPricePdp : styles.customPixPrice

  return (
    <span className={className}>
      {formatBRL(pixValue)}
      <span className={styles.label}>{label}</span>
    </span>
  )
}

CustomPixPrice.schema = {
  title: 'Preço no Pix',
  description:
    'Calcula o preço com o desconto do Pix via simulação do checkout.',
  type: 'object',
  properties: {
    label: {
      title: 'Texto após o preço',
      type: 'string',
      default: ' à vista no Pix',
    },
    variant: {
      title: 'Variante',
      description: 'Use "pdp" na página de produto; vazio usa o estilo da vitrine',
      type: 'string',
      default: '',
    },
  },
}

CustomPixPrice.defaultProps = {
  label: ' à vista no Pix',
}

export default CustomPixPrice
