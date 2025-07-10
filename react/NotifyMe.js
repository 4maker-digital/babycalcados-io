import React, { useState, useEffect, useLayoutEffect } from "react"
import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext'
import styled from 'styled-components'

const ContainerButton = styled.a`
    text-decoration: none;
`

function NotifyMe({ children }) {
  const productSummary = useProductSummary()

  const {
    selectedItem
  } = productSummary
  return (
    <ContainerButton href="javascript:void(0)" className="notifyMe" onClick={e => { e.stopPropagation() }}>{children}</ContainerButton>
  )
}

export default NotifyMe