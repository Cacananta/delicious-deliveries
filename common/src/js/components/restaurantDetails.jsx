import React from 'react';
import { addShoppingCart, updateShoppingCart } from '../actions/restaurantDetailsActions';

export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
this.addCart = this.addCart.bind(this);
  }

  addCart(e){
    const { dispatch, shoppingCart, menuItems } = this.props;
    let cart = shoppingCart.slice();
    const cartIndex = cart.map(item => item.id).indexOf(e.target.id);
      if(cartIndex === -1){
        const index = menuItems.map(item => item.id).indexOf(e.target.id);
        const cartItem = {
          quantity: 1,
          menuItem: menuItems[index].name,
          price: menuItems[index].price,
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
    const { activeOwner, activeCustomer, menuItems, chosenRestaurant } = this.props;
    console.log(4, menuItems);
    console.log(69, chosenRestaurant);
    const breakfastList = menuItems.filter(item => item.category === 'Breakfast');
    const lunchList = menuItems.filter(item => item.category === 'Lunch');
    const dinnerList = menuItems.filter(item => item.category === 'Dinner');
    const snackList = menuItems.filter(item => item.category === 'Snack');
    const drinkList = menuItems.filter(item => item.category === 'Drink');
    return(
      <div>
        <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
            <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
            <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link font-weight-bold text-muted" href="#/">Delicious Deliveries</a>
                    <a href="#/shoppingcart"><img src="../cart.png"/>()</a>
                </div>
            </div>
        </nav>
        <div className="jumbotron jumbotron-fluid mb-0">
          <div className="container text-center">
            <h1 className="display-3">Restuarant Details</h1>
          </div>
        </div>
        <div className="container-fluid shortbg">
            <h1 className='text-center'>{ chosenRestaurant.name }</h1>
            <div className='row mb-2'>
              <div className='col-6'>
              { chosenRestaurant.image == '' ?
                <img src='http://sulaindianrestaurant.com/wp-content/uploads/2013/07/menu-placeholder.gif' className="img-fluid rounded" alt="Responsive image" />:
                <img src={ chosenRestaurant.image } className="img-fluid rounded" alt="Responsive image" />
              }
              </div>
              <div className='text-center col-6'>
                <p>{ chosenRestaurant.address1 }</p>
                <p>
                  { chosenRestaurant.city + ', ' + chosenRestaurant.state + ' ' + chosenRestaurant.zip }
                </p>
                <p>{ chosenRestaurant.phone_number }</p>
                <p>{ chosenRestaurant.food_type }</p>
                <a className='btn btn-primary mx-2' href='#/searchresults' role='button'>Go Back</a>
                <a className='btn btn-primary mx-2' href='#/shoppingcart' role='button'>Shopping Cart</a>
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
      </div>
    )
  }
}