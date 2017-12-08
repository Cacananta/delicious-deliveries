import React, { Component } from 'react';

export default class OwnerAdmin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activeOwner } = this.props;

        if (activeOwner == true) {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <p className="order-1 font-weight-bold text-dark">Welcome</p>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron jumbotron-fluid addRest">
                    <div className="container text-center">
                        <h1 className="display-3">Owner Admin</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card text-center">
                            <div className="card-header">
                                What would you like to do?
                            </div>
                            <div className="card-body">
                                <a href="#/addrestaurant"><p className="font-weight-bold nav-link">Update Owner Info</p></a>
                                <a href="#/addrestaurant"><p className="font-weight-bold nav-link">View/Update Restaurants</p></a>
                                <a href="#/addrestaurant"><p className="font-weight-bold nav-link">Add A Restaurant</p></a>
                            </div>
                        </div>
                    </div>
                </div>
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