import React, { Component } from 'react';
import NavBar from '../index/navBarIndex';
// import {
//     updateClient,
//     ownerToggle,
//     updateUsername,
//     updatePassword,
//     updateName,
//     updatePhonenumber,
// } from '../actions/updateOwnerActions';

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

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, owner, name, email, password, phone_number } = this.props;
        dispatch(updateClient(owner, name, email, password, phone_number ));
    }


    render() {
        const {owner, name, email, password, phone_number,  activeOwner, activeCustomer, shoppingCart} = this.props;
        
        return (
            <div className="about">
               <NavBar/>
            <div className="row">
            <div className="col-4 offset-4" style={{marginTop: "200px"}}>
            <div >
                <div className="card text-center" >
                    <div className="card-header">
                       <strong> Update User Information </strong>
                    </div>
                    <form id='updateOwnerInfo' onSubmit={this.handleSubmit}>
                        <div className="card-body form-group">
                            
                            <label htmlFor="username">Email:</label>
                            <input type="email" name='username' id='email' placeholder='Please enter your email..(required)' value={email} className="form-control" onChange={this.handleUsernameInput}/>
                            <br/>
                            <label htmlFor="passowrd">Password:</label>
                            <input type="password" name='password' id='password' placeholder='Please enter your password...(required)' value={password} className="form-control" onChange={this.handlePasswordInput}/>
                            <br/>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' placeholder='Please enter your full name...(required)' value={name} className='form-control' onChange={this.handleNameInput}/>
                            <br/>
                            <label htmlFor="phonenumber">Phone Number:</label>
                            <input type="text" name='phonenumber' id='phone_number' placeholder='Please enter your phone number' value={phone_number} className='form-control' onChange={this.handlePhoneNumberInput}/>
                        </div>
                        <div className="card-footer text-muted">
                            <a href='#/'><button className="btn btn-primary form-control" type='submit'>Sign Up</button></a>
                        </div>
                    </form>
                </div>
                </div>
                </div>
                </div>                
            </div>
        );
    }
}