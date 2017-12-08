import React, { Component } from 'react';



export default class About extends Component {
    render() {
        const { activeOwner, activeCustomer } = this.props;
        return (
            <div className='about'>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                    </div>
                </div>
            </nav>
                <div className="row" style={{paddingTop: '300px'}}></div>
            <div className="row">
            <div className="col-md-4 offset-4 align-self-center">
                <div className="card text-center">
                    <div className="card-body">
                       
                        <p className="card-text">Delicious Deliveries was created magically by banging on a keyboard! If you have any questions, comments, or concerns feel free to drop us a message.</p>
                        <a href="#/contact" className="btn btn-secondary">Contact Us</a>
                        <a href="/" className="btn btn-secondary">Back to Home</a>
                    </div>
                </div>
            </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom justify-content-center">
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
            </div>
            
        );
    }
}