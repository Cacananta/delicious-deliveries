import React, { Component } from 'react';
import axios from 'axios';

import { getOwnerRestaurants } from '../actions/updateRestaurantDetailsAction';

export default class ownerViewUpdate extends Component {
  constructor(props) {
    super(props);
    //bind functions here

  }


  render() {
    const { ownerRestaurants, activeOwner, activeCustomer } = this.props;
    if (activeOwner == true) {
      return (
        <div>
          {/* HEADER */}
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
            <p className="order-1 font-weight-bold text-dark">Welcome</p>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
              </div>
            </div>
          </nav>

          {/* MAIN AREA */}
          <section>
            <div className="jumbotron jumbotron-fluid addRest">
              <div className="container text-center">
                <h1 className="display-3">View/Update</h1>
              </div>
            </div>
            <div className="row justify-content-lg-center">
              {!!ownerRestaurants && ownerRestaurants.map(restaurant =>
                <div key={restaurant.id} className="card my-2 mx-2 col-5 bg-light">
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* IMAGE */}
                      <div className="col-lg-4 float-left">
                        <img className="text-center img-fluid mx-auto" src={restaurant.image} alt={restaurant.name} />
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
                          <button id={restaurant.id} className="btn btn-primary" type="button">Update Details</button>
                          <button id={restaurant.id} className="btn btn-primary" type="button">Add Menu Item</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                <a className="nav-item nav-link font-weight-bold text-muted" href="/">Delicious Deliveries</a>
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