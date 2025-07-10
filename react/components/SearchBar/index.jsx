import {
    useState,
    useEffect,
    useRef
} from 'react'
import { useDevice } from 'vtex.device-detector'
import {
    SearchBarWrapper,
    SearchBarContainer,
    SearchBarOpenButton,
    SearchBarCloseButton
} from './styles'
import styles from "./styles.css"

export default function SearchBar(props) {
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const { isMobile } = useDevice()
    const searchRef = useRef()

    useEffect(() => {
        const menu = document.querySelector('.vtex-flex-layout-0-x-flexRow--header-utils')
        const button = document.querySelectorAll('.vtex-flex-layout-0-x-flexRowContent--buy-button button')
        if (button.length) {
            button.forEach((item) => {
                item.addEventListener('click', function (event) {
                    document.querySelector(".vtex-minicart-2-x-minicartContainer button").click()
                })
            })
        }
        if (!document.querySelector("head style#newsletter")) {
            document.querySelector("head").insertAdjacentHTML("beforeend", `
                <style id='newsletter'>
                    .vtex-search-result-3-x-totalProducts--layout > span {
                        border-bottom: 3px solid #000;
                        display: flex;
                        white-space: nowrap;
                        align-items: center;
                        gap: 3px;
                        font-size: 14px;
                        line-height: 16px;
                        padding-bottom: 6px;
                    }
                    @media (max-width: 767px) {
                        .vtex-search-result-3-x-totalProducts--layout > span {
                            border-bottom: 0;
                            padding-bottom: 3px;
                        }
                        .vtex-search-result-3-x-totalProducts--layout span span {
                            border-bottom: 0;
                            padding-bottom: 0px;
                        }
                    }

                    body {
                        overflow-x: hidden;
                    }
                    iframe[title='Botão para abrir a janela de mensagens'],
                    iframe[title='Button to launch messaging window'] {
                        top: calc(50% + 119px);
                        right: 0 !important;
                        transform: translateY(-50%);
                        bottom: unset !important;
                        left: unset;
                        z-index: 20 !important;
                    }
                    iframe[title='Mensagem da empresa'] {
                        display: none;
                    }
                    div > div[role='presentation'] > div {
                        right: 64px !important;
                        bottom: 0 !important;
                    }
                    .vtex-search-result-3-x-accordionFilterContainer.vtex-search-result-3-x-accordionFilterContainer--horizontal.vtex-search-result-3-x-accordionFilterContainer--category-4.vtex-search-result-3-x-accordionFilterContainer--horizontal--category-4.pl7 {
                        display: none;
                      }
                    /*.vtex-search-result-3-x-filters--layout .vtex-search-result-3-x-filter__container--category-4 .vtex-search-result-3-x-filterTitle span {
                        font-size: 0;
                    }
                    .vtex-search-result-3-x-filters--layout .vtex-search-result-3-x-filter__container--category-4 .vtex-search-result-3-x-filterTitle span::before {
                        content: "Categoria";
                        font-size: 13px;
                    }*/
                    .vtex-search-1-x-searchBanner--top-banner {
                        overflow: hidden;
                    }
                    .vtex-search-1-x-searchBanner--top-banner img {
                        width: 100%;
                        height: 100%;
                        max-height: 350px;
                        object-fit: cover;
                        object-position: center;
                    }
                </style>`)
        }
        if (open) {
            const input = document.querySelector('.vtex-store-components-3-x-searchBarContainer .vtex-styleguide-9-x-input')

            menu?.setAttribute('style', 'display: none')
            searchRef?.current?.parentNode?.setAttribute('style', 'width: calc(100% - 160px)')
            searchRef?.current?.parentNode?.parentNode?.parentNode?.setAttribute('style', 'max-width: 100%')
            if (input) {
                setTimeout(() => {
                    input.focus()
                }, 500)
            }
        } else {
            menu?.removeAttribute('style')
            searchRef?.current?.parentNode?.setAttribute('style', 'width: auto')
            searchRef?.current?.parentNode?.parentNode?.parentNode?.setAttribute('style', 'max-width: 216px')
        }
    }, [open])

    setTimeout(() => {
        setVisible(true)
    }, 500)

    if (!visible) return null
    return (
        <SearchBarContainer ref={searchRef}>
            {open ? (
                <SearchBarWrapper open={open} className='search-bar' >
                    <div className={`${styles.wrapperSearchBar}`}>
                    {props.children[0]}
                    <SearchBarCloseButton onClick={() => setOpen(false)} className='close-search-bar' />
                    </div>
                </SearchBarWrapper>
            ) : (
                <SearchBarOpenButton onClick={() => setOpen(true)}></SearchBarOpenButton>
            )}
            {open && isMobile && <div onClick={() => setOpen(false)} className={`${styles.overlaySearchBar}`}></div>}
        </SearchBarContainer>
    )
}
