export function addShoppingCart(food) {
  return {
    type: 'ADD_SHOPPING_CART',
    payload: food
  }
}

export function updateShoppingCart(quantity) {
  return {
    type: 'UPDATE_SHOPPING_CART',
    payload: quantity
  }
}