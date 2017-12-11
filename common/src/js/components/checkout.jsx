import React, { Component } from 'react';
import { addOrder } from '../actions/restaurantDetailsActions';
import NavBar from '../index/navBarIndex';

export default class Checkout extends Component {
    constructor(props) {
        super(props);

        this.submitOrder = this.submitOrder.bind(this);
    }

    submitOrder() {
        const { dispatch, location, shoppingCart, currentCustomerId } = this.props;
        console.log(location);
        console.log(shoppingCart);
        console.log(currentCustomerId);
        dispatch(addOrder(location, shoppingCart, currentCustomerId));
    }

    render() {
        const { shoppingCart, activeCustomer, location } = this.props;
        if (activeCustomer == true) {
            let total = 0;
            shoppingCart.forEach(item => {
                let itemTotal = (item.price * item.quantity);
                total += itemTotal;
            });
            let taxRate = .0775;
            let delivery = 2.99;

            return (
                <div>
                     <NavBar/>
                    <div className="jumbotron jumbotron-fluid mb-0">
                        <div className="container text-center">
                            <h1 className="display-3">Checkout</h1>
                        </div>
                    </div>
                    <div className="container-fluid shortbg">
                        <div className="row mb-5">
                            <div className="col-12 mb-5">
                                <div className="card mt-5">
                                    <div className="card-header">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <strong>Items:</strong>
                                        </div>
                                        <div className="col-4 text-center">
                                            <strong>Quantity:</strong>
                                        </div>
                                        <div className='col-4 text-center'>
                                            <strong>Totals:</strong>
                                        </div>
                                    </div>
                                    </div>
                                    {shoppingCart.map((cartItem, index) =>
                                        <div key={index} className='row'>
                                            <div className='col-4 text-center'>
                                                <p className='text-center'>{cartItem.menuItem}</p>
                                            </div>
                                            <div className='col-4 text-center'>
                                                <p className='text-center'>{cartItem.quantity}</p>
                                            </div>
                                            <div className='col-4 text-center'>
                                                <p className='ml-auto'>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    )}
                                    <hr />
                                    <div className='row'>
                                        <div className='col-4 text-center'>
                                            <a className='btn btn-primary' href='#/shoppingcart' role='button'>Back Shopping Cart</a>
                                        </div>
                                        <div className='col-4 text-center'>
                                            <button className='btn btn-primary' href='#/checkout' onClick={ this.submitOrder } role='button'>
                                                Submit
                                            </button>
                                            <p><strong>Deliver to: </strong>{ location } </p>
                                        </div>
                                        <div className='col-4 justify-content-center'>
                                            <div className='d-flex flex-column'>
                                                <div className='ml-auto'>Sub-Total: ${total.toFixed(2)}</div>
                                                <div className='ml-auto'>Tax: ${(total * taxRate).toFixed(2)}</div>
                                                <div className='ml-auto'>Delivery Charge: ${delivery}</div>
                                                <div className='ml-auto'>Final Total: $<strong>{( total + delivery + (total * taxRate)).toFixed(2)}</strong></div>
                                            </div>
                                        </div>
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
        } else {
            return (
                <div>
                    <nav className="navbar fixed-top navbar-expand-lg opacity mb-5">
                        <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                        <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link font-weight-bold text-muted" href="#/">Delicious Deliveries</a>
                            </div>
                        </div>
                    </nav>
                    <div className="jumbotron jumbotron-fluid mb-0">
                        <div className="container text-center">
                            <h1 className="display-3">Checkout</h1>
                        </div>
                    </div>
                    <div className="container-fluid shortbg">
                        <h1 className='text-center pt-5'>Please Sign in as a Customer</h1>
                        <h1 className='text-center'>To Check Out</h1>
                        <div className='text-center'>
                            <a href="#/shoppingcart">Back to Shopping Cart</a>
                            <br />
                            <span>
                                <a href="#/login">Log in</a>
                                {'     '}
                                <a href="#/signup">Sign up</a>
                            </span>
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
}



// py-1