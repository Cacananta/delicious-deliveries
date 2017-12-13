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
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-12 mb-5">
                                <div className="card mt-5">
                                    <div className="card-header text-center">
                                        <h1><strong>Checkout</strong></h1>
                                    </div>
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
                    <NavBar/>
                    <div className="container" id='centerStage'>
                        <div className="row">
                            <div className="col-md-6 offset-3 align-self-center">
                                <div className="card text-center form-group">
                                    <div className="card-header">
                                        <h1><strong>Checkout</strong></h1>
                                    </div>
                                    <div className="card-body">
                                        <p className='text-center pt-5'>Please Sign in as a Customer</p>
                                        <p className='text-center'>To Check Out</p>
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
}
