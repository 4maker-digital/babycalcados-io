// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Image } from 'vtex.store-image'

export default function searchHeadTablet({bannerTablet}) {

    return (
        <div className={`searchHead vtex-flex-layout-0-x-searchHead-tablet ${ bannerTablet && "removeTitle"}`}>
            {bannerTablet && <Image src={bannerTablet} />}
        </div>
    )
}

searchHeadTablet.schema = {
    type: 'object',
    title: 'Imagem Tablet',
    description: 'Imagem Tablet',
    properties: {
        bannerTablet: {
            title: 'Banner Tablet',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader',
            },
            default: '',
        }
    }
};