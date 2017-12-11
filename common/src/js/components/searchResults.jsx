import React from 'react';
import { Link } from 'react-router-dom';
import { chooseRestaurant, getMenuItems } from '../actions/restaurantDetailsActions';
import NavBar from '../index/navBarIndex';

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
    const { restaurants, activeOwner, activeCustomer, shoppingCart } = this.props;
    console.log(restaurants);
    return (
      <div>
        {/* TOP NAV BAR */}
        <section>
        <NavBar/>
        </section>
        <section>
          <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container text-center">
              <h1 className="display-3">Search Results</h1>
            </div>
          </div>
          <div className="container-fluid shortbg">
            <div className="row mb-5 justify-content-center">
            {!!restaurants && restaurants.map(restaurant =>
              <div key={restaurant.id} className="card my-2 mx-2 col-5">
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
          <nav className="navbar navbar-expand-lg opacity fixed-bottom justify-content-center mt-5">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link font-weight-bold text-dark" href="#/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-dark" href="#/contact">Contact Us</a>
              </li>
            </ul>
          </nav> 
        </section>
      </div >
    )
  }
}
