<<<<<<< Updated upstream
export const types = {
    UPDATE_SEARCH_LOCATION: 'UPDATE_SEARCH_LOCATION'
   };
=======
import axios from 'axios';

export const types = {
    UPDATE_SEARCH_LOCATION: 'UPDATE_SEARCH_LOCATION'
   };

>>>>>>> Stashed changes
   export function updateSearchLocation(input){
    return {
     type: types.UPDATE_SEARCH_LOCATION,
     payload: {
      location: input
     }
    }
   }