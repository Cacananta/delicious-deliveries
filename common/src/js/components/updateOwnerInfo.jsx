import React, { Component } from 'react';
import {
    changeUsername,
    changePassword,
    changeName,
    changePhonenumber,
    changeOwnerInfo
} from '../actions/updateOwnerInfoActions';
import NavBar from '../index/navBarIndex';

export default class UpdateOwnerInfo extends Component {
    constructor(props) {
        super(props);

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUsernameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(changeUsername(value));

    }

    handlePasswordInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(changePassword(value));
    }

    handleNameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(changeName(value));
    }

    handlePhoneNumberInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(changePhonenumber(value));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, name, username, password, phonenumber, currentOwnerId } = this.props;
        dispatch(changeOwnerInfo(name, username, password, phonenumber, currentOwnerId));
    }


    render() {
        const { name, username, password, phonenumber, shoppingCart } = this.props;

        return (
            <div >
                <NavBar/>
                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container text-center">
                        <h1 className="display-3">Update Owner Information</h1>
                    </div>
                </div>
                <div className="container-fluid shortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5" >
                                <div className="card-header">
                                    <strong>Update Your Information</strong>
                                </div>
                                <form id='changeOwnerInfo' onSubmit={this.handleSubmit}>
                                    <div className="card-body form-group">
                                        <label htmlFor="username"><strong>Email:</strong></label>
                                        <input type="username" name='username' id='username' placeholder='Please enter your email..(required)' value={username} className="form-control" onChange={this.handleUsernameInput} />
                                        <br />
                                        <label htmlFor="name"><strong>Name:</strong></label>
                                        <input type="text" name='name' id='name' placeholder='Please enter your full name...(required)' value={name} className='form-control' onChange={this.handleNameInput} />
                                        <br />
                                        <label htmlFor="phonenumber"><strong>Phone Number:</strong></label>
                                        <input type="text" name='phonenumber' id='phonenumber' placeholder='Please enter your phone number' value={phonenumber} className='form-control' onChange={this.handlePhoneNumberInput} />
                                        <br />
                                        <label htmlFor="passowrd"><strong>Verify Password:</strong></label>
                                        <input type="password" name='password' id='password' placeholder='Please enter your password...(required)' value={password} className="form-control" onChange={this.handlePasswordInput} />
                                    </div>
                                    <div className="card-footer text-muted">
                                        <button className="btn btn-primary" type='submit'>Update Information</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg opacity fixed-bottom justify-content-center mt-5">
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