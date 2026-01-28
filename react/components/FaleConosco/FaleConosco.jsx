import React from 'react';
import styles from './FaleConosco.module.css';

const Icon = ({ name }) => {
    switch (name) {
        case 'faq':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            );
        case 'whatsapp':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            );
        case 'phone':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            );
        case 'chat':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            );
        case 'box':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            );
        case 'refresh':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
            );
        case 'map':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            );
        case 'list':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
            );
        default:
            return null;
    }
};

const FaleConosco = (props) => {
    const { title, cards } = props;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title || "Fale Conosco"}</h1>

            <div className={styles.grid}>
                {cards?.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            {card.title}
                        </div>
                        <div className={styles.cardBody}>
                            {card.items?.map((item, i) => (
                                <div key={i} className={styles.item}>
                                    <div className={styles.icon}>
                                        <Icon name={item.icon} />
                                    </div>
                                    <div className={styles.itemContent}>
                                        {item.link ? (
                                            <a href={item.link} className={styles.link}>
                                                {item.text}
                                            </a>
                                        ) : (
                                            <span className={styles.text}>{item.text}</span>
                                        )}
                                        {item.subText && (
                                            <span className={styles.subText}>{item.subText}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

FaleConosco.defaultProps = {
    title: "Fale Conosco",
    cards: [
        {
            title: "Cartão Baby Calçados",
            items: [
                { icon: "faq", text: "FAQ", link: "#" },
                { icon: "whatsapp", text: "Whatsapp", subText: "11 4020-9766" },
                { icon: "phone", text: "Capitais e regiões metropolitanas", subText: "4020-9766 - Opção 1" },
                { icon: "phone", text: "Demais localidades", subText: "0800-60-86772" },
                { icon: "chat", text: "Chat", link: "#" }
            ]
        },
        {
            title: "Loja Virtual",
            items: [
                { icon: "list", text: "Acompanhar meu pedidos", link: "#" },
                { icon: "refresh", text: "Solicitar troca e devolução", link: "#" },
                { icon: "chat", text: "Chat", link: "#" },
                { icon: "whatsapp", text: "Whatsapp", subText: "11 4020-9766 - opção 2" },
                { icon: "phone", text: "(11) 4020-9766 - Opção 2", subText: "Seg a Sexta das 8h às 17h. Exceto feriados." }
            ]
        },
        {
            title: "Loja Física",
            items: [
                { icon: "map", text: "Loja mais próxima", link: "/nossas-lojas" },
                { icon: "chat", text: "Chat", link: "#" },
                { icon: "phone", text: "Capitais e regiões metropolitanas", subText: "4020-9766 - Opção 3" },
                { icon: "phone", text: "Demais localidades", subText: "0800-60-86772" }
            ]
        }
    ]
};

FaleConosco.schema = {
    title: "Fale Conosco",
    type: "object",
    properties: {
        title: {
            type: "string",
            title: "Título da Página"
        },
        cards: {
            type: "array",
            title: "Cartões",
            items: {
                type: "object",
                title: "Cartão",
                properties: {
                    title: {
                        type: "string",
                        title: "Título do Cartão"
                    },
                    items: {
                        type: "array",
                        title: "Itens",
                        items: {
                            type: "object",
                            title: "Item",
                            properties: {
                                icon: {
                                    type: "string",
                                    title: "Ícone",
                                    enum: ["faq", "whatsapp", "phone", "chat", "box", "refresh", "map", "list"],
                                    enumNames: ["FAQ", "Whatsapp", "Telefone", "Chat", "Caixa", "Troca", "Mapa", "Lista"]
                                },
                                text: {
                                    type: "string",
                                    title: "Texto Principal"
                                },
                                subText: {
                                    type: "string",
                                    title: "Texto Secundário"
                                },
                                link: {
                                    type: "string",
                                    title: "Link (opcional)"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default FaleConosco;