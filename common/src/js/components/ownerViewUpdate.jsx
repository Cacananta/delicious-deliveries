import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setActiveRestaurant } from '../actions/ownerViewUpdateActions';
import { pickRestaurant } from '../actions/updateRestaurantDetailsAction';
import NavBar from '../index/navBarIndex';

export default class ownerViewUpdate extends Component {
  constructor(props) {
    super(props);
    //bind functions here
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.addMenuItem = this.addMenuItem.bind(this);
  }

  selectRestaurant(e) {
    const { dispatch, ownerRestaurants } = this.props;
    const index = ownerRestaurants.map(restaurant => restaurant.id).indexOf(e.target.id);
    dispatch(pickRestaurant(ownerRestaurants[index]));
  }

  addMenuItem(e) {
    const { dispatch } = this.props;
    let restaurantId = e.target.id
    dispatch(setActiveRestaurant(restaurantId))
  }

  render() {
    const { ownerRestaurants, activeOwner, activeCustomer, shoppingCart } = this.props;
    if (activeOwner == true) {
      return (
        <div>
          {/* HEADER */}
          <NavBar/>
          {/* MAIN AREA */}
          <section>
            <div className="jumbotron jumbotron-fluid mb-0">
              <div className="container text-center">
                <h1 className="display-3">View/Update Restaurants</h1>
              </div>
            </div>
            <div className="container-fluid shortbg">
              <div className="row mb-5 justify-content-center">
                {!!ownerRestaurants && ownerRestaurants.map(restaurant =>
                  <div key={restaurant.id} className="card my-2 mx-2 col-5 mt-5">
                    <div className="card-body">
                      <div className="row align-items-center">
                        {/* IMAGE */}
                        <div className="col-lg-4 float-left">
                        { restaurant.image == '' ?
                          <img className="text-center img-fluid mx-auto" src='http://sulaindianrestaurant.com/wp-content/uploads/2013/07/menu-placeholder.gif' alt={restaurant.name} /> :
                          <img className="text-center img-fluid mx-auto" src={restaurant.image} alt={restaurant.name} />
                        }
                        </div>
                        {/* RESTAURANT INFORMATION */}
                        <div className="col-lg-8 float-right px-0">
                          <div className="align-self-center">
                            <h5 className="pb-4 mb-0">{restaurant.name}</h5>
                          </div>
                          <div>
                            <h6 className="pb-4 mb-0">{restaurant.address1} {restaurant.city}, {restaurant.state} {restaurant.zip}</h6>
                          </div>
                          <div className="align-items-center">
                          <Link to={ `/owner/${restaurant.ownerId}/updaterestaurant/${restaurant.id}` }>
                            <button id={restaurant.id} className="btn btn-primary mx-2" type="button" onClick={ this.selectRestaurant }>
                              Update Details
                            </button>
                          </Link>
                          <Link to={`/owner/${restaurant.ownerId}/restaurant/${restaurant.id}/addMenuItem`}>
                            <button id={restaurant.id} className="btn btn-primary mx-2" type="button" onClick={this.addMenuItem}>Add Menu Item</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* FOOTER */ }
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom justify-content-center mt-5">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link font-weight-bold text-dark" href="#/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold text-dark" href="#/contact">Contact Us</a>
          </li>
        </ul>
      </nav>

        </div >
      )
    } else {






      return (
        <div>
          <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
            <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
            <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link font-weight-bold text-muted" href="#/">Delicious Deliveries</a>
                <a href="#/shoppingcart"><img src="../cart.png"/>({shoppingCart.length})</a>
              </div>
            </div>
          </nav>
          <div>
            Come back after you login!
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
}