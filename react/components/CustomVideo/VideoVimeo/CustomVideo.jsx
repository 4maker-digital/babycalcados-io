import React, {useEffect} from "react";
import styles from './style.css';
import { useDevice } from 'vtex.device-detector'

const CustomVideo = (props) => {
    
    const { isMobile } = useDevice()

    let active = false;
    let idv = 'https://player.vimeo.com/video/915230981?autoplay=1&loop=1&autopause=0&muted=1&background=1';
    let height = '56.25';
    let redirection = "/#";

    const { desktop, mobile, altura, ativo } = props;

    if (props.ativo !== undefined) {
        active = props.ativo
    }

    if (props.altura !== undefined) {
        height = props.altura
    }

    if (props.redirection !== undefined) {
        redirection = props.redirection
    }

    return (
        <div onClick={() => {console.log('clicou')}}>
            {active && (
                    <div className={styles.ctaVimeo} 
                        style={{ 
                            // paddingBottom: height + "%",
                            zIndex: '0',
                            height: 'fit-content',
                        }}
                    >
                            <iframe 
                                    id="new_video"
                                    width="100%" 
                                    src={isMobile ? mobile: desktop }
                                    frameborder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    allowFullScreen>
                            </iframe>
                            <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            cursor: 'pointer'
        }}
        onClick={() => {
            console.log('clicou');
            window.location.href = redirection;
        }}
    ></div>
                </div>
            )}
        </div>
    );
}

export default CustomVideo;


CustomVideo.getSchema = () => {
    return {
        title: "Novo Video Vimeo",
        type: "object",
        properties: {
            desktop: {
                title: 'Desktop',
                type: 'string',
                default: 'https://player.vimeo.com/video/1047144055?controls=0&autoplay=1&loop=1&autopause=0&muted=1&background=1',
                description: 'Link video Desktop'
            },

            mobile: {
                title: 'Mobile',
                type: 'string',
                default: 'https://player.vimeo.com/video/1047144055?controls=0&autoplay=1&loop=1&autopause=0&muted=1&background=1',
                description: 'Link do video Mobile'
            },

            altura: {
                title: 'Altura',
                type: 'string',
                default: '56.25',
                description: 'porcentagem'
            },
            ativo: {
                title: 'Ativar',
                type: 'boolean',
                default: true
            },
            redirection: {
                title: 'Link',
                type: 'string',
                default: '/#',
                description: 'padrão de url do vimeo'
            }
        }
    };
};
