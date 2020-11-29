export const addPizzaToCart = (pizzaObj, selectTypePizza, selectSizePizza) => {
    const {id, imageUrl, name, price, category, rating} = pizzaObj
    const newItem = {
        id,
        imageUrl,
        name,
        price,
        category,
        rating,
        type: selectTypePizza,
        size: selectSizePizza
    }

    return {
        type: 'ADD_PIZZA_CART',
        payload: newItem,
    }
};

export const clearCart = () => ({
    type: 'CLEAR_CART',
});         

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
});            

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
});            

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
});            