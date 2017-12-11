import React, { Component } from 'react';
import {
    ownerLoginToggle,
    updateLoginUsername,
    updateLoginPassword,
    loginAuth,
} from '../actions/loginActions';
import NavBar from '../index/navBarIndex';

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
        const {owner, email, password, activeOwner, activeCustomer, shoppingCart} = this.props;
        return (
            <div>
                <NavBar/>
                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container text-center">
                        <h1 className="display-3">Login</h1>
                    </div>
                </div>                       
                <div className="container-fluid shortbg">    
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header">
                                    <strong>Login</strong>
                                </div>
                                <form id='login-form' onSubmit={this.handleClick}>
                                    <div className="card-body form-group">
                                        <select name="" id="owner" value={owner} onChange={this.handleToggle}>
                                            <option defaultValue hidden>Select Account Type</option>
                                            <option value="false">Customer</option>
                                            <option value="true">Owner</option>
                                        </select>
                                        <br/>
                                        <br/>                  
                                        <label htmlFor="username"><strong>Email:</strong></label><br/>
                                        <input type="email" name='username' placeholder='Enter your email..' value={email} className="form-control" onChange={this.handleUsernameInput}/>
                                        <br/>
                                        <label htmlFor="password"><strong>Password:</strong></label><br/>
                                        <input type="password" name='password' placeholder='Enter your password...' value={password} className="form-control" onChange={this.handlePasswordInput}/>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <a href='#/'><button className="btn btn-primary">Sign In</button></a>
                                    </div>
                                </form>
                                <div>
                                    Need an account? <a href="#/signup">Sign up</a>
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