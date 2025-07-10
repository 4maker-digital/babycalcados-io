import React, { useEffect, useState } from 'react';
import { canUseDOM } from 'vtex.render-runtime';
import { useDevice } from 'vtex.device-detector'

import styles from './styles.css'

const HeaderMobileHandler = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { isMobile } = useDevice()
    
    useEffect(() => {
        if (!canUseDOM && !isMobile) return

        const icon = document.querySelector(".vtex-store-components-3-x-imageElement--search-icon-mobile-new")
        
        icon.addEventListener("click", () => {
            setIsOpen(!isOpen)
        })
    }, [isOpen])


    useEffect(() => {
        if (!canUseDOM && !isMobile) return

        console.log("PASSOU")
        const container = document.querySelector(".vtex-store-components-3-x-searchBarContainer")
        const blueContainer = document.querySelector(".vtex-sticky-layout-0-x-wrapper--e-header")
        
        if (isOpen) {
            container.style.display = "block"
            blueContainer.classList.add("openedSearch")

        } else {
            container.style.display = "none"
            blueContainer.classList.remove("openedSearch")
        }
        
    },[isOpen])



    return <></>
}

export default HeaderMobileHandler;
