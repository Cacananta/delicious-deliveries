import React, { Component } from 'react';

export default class AddRestaurant extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron jumbotron-fluid addRest">
                    <div className="container text-center">
                        <h1 className="display-3">Add A Restaurant</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card text-center" style={{marginBottom: '44px'}}>
                            <div className="card-header">
                                Tell Us About Your Restaurant
                            </div>
                            <form action="">
                                <div className="card-body form-group">
                                    <select name="" id="food-type">
                                        <option defaultValue hidden>Select Restaurant Type</option>
                                        <option value="">Mexican</option>
                                        <option value="">Asian</option>
                                        <option value="">BBQ</option>
                                        <option value="">American</option>
                                        <option value="">Italian</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    <label htmlFor="name">Restaurant Name</label>
                                    <input type="text" name='name' placeholder='Enter restaurnat name...(required)' className='form-group'/>
                                    <br/>
                                    <label htmlFor="address-1">Address 1</label>
                                    <input type="text" name='address-1' placeholder='Street address...(required)' className="form-group"/>
                                    <br/>
                                    <label htmlFor="address-2">Address 2</label>
                                    <input type="text" name='address-2' placeholder='Unit, Spc, Suite...' className="form-group"/>
                                    <br/>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name='city' placeholder='City...(required)' className="form-group"/>
                                    <br/>
                                    <label htmlFor="state">State</label>
                                    <input type="text" name='state' placeholder='State...(required)' className="form-group"/>
                                    <br/>
                                    <label htmlFor="zip-code">Postal Code</label>
                                    <input type="text" name='zip-code' placeholder='Postal code...(required)' className="form-group"/>
                                    <br/>
                                    <label htmlFor="image">Image</label>
                                    <input type="text" name='image' placehoolder='Image url...' className="form-group"/>
                                    <br/>
                                    <label htmlFor="phone-number">Phone Number</label>
                                    <input type="text" name='phone-number' placeholder='Phone number...(required)' className="form-group"/>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="/"><button className="btn btn-primary">Enter</button></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-3"></div>
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


