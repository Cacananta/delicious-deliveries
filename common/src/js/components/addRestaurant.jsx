import React, { Component } from 'react';

export default class AddRestaurant extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron jumbotron-fluid addRest">
                    <div className="container text-center">
                        <h1 className="display-3">Add A Restaurant</h1>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg justify-content-center fixed-bottom navbar-light bg-light mb-5">
                    <ul className="nav justify-content-center fixed-bottom">
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold text-dark" href="#/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold text-dark" href="#/contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>                                 
            </div>
        );
    }
}