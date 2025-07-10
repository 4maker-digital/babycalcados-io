// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Image } from 'vtex.store-image'

export default function searchHeadMobile({bannerM}) {

    return (
        <div className={`searchHead vtex-flex-layout-0-x-searchHead-mobile ${ bannerM && "removeTitle"}`}>
            {bannerM && <Image src={bannerM} />}
        </div>
    )
}

searchHeadMobile.schema = {
    type: 'object',
    title: 'Imagem Mobile',
    description: 'Imagem Mobile',
    properties: {
        bannerM: {
            title: 'Banner Mobile',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
            default: '',
        }
    }
};