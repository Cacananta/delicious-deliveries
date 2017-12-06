import Axios from 'axios';

export function restaurantDetails(placeholder) {
  return {
    type: 'ADD_CITY',
    payload: placeholder
  }
}
