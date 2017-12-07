import React from 'react';
import { updateShoppingCart } from '../actions/restaurantDetailsActions';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
  this.subtractQuantity = this.subtractQuantity.bind(this);
  this.addQuantity = this.addQuantity.bind(this);
  }

  subtractQuantity(e) {
    const { shoppingCart, dispatch } = this.props;
    const index = shoppingCart.map(item => item.id).indexOf(e.target.id);
    shoppingCart[index].quantity--;
    if (shoppingCart[index].quantity < 1 ) shoppingCart[index].quantity = 1;
    dispatch(updateShoppingCart(shoppingCart));
  }

  addQuantity(e) {
    const { shoppingCart, dispatch } = this.props;
    const index = shoppingCart.map(item => item.id).indexOf(e.target.id);
    shoppingCart[index].quantity++;
    if (shoppingCart[index].quantity > 5 ) shoppingCart[index].quantity = 5;
    dispatch(updateShoppingCart(shoppingCart));
  }

  render() {
    const { shoppingCart } = this.props;
    let total = 0;
    shoppingCart.forEach(item => {
      let itemTotal = (item.price * item.quantity);
      total += itemTotal;
    });
    console.log(total.toFixed(2));
    console.log(9, shoppingCart);
    return(
      <div className='container'>
        <div className='mb-3'>
          <h1 className='text-center'>Shopping Cart</h1>
        </div>
        <div className='w-75 row mx-auto'>
          <div className='col-4 text-center'>
            <strong>Items</strong>
          </div>
          <div className='col-4 text-center'>
            <strong>Quantity</strong>
          </div>
          <div className='col-4 text-center'>
            <strong>Totals</strong>
          </div>
        </div>
        {shoppingCart.map((cartItem, index) =>
        <div key={ index } className='w-75 row mx-auto py-1'>
          <div className='col-4 text-center'>
            { cartItem.menuItem }
          </div>
          <div className='col-4 text-center d-flex'>
            <span id={ cartItem.id } className='mr-auto badge badge-pill badge-danger' onClick={ this.subtractQuantity }>-</span>
            { cartItem.quantity }
            <span id={ cartItem.id } className='ml-auto badge badge-pill badge-success' onClick={ this.addQuantity }>+</span>
          </div>
          <div className='col-4 text-center'>
            ${ (cartItem.price * cartItem.quantity).toFixed(2) }
          </div>
        </div>
        )}
        <hr/>
        <div className='w-75 d-flex'>
          <span className='ml-auto'>Final Total: $<strong>{ total.toFixed(2) }</strong></span>
        </div>
        <div className='w-75 d-flex'>
          <button type='button' className='btn btn-primary ml-auto'>Checkout</button>
        </div>
      </div>
    )
  }
}