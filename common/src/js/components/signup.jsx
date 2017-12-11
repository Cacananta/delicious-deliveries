import React, { Component } from 'react';
import {
    addNewClient,
    ownerToggle,
    updateUsername,
    updatePassword,
    updateName,
    updatePhonenumber,
} from '../actions/signupActions';
import NavBar from '../index/navBarIndex';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleToggle(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(ownerToggle(value));
    }

    handleUsernameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateUsername(value));

    }

    handlePasswordInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updatePassword(value));
    }

    handleNameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateName(value));
    }

    handlePhoneNumberInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updatePhonenumber(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, owner, name, email, password, phone_number } = this.props;
        dispatch(addNewClient(owner, name, email, password, phone_number ));
    }


    render() {
        const {owner, name, email, password, phone_number,  activeOwner, activeCustomer, shoppingCart} = this.props;
        return (
            <div>
                <NavBar/>
                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container text-center">
                        <h1 className="display-3">Sign Up</h1>
                    </div>
                </div>
                <div className="container-fluid shortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header">
                                   <strong>Create An Account</strong>
                                </div>
                                <form id='signup-form' onSubmit={this.handleClick}>
                                    <div className="card-body form-group">
                                        <select name="" id="owner" value={owner} onChange={this.handleToggle}>
                                            <option defaultValue hidden>Select Account Type</option>
                                            <option value="false">Customer</option>
                                            <option value="true">Owner</option>
                                        </select>
                                        <br />
                                        <br />
                                        <label htmlFor="username"><strong>Email:</strong></label><br/>
                                        <input type="email" name='username' id='email' placeholder='(required)' value={email} className="form-control" onChange={this.handleUsernameInput}/>
                                        <br/>
                                        <label htmlFor="passowrd"><strong>Password:</strong></label><br/>
                                        <input type="password" name='password' id='password' placeholder='(required)' value={password} className="form-control" onChange={this.handlePasswordInput}/>
                                        <br/>
                                        <label htmlFor="name"><strong>Name:</strong></label><br/>
                                        <input type="text" name='name' id='name' placeholder='(required)' value={name} className='form-control' onChange={this.handleNameInput}/>
                                        <br/>
                                        <label htmlFor="phonenumber"><strong>Phone Number:</strong></label><br/>
                                        <input type="number" name='phonenumber' id='phone_number' placeholder='Please enter your phone number' value={phone_number} className='form-control' onChange={this.handlePhoneNumberInput}/>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <a href='#/'><button className="btn btn-primary" type='submit'>Sign Up</button></a>
                                    </div>
                                </form>
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