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

export function addNewMenuItem(name, price, description, category) {
    console.log(name, price, description, category);
    return {
        type: types.ADD_NEW_MENU_ITEM,
        payload: axios.post('http://localhost:3000/api/', {name, price, description, category})
                    .then(results => results.data)
                    .catch(err => console.log(err))
    };              
}







