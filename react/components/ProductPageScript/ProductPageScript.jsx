import React, { useEffect } from 'react';

const ProductPageScript = () => {
    useEffect(() => {
        const addClassToChildrenRecursively = (className) => {
            const elements = document.getElementsByClassName(className);
            
            for (const element of elements) {
                for (const child of element.children) {
                    addClassRecursively(child);
                }
            }
        };

        const addClassRecursively = (element) => {
            if (element) {
                element.classList.add('ga4_add_to_cart');
                for (const child of element.children) {
                    addClassRecursively(child);
                }
            }
        };

        addClassToChildrenRecursively('vtex-flex-layout-0-x-flexColChild--productDesk-content-col-buyBox');
        // addClassToChildrenRecursively('vtex-flex-layout-0-x-flexRowContent--addMobile');
    
        if (window.innerWidth <= 769) {
            const elements3 = document.getElementsByClassName("vtex-flex-layout-0-x-flexRowContent--addMobile")[0].children[1]
            for (const child of elements3.children) {
                addClassRecursively(child);
            }
        }    
    }, []);

    return <></>;
};

export default ProductPageScript;
