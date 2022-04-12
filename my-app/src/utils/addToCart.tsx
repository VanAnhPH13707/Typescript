var cart: any[] = []
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart') as string)
}

export const addToCart = (Products:any, next:any) => {
    const exitsProduct = cart.find(item => item._id === Products._id);
    if(!exitsProduct){
        cart.push(Products);
    } else {
        exitsProduct.quantity +=  +Products.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}