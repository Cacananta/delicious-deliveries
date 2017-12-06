import axios from 'axios';

export const types = {
    UPDATE_SEARCH_LOCATION: 'UPDATE_SEARCH_LOCATION'
   };

   export function updateSearchLocation(input){
    return {
     type: types.UPDATE_SEARCH_LOCATION,
     payload: {
      location: input
     }
    }
   }