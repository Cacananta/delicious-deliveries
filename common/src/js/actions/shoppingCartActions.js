import Axios from 'axios';

export function Placeholder(placeholder) {
  return {
    type: 'ADD_CITY',
    payload: placeholder
  }
}
