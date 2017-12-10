import React from 'react';
import { Link } from 'react-router-dom';
import { chooseRestaurant, getMenuItems } from '../actions/restaurantDetailsActions';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.selectRestaurant = this.selectRestaurant.bind(this);
  }

  selectRestaurant(e){
    const { dispatch, restaurants } = this.props;
    const index = restaurants.map(restaurant => restaurant.id).indexOf(e.target.id);
    console.log(restaurants[index].id);
    dispatch(chooseRestaurant(restaurants[index]));
    dispatch(getMenuItems(restaurants[index].id))
  }


  render() {
    const { restaurants, activeOwner, activeCustomer } = this.props;
    console.log(restaurants);
    return (
      <div>
        {/* TOP NAV BAR */}
        <section>
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
        </section>
        <section className='my-5'>
          <div className="container">
            <div className="jumbotron text-center pt-5">
              <h1>Search Results</h1>
            </div>
            <div className="row justify-content-lg-center">
            {!!restaurants && restaurants.map(restaurant =>
              <div key={restaurant.id} className="card my-2 mx-2 col-5 bg-light">
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
                        <Link to={'/restaurant/' + restaurant.id}>
                          <button id={restaurant.id} className="btn btn-primary" type="button" onClick={ this.selectRestaurant }>
                            See Menu
                          </button>
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
        {/* FOOTER:  */}
        <section>
          <ul className="nav justify-content-center fixed-bottom">
            <li className="nav-item">
              <a className="nav-link font-weight-bold text-dark bg-light" href="#/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold text-dark bg-light" href="#/contact">Contact Us</a>
            </li>
          </ul>
        </section>
      </div >
    )
  }
}
