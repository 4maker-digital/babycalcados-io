import React, { useState, useEffect } from "react";
import styles from "./NossasLojas.module.css";
import { haversine } from "../../utils/haversine";

const NossasLojas = (props) => {
    const { lojas, banner } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const [sortedLojas, setSortedLojas] = useState([]);
    const [userLocation, setUserLocation] = useState(null);

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    sortStoresByLocation(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Não foi possível obter sua localização. Verifique as permissões do navegador.");
                }
            );
        } else {
            alert("Geolocalização não é suportada pelo seu navegador.");
        }
    };

    const sortStoresByLocation = (latitude, longitude) => {
        if (lojas && lojas.length > 0) {
            const lojasWithDistance = lojas.map((loja) => {
                if (loja.latitude && loja.longitude) {
                    const distance = haversine(
                        latitude,
                        longitude,
                        parseFloat(loja.latitude),
                        parseFloat(loja.longitude)
                    );
                    return { ...loja, distance };
                }
                return { ...loja, distance: Infinity };
            });

            const sorted = lojasWithDistance.sort((a, b) => a.distance - b.distance);
            setSortedLojas(sorted);
        }
    };

    useEffect(() => {
        if (lojas) {
            setSortedLojas(lojas);
        }
    }, [lojas]);

    useEffect(() => {
        // Try to get location automatically on mount
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    sortStoresByLocation(latitude, longitude);
                },
                (error) => {
                    console.log("Auto-location denied or failed:", error);
                }
            );
        }
    }, [lojas]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredLojas = sortedLojas?.filter((loja) => {
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        return (
            loja.nome?.toLowerCase().includes(searchLower) ||
            loja.endereco?.toLowerCase().includes(searchLower) ||
            loja.telefone?.toLowerCase().includes(searchLower)
        );
    }) || [];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h2 className={styles.heroTitle}>BUSQUE A LOJA BABY CALÇADOS</h2>
                    <h1 className={styles.heroSubtitle}>MAIS PRÓXIMA DE VOCÊ</h1>

                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            placeholder="Busque por Cidade, Estado ou Bairro"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <button
                            className={styles.locationButton}
                            onClick={handleGetLocation}
                            title="Usar minha localização"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="2.25" stroke="#E01F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="12" cy="12" r="6.75" stroke="#E01F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 5.25V3" stroke="#E01F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.75 12H21" stroke="#E01F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 18.75V21" stroke="#E01F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.25 12H3" stroke="#E01F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <button className={styles.searchButton}>
                            BUSCAR UNIDADES
                        </button>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className={styles.separatorBar}></div>

            {/* Content Section */}
            <div className={styles.content}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 200 200" xmlSpace="preserve">
                            <path fill="#E01F26" d="M100.232 149.198c-2.8 0-5.4-1.8-7.2-5.2-22.2-41-22.4-41.4-22.4-41.6-3.2-5.1-4.9-11.3-4.9-17.6 0-19.1 15.5-34.6 34.6-34.6s34.6 15.5 34.6 34.6c0 6.5-1.8 12.8-5.2 18.2 0 0-1.2 2.4-22.2 41-1.9 3.4-4.4 5.2-7.3 5.2zm.1-95c-16.9 0-30.6 13.7-30.6 30.6 0 5.6 1.5 11.1 4.5 15.9.6 1.3 16.4 30.4 22.4 41.5 2.1 3.9 5.2 3.9 7.4 0 7.5-13.8 21.7-40.1 22.2-41 3.1-5 4.7-10.6 4.7-16.3-.1-17-13.8-30.7-30.6-30.7z" />
                            <path fill="#E01F26" d="M100.332 105.598c-10.6 0-19.1-8.6-19.1-19.1s8.5-19.2 19.1-19.2c10.6 0 19.1 8.6 19.1 19.1s-8.6 19.2-19.1 19.2zm0-34.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z" />
                        </svg>
                        Lojas
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {userLocation
                            ? "Listando as lojas mais próximas da sua localização"
                            : "mais próximas de você"}
                    </p>
                </div>

                <div className={styles.storesGrid}>
                    {filteredLojas.map((loja, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{loja.nome}</h3>

                            <p className={styles.cardAddress}>
                                {loja.endereco}
                            </p>

                            <div className={styles.cardInfoRow}>
                                <div className={styles.accordionHeader}>
                                    <span>Horário de funcionamento</span>
                                </div>
                                <div className={styles.accordionContent}>
                                    {loja.horarioAtendimento || "Horário não disponível"}
                                </div>
                            </div>

                            <div className={styles.cardInfoRow}>
                                <span className={styles.phoneLabel}>Telefone</span>
                                <a
                                    href={`tel:${loja.telefone?.replace(/\D/g, "")}`}
                                    className={styles.phoneValue}
                                >
                                    {loja.telefone}
                                </a>
                            </div>

                            {loja.latitude && loja.longitude && (
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${loja.latitude},${loja.longitude}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.routeButton}
                                >
                                    Gerar rota até esta loja
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {filteredLojas.length === 0 && (
                    <p style={{ textAlign: "center", padding: "40px", color: "#666" }}>
                        Nenhuma loja encontrada.
                    </p>
                )}
            </div>
        </div>
    );
};

NossasLojas.schema = {
    title: "Nossas Lojas",
    type: "object",
    properties: {
        lojas: {
            type: "array",
            title: "Lojas",
            items: {
                type: "object",
                properties: {
                    nome: {
                        type: "string",
                        title: "Nome"
                    },
                    endereco: {
                        type: "string",
                        title: "Endereço",
                        description: "Endereço completo da loja",
                        widget: {
                            "ui:widget": "textarea"
                        }
                    },
                    telefone: {
                        type: "string",
                        description: "Formato: +55 (00) 00000-0000",
                        title: "Telefone"
                    },
                    horarioAtendimento: {
                        type: "string",
                        description: "Horário de atendimento da loja, exemplo: Segunda a Sexta: 08:00 - 18:00",
                        title: "Horário de Atendimento",
                        widget: {
                            "ui:widget": "textarea"
                        }
                    },
                    latitude: {
                        type: "string",
                        description: "Latitude da loja, exemplo: -22.8123456 (Ajuda: https://www.latlong.net/)",
                        title: "Latitude"
                    },
                    longitude: {
                        type: "string",
                        description: "Longitude da loja, exemplo: -43.1234567 (Ajuda: https://www.latlong.net/)",
                        title: "Longitude"
                    }
                }
            }
        },
        banner: {
            type: "string",
            title: "Banner",
            description: "Banner que será exibido acima da lista de lojas",
            default: "",
            widget: {
                'ui:widget': 'image-uploader',
            }
        }
    }
};

export default NossasLojas;
