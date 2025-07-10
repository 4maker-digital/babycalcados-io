const HandleAddToCartObject = (productId, productName) => {
    let cart = [
        {   
            id : String(productId),
            name : productName,
            quantity: 1,
            seller: "1",
        }
    ]

    console.log(cart)    
    return cart

}


export default HandleAddToCartObject;