import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

    }


    render() {
        const { shoppingCart, activeOwner, activeCustomer, currentOwnerId } = this.props;
        if (activeCustomer == false && activeOwner == false) {
            return (
                <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="navbar-brand nav-link font-weight-bold text-dark" href="#/">Delicious Deliveries</a>
                            <a href="#/shoppingcart"><img src="../cart.png" /><strong>({shoppingCart.length})</strong></a>
                        </div>
                    </div>
                </nav>
            );
        } else if (activeOwner == true) {
            return (
                <nav className="navbar fixed-top navbar-expand-lg opacity mb-5 ">
                    <p className='order-1 pr-3 pt-1 nav-text h5 text center'>Welcome</p>
                    <a className="order-2 font-weight-bold nav-link text-dark" href={`#/owner/${currentOwnerId}/updateOwnerInfo`}>Account</a>
                    <a className="order-3 font-weight-bold nav-link text-dark" onClick={this.handleClick}>Sign Out</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="navbar-brand nav-link font-weight-bold text-dark" href="#/">Delicious Deliveries</a>
                            <a href="#/shoppingcart"><img src="../cart.png" /><strong>({shoppingCart.length})</strong></a>
                        </div>
                    </div>
                </nav>
            );
        } else if (activeCustomer == true) {
            return (
                <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
                      <p className='order-1 pr-3 pt-1 nav-text h5 text center'>Welcome</p>
                    {/* <a className="order-2 font-weight-bold nav-link text-dark" href='#/updateUserInfo'>Account</a> */}
                    <a className="order-2 font-weight-bold nav-link text-dark" onClick={this.handleClick}>Sign Out</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="navbar-brand nav-link font-weight-bold text-dark" href="#/">Delicious Deliveries</a>
                            <a href="#/shoppingcart"><img src="../cart.png" /><strong>({shoppingCart.length})</strong></a>
                        </div>
                    </div>
                </nav>
            );
        }
    }
}
