import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        const { activeOwner, activeCustomer } = this.props;
        return (
            <div className='contact'>
                <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold text-muted" href="#/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="container" id='centerStage'>
                    <div className="row">
                        <div className="col-md-6 offset-4 aligh-self-center">
                            <div className="card text-center">
                                <div className="card-body">
                                    <p className="card-text">If you have many questions, comments, or concerns feel free to drop us a message.</p>
                                    <p>DeliciousDeliveriesSD@gmail.com</p>
                                    <a href="/" className="btn btn-secondary">Back to Home</a>
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
        );
    }
}