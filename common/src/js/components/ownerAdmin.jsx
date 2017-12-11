import React, { Component } from 'react';
import axios from 'axios';
import { getOwnerRestaurants } from '../actions/updateRestaurantDetailsAction';
import NavBar from '../index/navBarIndex';

export default class OwnerAdmin extends Component {
    constructor(props) {
        super(props);

        this.ownerRestaurants = this.ownerRestaurants.bind(this);
    }

    ownerRestaurants() {
        const { dispatch } = this.props;
        console.log(this.props.match.params.id)
        let ownerId = this.props.match.params.id;
        dispatch(getOwnerRestaurants(ownerId));
    }

// tokenClick() {
//     let userId = '5a2706cfb99b853548b33085';
//     axios.get('http://localhost:3000/api/Owners/' + userId + '/restaurants')
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

    render() {
        const { activeOwner, currentOwnerId, shoppingCart } = this.props;
        console.log(this.props);
        if (activeOwner == true && !!this.props.match.params.id) {
        return (
            <div>
                <NavBar/>
                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container text-center">
                        <h1 className="display-3">Owner Admin</h1>
                    </div>
                </div>
                <div className="container-fluid shortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header">
                                    <strong>What would you like to do?</strong>
                                </div>
                                <div className="card-body">
                                    <a href={`#/owner/${this.props.match.params.id}/updateOwnerInfo`}><p className="font-weight-bold nav-link">Update Owner Info</p></a>
                                    <a onClick={this.ownerRestaurants} href={"#/owner/" + this.props.match.params.id + "/viewupdaterestaurants"}><p className="font-weight-bold nav-link">View/Update Restaurants</p></a>
                                    <a href={`#/owner/${this.props.match.params.id}/addrestaurant`}><p className="font-weight-bold nav-link">Add A Restaurant</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg opacity fixed-bottom justify-content-center mt-0">
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
            
        );

     } else {
         return (
             <div>
                <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold text-muted" href="/">Delicious Deliveries</a>
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

