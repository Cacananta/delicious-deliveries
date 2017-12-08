import React, { Component } from 'react';

export default class OwnerAdmin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                <div className="row">
                
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
    }
}