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
      <div>
         <NavBar/>
         <div className="jumbotron jumbotron-fluid mb-0">
          <div className="container text-center">
            <h1 className="display-3">Shopping Cart</h1>
          </div>
        </div>
        <div className="container-fluid shortbg">
          <div className='row mb-5'>
            <div className="col-12 mb-5">
            <div className="card mt-5">
              <div className="card-header">
                <div className="row">
                  <div className='col-4 text-center'>
                    <strong>Items:</strong>
                  </div>
                  <div className='col-4 text-center'>
                    <strong>Quantity:</strong>
                  </div>
                  <div className='col-4 text-center'>
                    <strong>Totals:</strong>
                  </div>
                </div>
              </div>
              {shoppingCart.map((cartItem, index) =>
              <div key={ index } className='row'>
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
                <div className='row'>
                  <div className='col-4 text-center'>
                    <a className='btn btn-primary' href='#/restaurant/a' role='button'>Back to Menu</a>
                  </div>
                  <div className='col-4 text-center'>
                    <a className='btn btn-primary' href={ checkoutHref } role='button'>Checkout</a>
                  </div>
                  <div className='col-4 text-center'>
                    <span>Final Total: $<strong>{ total.toFixed(2) }</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg opacity fixed-bottom justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold text-dark" href="#/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold text-dark" href="#/contact">Contact Us</a>
            </li>
          </ul>
        </nav> 
      </div>
    )
  }
}
