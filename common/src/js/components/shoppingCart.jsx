import React from 'react';
import { updateShoppingCart } from '../actions/restaurantDetailsActions';
import NavBar from '../index/navBarIndex';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
  this.subtractQuantity = this.subtractQuantity.bind(this);
  this.addQuantity = this.addQuantity.bind(this);
  this.removeItem = this.removeItem.bind(this);
  }

  removeItem(e) {
    const { shoppingCart, dispatch } = this.props;
    let cart = shoppingCart.slice();
    const index = cart.map(item => item.id).indexOf(e.target.id);
    cart.splice(index,1);
    dispatch(updateShoppingCart(cart));
  }

  subtractQuantity(e) {
    const { shoppingCart, dispatch } = this.props;
    let cart = shoppingCart.slice();
    const index = cart.map(item => item.id).indexOf(e.target.id);
    cart[index].quantity--;
    if (cart[index].quantity < 1 ) cart[index].quantity = 1;
    dispatch(updateShoppingCart(cart));
  }

  addQuantity(e) {
    const { shoppingCart, dispatch } = this.props;
    let cart = shoppingCart.slice();
    const index = cart.map(item => item.id).indexOf(e.target.id);
    cart[index].quantity++;
    if (cart[index].quantity > 10 ) cart[index].quantity = 10;
    dispatch(updateShoppingCart(cart));
  }

  render() {
    const { shoppingCart, activeOwner, activeCustomer } = this.props;
    let total = 0;
    shoppingCart.forEach(item => {
      let itemTotal = (item.price * item.quantity);
      total += itemTotal;
    });
      let checkoutHref = '#/login';
      if(activeCustomer==true) checkoutHref= '#/checkout';
    return(
      <div className='container'>
         <NavBar/>
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
            <span id={ cartItem.id } className='mr-auto badge badge-pill badge-success' onClick={ this.addQuantity }>+</span>
            { cartItem.quantity }
            <button id={ cartItem.id } className='btn btn-sm btn-danger ml-auto' onClick={ this.removeItem }>Remove</button>
          </div>
          <div className='col-4 text-center'>
            ${ (cartItem.price * cartItem.quantity).toFixed(2) }
          </div>
        </div>
        )}
        <hr/>
        <div className='w-75 row mx-auto'>
          <div className='col-4'>
          <a className='btn btn-primary' href='#/restaurant/a' role='button'>Back to Menu</a>
          </div>
          <div className='col-4'>
            <a className='btn btn-primary' href={ checkoutHref } role='button'>Checkout</a>
          </div>
          <div>
            <span className='col-4'>Final Total: $<strong>{ total.toFixed(2) }</strong></span>
          </div>
        </div>
      </div>
    )
  }
}