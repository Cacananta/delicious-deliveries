import React, { Component } from 'react';
import {
    addNewClient,
    ownerToggle,
    updateUsername,
    updatePassword,
    updateName,
    updatePhonenumber,
} from '../actions/signupActions';

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
        // const { owner } = document.getElementById('owner').value;
        dispatch(addNewClient(owner, name, email, password, phone_number ));
    }


    render() {
        const {owner, name, email, password, phone_number,  activeOwner, activeCustomer} = this.props;
        // console.log(document.getElementById('phone').value);
        return (
            <div className="container">
            <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card text-center">
                    <div className="card-header">
                        Sign Up
                    </div>
                    <form id='signup-form' onSubmit={this.handleClick}>
                        <div className="card-body form-group">
                            <select name="" id="owner" value={owner} onChange={this.handleToggle}>
                                <option defaultValue hidden>Select Account Type</option>
                                <option value="false">User</option>
                                <option value="true">Owner</option>
                            </select>
                            <br />
                            <br />
                            <label htmlFor="username">Username:</label>
                            <input type="email" name='username' id='email' placeholder='Please enter your email..(required)' value={email} className="form-group" onChange={this.handleUsernameInput}/>
                            <br/>
                            <label htmlFor="passowrd">Password:</label>
                            <input type="password" name='password' id='password' placeholder='Please enter your password...(required)' value={password} className="form-group" onChange={this.handlePasswordInput}/>
                            <br/>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' placeholder='Please enter your full name...(required)' value={name} className='form-group' onChange={this.handleNameInput}/>
                            <br/>
                            <label htmlFor="phonenumber">Phone Number:</label>
                            <input type="text" name='phonenumber' id='phone_number' placeholder='Please enter your phone number' value={phone_number} className='form-group' onChange={this.handlePhoneNumberInput}/>
                        </div>
                        <div className="card-footer text-muted">
                            <a href='/'><button className="btn btn-primary" type='submit'>Sign Up</button></a>
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
                </div>
                </div>                
            </div>
        );
    }
}