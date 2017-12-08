import React, { Component } from 'react';
import Searchbar from '../index/searchBarIndex';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    
    
    }

    

    render() {
        const { activeOwner, activeCustomer } = this.props;
        return (
            <div className='landing'>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="container" style={{paddingTop: '300px'}}>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 h1 text-center font-italic">Delicious Deliveries</div>
                        <div className="col-lg-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-6 offset-1">
                            <div className="input-group">
                            <Searchbar/>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
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
            
        );
    }
}













{/* <nav className="navbar navbar-expand-lg justify-content-center fixed-bottom navbar-light bg-light">
<ul className="nav justify-content-center fixed-bottom">
    <li className="nav-item">
        <a className="nav-link font-weight-bold text-dark" href="#/about">About Us</a>
    </li>
    <li className="nav-item">
        <a className="nav-link font-weight-bold text-dark" href="#/contact">Contact Us</a>
    </li>
</ul>
</nav>  */}