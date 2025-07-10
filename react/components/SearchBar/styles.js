import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
`

export const SearchBarWrapper = styled.div`
    width: 100%;
    display: ${(props) => {
        if (props.open) return "flex"
        else return "none"
    }};
    border-radius: 5px;
    padding: 16px 0;
    background: #fff;
    @media (max-width: 1024px) {
        padding: 20vh 15px 0;
    }
    @media(max-width:991px){
        top: 0;
        left: 0;
        border-radius: 0;
        z-index: 999;
        padding: 25px;
        position: fixed;
        padding-right: 55px;
    }
    .vtex-search-1-x-biggy-autocomplete-wrapper {
        width: 100%;
        @media (max-width: 1024px) {
            width: 100%;
        }  
        .vtex-search-1-x-itemListTitle {
            padding: 0;
        }
        .vtex-search-1-x-biggy-autocomplete {
            max-height: calc(80vh - 140px);
            top: 81px;
            box-shadow: unset;
            background: #e5e5e5;
            opacity: 1;
            padding: 20px;
            z-index: 999;
            @media (max-width: 1024px) {
                top: 125px;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-direction: column !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important;
                padding: 30px 15px;
                right: 0;
                background: #fff;
                @media (max-width: 767px) {
                    max-height: initial !important;
                }
                .vtex-search-1-x-close-btn {
                    display: none;
                }
                .vtex-search-1-x-itemList--suggestion {
                    .vtex-search-1-x-itemListTitle {
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
                .vtex-search-1-x-tileListTitle {
                    padding: 0;
                }
            }
            &::-webkit-scrollbar {
                height: 5px;
                border-radius: 0;
                background: #606060;
            }
            &::-webkit-scrollbar-thumb {
                background: #ddd;
                border-radius: 0;
            }
            &::-webkit-scrollbar-track {
                border-radius: 0;
                background-color: #606060;
            }
            .vtex-search-1-x-itemList {
                .vtex-search-1-x-tileListTitle {
                    @media (max-width: 1024px) {
                        padding: 0;
                    }
                }
            }
            .vtex-search-1-x-tileList {
                border: 0;
                > ul {
                    flex-direction: column !important;
                    .vtex-search-1-x-tileListItem {
                        border-radius: 5px;
                        &:hover {
                            background-color: #ddd;
                        }
                        .vtex-product-summary-2-x-image {
                            width: 100px !important;
                            height: 100px !important;
                            max-width: 100px !important;
                            max-height: 100px !important;
                            object-fit: cover!important;
                            border-radius: 0;
                            object-position: center!important;
                            @media (max-width: 1024px) {
                                width: 70px !important;
                                height: 70px !important;
                                max-width: 70px !important;
                                max-height: 70px !important;
                            }
                        }
                        .vtex-product-summary-2-x-productBrand {
                            @media (max-width: 1024px) {
                                padding-left: 10px;
                            }
                        }
                        .vtex-flex-layout-0-x-flexRowContent--shelf-horizontal-main {
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            .vtex-flex-layout-0-x-flexCol--shelf-horizontal-main-2 {
                                .vtex-product-price-1-x-sellingPrice--shelf {
                                    text-align: left;
                                }
                                .vtex-flex-layout-0-x-flexRow--shelf-price {
                                    margin-top: 5px;
                                    @media (max-width: 1024px) {
                                        margin-left: 10px;
                                    }
                                    .vtex-flex-layout-0-x-flexRowContent--shelf-price {
                                        justify-content: flex-start;
                                        .vtex-flex-layout-0-x-stretchChildrenWidth {
                                            padding: 0;
                                        }
                                    }
                                }
                                .shelf {
                                    font-size: 13px;
                                    @media (max-width: 1024px) {
                                        margin-left: 10px;
                                        justify-content: flex-start;
                                    }
                                }
                            }
                        }
                    }
                }
                .vtex-search-1-x-tileListSeeMore {
                    color: #fff;
                    margin: 0 15px;
                    height: 40px;
                    background: #e79d92;
                    line-height: 40px;
                    border-radius: 10px;
                    text-decoration: none;
                    text-transform: uppercase;
                }
            }
        }
    }
`

export const SearchBarCloseButton = styled.button`
    border: 0;
    cursor: pointer;
    display: flex;
    padding: 0;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    @media(max-width:991px){
        right: -42px;
        top: calc(35% - 10px);
        transform: none;
    }
    &::before {
        content: "";
        width: 18px;
        height: 18px;
        display: block;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44' fill='none'%3E%3Cpath d='M43 1L1 43M1 1L43 43' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
            no-repeat center;
        background-size: contain;
        @media (max-width: 1024px) {
            width: 16px;
            height: 16px;
        }
    }
`

export const SearchBarOpenButton = styled.button`
    border: 0;
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    @media (max-width: 1024px) {
        padding: 0;
        font-size: 0;
        margin-right: 0;
    }
    &::after {
        content: "";
        width: 22px;
        height: 22px;
        display: block;
        background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 19L13.7241 13.7241' stroke='%23000'/%3E%3Ccircle cx='8.44828' cy='8.44828' r='7.44828' stroke='%23000' stroke-linecap='square'/%3E%3C/svg%3E%0A")
            no-repeat center;
        background-size: contain;
        @media (max-width: 1024px) {
            width: 20px;
            height: 20px;
            margin-right: 2px;
            padding-left: 0;
        }
    }
`