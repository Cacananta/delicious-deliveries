import React from 'react';
// import {} from '../actions/shoppingCartActions';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
  this.subtractQuantity = this.subtractQuantity.bind(this);
  this.addQuantity = this.addQuantity.bind(this);
  }

  subtractQuantity() {
    console.log('minus');
  }

  addQuantity() {
    console.log('plus');
  }

  render() {
    const { shoppingCart } = this.props;
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
        {shoppingCart.map(cartItem =>
        <div className='w-75 row mx-auto py-1'>
          <div className='col-4 text-center'>
            { cartItem.menuItem }
          </div>
          <div className='col-4 text-center d-flex'>
            <span className='mr-auto badge badge-pill badge-danger' onClick={ this.subtractQuantity }>-</span>
            { cartItem.quantity }
            <span className='ml-auto badge badge-pill badge-success' onClick={ this.addQuantity }>+</span>
          </div>
          <div className='col-4 text-center'>
            { Math.round((cartItem.price * cartItem.quantity) * 100) / 100 }
          </div>
        </div>
        )}
      </div>
    )
  }
}