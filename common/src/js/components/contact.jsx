import React, { Component } from 'react';
import NavBar from '../index/navBarIndex';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    
    
    }


    render() {
        const { activeOwner, activeCustomer, shoppingCart } = this.props;
        return (
            <div className='contact'>
                <NavBar/>
                <div className="container" id='centerStage'>
                    <div className="row">
                        <div className="col-md-6 offset-3 align-self-center">
                            <div className="card text-center form-group">
                                <div className="card-body ">
                                    <p className="card-text">If you have many questions, comments, or concerns feel free to drop us a message.</p>
                                    <p>DeliciousDeliveriesSD@gmail.com</p>
                                    <a href="#/" className="btn btn-secondary form-control">Back to Home</a>
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