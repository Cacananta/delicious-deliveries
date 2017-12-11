import React, { Component } from 'react';
import Searchbar from '../index/searchBarIndex';
import NavBar from '../index/navBarIndex';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    
    
    }

    

    render() {
        const { activeOwner, activeCustomer, shoppingCart } = this.props;
        return (
            <div className='landing'>
            <NavBar/>
                <div className="container" id='centerStage'>
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