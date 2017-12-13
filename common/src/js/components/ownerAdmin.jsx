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
                <div className="container" id='centerStage'>
                    <div className="row">
                        <div className="col-md-6 offset-3 align-self-center">
                            <div className="card text-center form-group">
                                <div className="card-header">
                                    <strong><h1>Owner Admin</h1></strong>
                                </div>
                                <div className="card-header">
                                    What would you like to do?
                                </div>
                                <div className="card-body">
                                    <a href={`#/owner/${this.props.match.params.id}/updateOwnerInfo`}><p className="font-weight-bold nav-link">Update Owner Info</p></a>
                                    <a onClick={this.ownerRestaurants} href={`#/owner/${this.props.match.params.id}/viewupdaterestaurants`}><p className="font-weight-bold nav-link">View/Update Restaurants</p></a>
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
                <NavBar/>
                <div className="container" id='centerStage'>
                    <div className="row">
                        <div className="col-md-6 offset-3 align-self-center">
                            <div className="card text-center form-group">
                                <div className="card-header">
                                    <h1><strong>Owner Admin</strong></h1>
                                </div>
                                <div className="card-body">
                                    <p className='text-center pt-5'><strong>Please Sign in as an Owner</strong></p>
                                    <p className='text-center'><strong>To access Admin page</strong></p>
                                    <div className='text-center'>
                                        <span>
                                            <a href="#/login">Log in</a>
                                            {'     '}
                                            <a href="#/signup">Sign up</a>
                                        </span>
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
}

