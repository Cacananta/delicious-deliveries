import Axios from 'axios';

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

export function chooseRestaurant(index) {
  return {
    type: 'CHOOSE_RESTAURANT',
    payload: index
  };
}

export const getMenuItems = restaurantId => {
  return (dispatch) => {
      Axios.get(`http://localhost:3000/api/Restaurants/${restaurantId}/menus`)
      .then(res => res.data.id)
      .then(result => {
        console.log(':)', result);
        Axios.get(`http://localhost:3000/api/Menus/${result}/menuItems`)
        .then(list => {
          console.log(2, list.data);
          dispatch({
            type: 'GET_MEUN_ITEMS',
            payload: list.data
          })
        })
        .catch(error => {
          console.log(error);
          alert('item error');
        })
      })
      .catch(err => {
        console.log(err);
        alert('no menu available');
        dispatch({
          type: 'GET_MEUN_ITEMS_REJECTED',
          payload: err
      })
      })
  }
}