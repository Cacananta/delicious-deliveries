import React, { Component } from 'react';
import NavBar from '../index/navBarIndex';

export default class About extends Component {
    constructor(props) {
        super(props);
    
    
    }


    render() {
        const { activeOwner, activeCustomer, shoppingCart } = this.props;
        return (
            <div className='about'>
              <NavBar/>
                <div className="container" id='centerStage'>
                    <div className="row">
                        <div className="col-md-6 offset-3 align-self-center">
                            <div className="card text-center form-group">
                            <div className="card-body ">
                                <p className="card-text">Delicious Deliveries was created magically by banging on a keyboard! If you have any questions, comments, or concerns feel free to drop us a message.</p>
                                <a href="#/contact" className='btn btn-secondary form-control'>Contact Us</a>
                                <br/>
                                <br/>
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