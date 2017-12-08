import React, { Component } from 'react';
import {
    ownerLoginToggle,
    updateLoginUsername,
    updateLoginPassword,
    loginAuth,
} from '../actions/loginActions';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleToggle(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(ownerLoginToggle(value));
    }

    handleUsernameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateLoginUsername(value));
    }

    handlePasswordInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateLoginPassword(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, owner, email, password } = this.props;
        dispatch(loginAuth(email, password, owner));
    }
    render() {
        const {owner, email, password} = this.props;
        return (
            <div className="container">
                <div className="card text-center">
                    <div className="card-header">
                        Login
                    </div>
                    <form id='login-form' onSubmit={this.handleClick}>
                        <div className="card-body">
                            <select name="" id="owner" value={owner} onChange={this.handleToggle}>
                                <option defaultValue hidden>Select Account Type</option>
                                <option value="false">User</option>
                                <option value="true">Owner</option>
                            </select>
                            <br/>
                            <br/>                  
                            <label htmlFor="username">Username:</label>
                            <input type="email" name='username' placeholder='Enter your email..' value={email} className="input-group" onChange={this.handleUsernameInput}/>
                            <br/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name='password' placeholder='Enter your password...' value={password} className="input-group" onChange={this.handlePasswordInput}/>
                        </div>
                        <div className="card-footer text-muted">
                            <a href='/'><button className="btn btn-primary">Sign In</button></a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}