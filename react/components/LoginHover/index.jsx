import React, { useEffect, useRef } from 'react';
import { canUseDOM } from 'vtex.render-runtime';
import './style.css'

const LoginHover = () => {
  
  useEffect(() => {
    // const button = document.querySelector('.vtex-login-2-x-container .vtex-button');
    // const contentBox = document.querySelector('.vtex-login-2-x-box');

    // if (button) {
    //   const handleMouseEnter = () => {
    //     button.click();
    //   };

    //   const handleMouseLeave = () => {
    //     contentBox.click();
    //   };

    //   button.addEventListener('mouseenter', handleMouseEnter);
    //   button.addEventListener('mouseleave', handleMouseLeave);

    //   return () => {
    //     button.removeEventListener('mouseenter', handleMouseEnter);
    //     button.removeEventListener('mouseleave', handleMouseLeave);
    //   };
    // }

    if (!canUseDOM) return

    
    // Get container reference
    const loginContainer = document.querySelector('.vtex-login-2-x-container')
    const body = document.getElementsByTagName('body')
    // hover in and out
    loginContainer?.addEventListener('mouseenter', () => {
      loginContainer.childNodes[0].childNodes[0].click()
      // loginContainer.childNodes[0].childNodes[0].style.pointerEvents = 'none'

      setTimeout(() => {
        const loginDropdown = document.querySelector('.vtex-login-2-x-box') || null
        loginDropdown?.addEventListener('mouseleave', () => {
          // setTimeout(() => {
            // loginContainer.childNodes[0].childNodes[0].click()
            body[0].click()
            // body[0].focus()
          // }, 500)
          // loginContainer.childNodes[0].childNodes[0].click()
          // loginContainer.childNodes[0].childNodes[0].style.pointerEvents = 'all'

        })
      }, 500)

      // loginContainer?.addEventListener('mouseleave', () => {
      //   loginContainer.childNodes[0].childNodes[0].click()
      // })
    })

    


  }, []);

  return null;
};

export default LoginHover;
