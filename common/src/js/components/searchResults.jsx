import React from 'react';
import { restaurantDetails } from '../actions/searchResultsActions';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    //bind functions here
    this.selectOnClick = this.selectOnClick.bind(this);
  }

  selectOnClick() {

  }


  render() {
    const { dispatch, restaurants, location } = this.props;
    return (
      <div>
        {/* TOP NAV BAR */}
        <section>
          <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
              <a className='navbar-brand order-1 font-weight-bold' href="#">Login</a>
              <a className="navbar-brand order-2 font-weight-bold" href='#'>Sign-Up</a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section>

          <div className="container">
            <div className="jumbotron text-center">
              <h1>Search Results</h1>
            </div>
            {restaurants && restaurants.map((restaurant) => {
              <span key={restaurant.id} className="border">
                <div key='#' className="card my-2 col-12 ">
                  <div className="card-body">
                    <div className="row align-items-center">
                      {/* IMAGE */}
                      <div className="col-lg-3 float-left">
                        <img className="text-center img-fluid rounded mx-auto p-3" src="http://gobluetours.com/wp-content/uploads/2012/10/la-parrilla-cancun-restaurant-2.jpg" alt="Mexican Joint" />
                      </div>
                      {/* RESTAURANT INFORMATION */}
                      <div className="col-lg-9 float-right">
                        <div className="align-self-center">
                          <h2 className="pb-4 mb-0">{restaurant.name}</h2>
                        </div>
                        <div>
                          {/* <h6 className="pb-4 mb-0">Established in 1994, Esmeralda's is famous for their bottomless Margaritas and Tijuana style street tacos.
                        They can be found in the heart of San Diego's Gaslamp district.</h6> */}
                        </div>
                        <div>
                          <h6 className="pb-4 mb-0">{restaurant.address1} {restaurant.city}, {restaurant.state} {restaurant.zip}</h6>
                        </div>
                        <div className="align-items-center">
                          <button id={restaurant.id} className="btn btn-primary" type="button" onClick={this.selectOnClick}>See Menu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            })
            }
          </div>
        </section>
        {/* FOOTER:  */}
        <section>
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-item">About Us</a>
                </li>
                <li className="nav-item float-right">
                  <a href="#" className="nav-item">Contact us</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div >
    )
  }
}