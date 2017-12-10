import axios from 'axios';

export const types = {
    ADD_MENU_ITEM_NAME: 'ADD_MENU_ITEM_NAME',
    ADD_MENU_ITEM_PRICE: 'ADD_MENU_ITEM_PRICE',
    ADD_MENU_ITEM_DESCRIPTION: 'ADD_MENU_ITEM_DESCRIPTION',
    ADD_MENU_ITEM_CATEGORY: 'ADD_MENU_ITEM_CATEGORY',
    ADD_NEW_MENU_ITEM: 'ADD_NEW_MENU_ITEM',
}


export function updateItemName(value) {
    return {
        type: types.ADD_MENU_ITEM_NAME,
        payload: value
    };
}

export function updateItemPrice(value) {
    return {
        type: types.ADD_MENU_ITEM_PRICE,
        payload: value
    };
}

export function updateItemDescription(value) {
    return {
        type: types.ADD_MENU_ITEM_DESCRIPTION,
        payload: value
    };
}

export function updateItemCategory(value) {
    return {
        type: types.ADD_MENU_ITEM_CATEGORY,
        payload: value
    };
}

export function addNewMenuItem(name, price, description, category, restId) {
    return (dispatch) => {
        axios.get(`http://localhost:3000/api/Restaurants/${restId}/menus`)
            .then(results => results.data.id)
            .then(res => {
                axios.post(`http://localhost:3000/api/Menus/${res}/menuItems`, {name, price, description, category})
                .then(response => {
                    alert('Item Added');
                    dispatch({
                        type: types.ADD_NEW_MENU_ITEM,
                        payload: response.data
                    })
                })
                .catch(error => console.log(error))
            })
            .catch(err => console.log(err))
    };              
}







