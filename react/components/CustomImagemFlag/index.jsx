import React from "react";
import { useProduct } from "vtex.product-context";
import "./styles.css"
export default function CustomImagemFlag() {
    const product = useProduct();
    
    // Verifica se o produto possui propriedades
    const properties = product?.product?.properties;

    // Função para verificar se existe a propriedade "Tecnologia"
    const findTecnologia = () => {
        if (!properties) return null;

        // Encontra a propriedade com o nome "Tecnologia"
        const tecnologiaProperty = properties.find(
            (prop) => prop.name === "Tecnologia"
        );

        // Se encontrar, retorna o valor
        return tecnologiaProperty ? tecnologiaProperty.values[0] : null;
    };

    // Armazena o valor encontrado
    const tecnologiaValue = findTecnologia();

    // Função para retornar as imagens com base no valor de tecnologia
    const getImages = (value) => {
        switch (value) {
            case "Amortech":
                return ["/arquivos/tech-logo-1.png"];
            case "Levitech":
                return ["/arquivos/tech-logo-7.png"];
            case "Nitro P":
                return ["/arquivos/Linha-Nitro-P .png"];
            default:
                return ["/path/to/default-image.png"];
        }
    };

    // Função para retornar a classe com base no valor de tecnologia
    const getClassName = (value) => {
        switch (value) {
            case "Amortech":
                return "tecnologia-amortech";
            case "Levitech":
                return "tecnologia-levitech";
            case "Nitro P":
                return "tecnologia-nitro-p";
            default:
                return "tecnologia-padrao";
        }
    };

    const images = tecnologiaValue ? getImages(tecnologiaValue) : [];
    const className = tecnologiaValue ? getClassName(tecnologiaValue) : "tecnologia-padrao";

    return (
        <>
            {images.length > 0 && (
                <div className={`tecnologia-bloco ${className}`}>
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Imagem de ${tecnologiaValue}`}
                          
                        />
                    ))}
                </div>
            )}
        </>
    );
}
