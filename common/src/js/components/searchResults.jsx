import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    console.log('got here')
  }


  render() {
    const { restaurants, activeOwner, activeCustomer } = this.props;
    console.log(restaurants);
    return (
      <div>
        {/* TOP NAV BAR */}
        <section>
          <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
            <a className="order-1 font-weight-bold nav-link text-dark" href='#/userlogin'>User Login</a>
            <a className="order-2 font-weight-bold nav-link text-dark" href='#/ownerlogin'>Owner Login</a>
            <a className="order-3 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link font-weight-bold text-muted" href="/">Delicious Deliveries</a>
              </div>
            </div>
          </nav>
        </section>
        <section>
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
                        <Link to={'/restaurant/' + restaurant.id}><button id={restaurant.id} className="btn btn-primary" type="button">See Menu</button></Link>
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
              <a className="nav-link font-weight-bold text-dark bg-light" href="#">Contact Us</a>
            </li>
          </ul>
        </section>
      </div >
    )
  }
}
