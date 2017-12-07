import React, { Component } from 'react';
import {
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

    }


    render() {
        return (
            <div className="container">
                <div className="card text-center">
                    <div className="card-header">
                        Sign Up
                    </div>
                    <form id='signup-form'>
                        <div className="card-body">
                            <select name="" id="" onChange={this.handleToggle}>
                                <option defaultValue hidden>Select Account Type</option>
                                <option value="false">User</option>
                                <option value="true">Owner</option>
                            </select>
                            <br />
                            <br />
                            <label htmlFor="username">Username:</label>
                            <input type="email" name='username' placeholder='Please enter your email..(required)' className="input-group" onChange={this.handleUsernameInput}/>
                            <br/>
                            <label htmlFor="passowrd">Password:</label>
                            <input type="text" name='password' placeholder='Please enter your password...(required)' className="input-group" onChange={this.handlePasswordInput}/>
                            <br/>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' placeholder='Please enter your full name...(required)' className='input-group' onChange={this.handleNameInput}/>
                            <br/>
                            <label htmlFor="phonenumber">Phone Number:</label>
                            <input type="text" name='phonenumber' placeholder='Please enter your phone number' className='input-group' onChange={this.handlePhoneNumberInput}/>
                        </div>
                        <div className="card-footer text-muted">
                            <a href='/'><button className="btn btn-primary" type='submit' onSubmit={this.handleClick}>Sign Up</button></a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}