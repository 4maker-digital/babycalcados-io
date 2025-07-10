// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Image } from 'vtex.store-image'

export default function searchHead({banner}) {

    return (
        <div className={`searchHead ${banner && "removeTitle"}`}>
            {banner && <Image src={banner} />}
        </div>
    )
}

searchHead.schema = {
    type: 'object',
    title: 'Imagem Desktop',
    description: 'Imagem Desktop',
    properties: {
        banner: {
            title: 'Banner Desktop',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
            default: '',
        }
    }
};