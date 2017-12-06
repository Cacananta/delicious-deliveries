import React, { Component } from 'react';

export default class OwnerLogin extends Component {
    render() {
        return (
            <div className="container">
                <div className="card text-center">
                    <div className="card-header">
                        Owner Login
                    </div>
                    <div className="card-body">
                        <label htmlFor="username"></label>
                        <input type="email" name='username' placeholder='Enter your email..' className="input-group"/>
                        <br/>
                        <label htmlFor="passowrd"></label>
                        <input type="text" name='password' placeholder='Enter your password...' className="input-group"/>
                    </div>
                    <div className="card-footer text-muted">
                        <a href='/'><button className="btn btn-primary">Sign In</button></a>
                    </div>
                </div>
            </div>
        );
    }
}