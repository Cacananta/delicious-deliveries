import React from 'react';
import { addShoppingCart, updateShoppingCart } from '../actions/restaurantDetailsActions';
const menuList = [
  {
    category: "Lunch",
    price: 9.95,
    description: "A delicious Cantonese dish of stir-fried veggies and chicken",
    name: "Asian Burrito",
    id: "7fk48dke9eok9ekdfh0r",
    MenuId: "5a2730b89f1b16003e75eac4"
  },
  {
    category: "Dinner",
    price: 9.99,
    name: "Chicken",
    id: "5a2613199a78bd0d5630828c",
    MenuId: "5a2612c29a78bd0d5630828b"
  },
  {
    category: "Lunch",
    price: 14.95,
    description: "Delicious fajita veggies served with rice and beans",
    name: "Veggie Fajitas",
    id: "5a26dab7e546bf252a0633ee",
    MenuId: "5a26da43e546bf252a0633ed"
  },
  {
    category: "Dinner",
    price: 14.95,
    description: "A delicious Cantonese dish of stir-fried veggies and chicken",
    name: "Moo Goo Gai Pan",
    id: "5a284b3141884da62a5c27de",
    MenuId: "5a28482c700bf4a41b626eb4"
  },
  {
    category: "Breakfast",
    price: 14.95,
    description: "A combination of two American classics",
    name: "BBQ scrambled eggs",
    id: "5a284b4141884da62a5c27df",
    MenuId: "5a28482c700bf4a41b626eb4"
  },
  {
    category: "Snack",
    price: 14.95,
    description: "French fries with truffle oil",
    name: "Truffle Oil French Fries",
    id: "5a284b5541884da62a5c27e0",
    MenuId: "5a28482c700bf4a41b626eb4"
  },
  {
    category: "Snack",
    price: 14.95,
    description: "Salted cooked soybeans",
    name: "Edamame",
    id: "5a284b6741884da62a5c27e1",
    MenuId: "5a28482c700bf4a41b626eb4"
  },
  {
    category: "Lunch",
    price: 14.95,
    description: "Classic noodles and meatballs",
    name: "Spaghetti and Meatballs",
    id: "5a284b8141884da62a5c27e2",
    MenuId: "5a28482c700bf4a41b626eb4"
  },
  {
    category: "Dinner",
    price: 14.95,
    description: "Amazing chicken BBQ served in a pineapple",
    name: "Pineapple BBQ Chicken",
    id: "5a284bbe41884da62a5c27e3",
    MenuId: "5a28482c700bf4a41b626eb4"
  },
  {
    category: "Drink",
    price: 9.95,
    description: "Craft dark beer at its finest",
    name: "Dark Stout",
    id: "5a284bca41884da62a5c27e4",
    MenuId: "5a28482c700bf4a41b626eb4"
  }
];
export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
this.addCart = this.addCart.bind(this);
  }

  addCart(e){
    const { dispatch, shoppingCart } = this.props;
    let cart = shoppingCart.slice();
    const cartIndex = cart.map(item => item.id).indexOf(e.target.id);
      if(cartIndex === -1){
        const index = menuList.map(item => item.id).indexOf(e.target.id);
        const cartItem = {
          quantity: 1,
          menuItem: menuList[index].name,
          price: menuList[index].price,
          id: e.target.id
        };
        dispatch(addShoppingCart(cartItem));
    } else {
      cart[cartIndex].quantity++;
      if (cart[cartIndex].quantity > 10 ) cart[cartIndex].quantity = 10;
        dispatch(updateShoppingCart(cart));
    }
  }

  render() {
  //pull in props here
  const breakfastList = menuList.filter(item => item.category === 'Breakfast');
  const lunchList = menuList.filter(item => item.category === 'Lunch');
  const dinnerList = menuList.filter(item => item.category === 'Dinner');
  const snackList = menuList.filter(item => item.category === 'Snack');
  const drinkList = menuList.filter(item => item.category === 'Drink');
    return(
      <div className='container'>
        <h1 className='text-center'>Esmeralda's Tortilleria</h1>
        <div className='row mb-2'>
          <div className='col-6'>
            <img src="http://cdn.partyearth.com/photos/4e9d1dc9a23a99187f9e39230082010e/tortilla-republic_s345x230.jpg?1375196583" className="img-fluid rounded" alt="Responsive image" />
          </div>
          <div className='text-center col-6'>
            <p>145 Market st.</p>
            <p>San Diego, CA 92109</p>
            <p>6197530972</p>
            <p>Asian</p>
            <a className='btn btn-primary' href='#/shoppingcart' role='button'>Shopping Cart</a>
          </div>
        </div>
        { breakfastList.length > 0 ?
        <div>
          <div className='mt-2'>
            <h4>Breakfast</h4>
            <hr/>
          </div>
          <div className='row'>
          { breakfastList.map((item, index) => 
              <div className='col-6 px-2 d-flex' key={ index }>
                <span className='mr-auto pt-2'><p><strong>{ item.name }</strong></p></span>
                <div className='py-2 ml-auto'>
                  <span className='pr-5'>${item.price}</span>
                  <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                </div>
              </div>
              )}
          </div>
        </div>
        : <div />}
        { lunchList.length > 0 ?
        <div>
          <div className='mt-2'>
            <h4>Lunch</h4>
            <hr/>
          </div>
          <div className='row'>
          { lunchList.map((item, index) => 
            <div className='col-6 px-2 d-flex' key={ index }>
              <span className='mr-auto pt-2'><p><strong>{ item.name }</strong></p></span>
              <div className='py-2 ml-auto'>
                <span className='pr-5'>${item.price}</span>
                <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
              </div>
            </div>
            )}
          </div>
        </div>
        : <div />}
        { dinnerList.length > 0 ?
          <div>
            <div className='mt-2'>
              <h4>Dinner</h4>
              <hr/>
            </div>
            <div className='row'>
            { dinnerList.map((item, index) => 
              <div className='col-6 px-2 d-flex' key={ index }>
                <span className='mr-auto pt-2'><p><strong>{ item.name }</strong></p></span>
                <div className='py-2 ml-auto'>
                  <span className='pr-5'>${item.price}</span>
                  <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                </div>
              </div>
              )}
            </div>
          </div>
          : <div />}
        { snackList.length > 0 ?
          <div>
            <div className='mt-2'>
              <h4>Snacks</h4>
              <hr/>
            </div>
            <div className='row'>
            { snackList.map((item, index) => 
              <div className='col-6 px-2 d-flex' key={ index }>
                <span className='mr-auto pt-2'><p><strong>{ item.name }</strong></p></span>
                <div className='py-2 ml-auto'>
                  <span className='pr-5'>${item.price}</span>
                  <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                </div>
              </div>
              )}
            </div>
          </div>
          : <div />}
        { drinkList.length > 0 ?
          <div>
            <div className='mt-2'>
              <h4>Drink</h4>
              <hr/>
            </div>
            <div className='row'>
            { drinkList.map((item, index) => 
              <div className='col-6 px-2 d-flex' key={ index }>
                <span className='mr-auto pt-2'><p><strong>{ item.name }</strong></p></span>
                <div className='py-2 ml-auto'>
                  <span className='pr-5'>${item.price}</span>
                  <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                </div>
              </div>
              )}
            </div>
          </div>
          : <div />}
      </div>
    )
  }
}