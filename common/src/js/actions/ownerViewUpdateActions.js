
export const setActiveRestaurant = restaurantId => {
    return (dispatch) => {
            dispatch({
                type: 'SET_ACTIVE_RESTAURANT',
                payload: restaurantId
            })
    }
}