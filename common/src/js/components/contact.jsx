import React, { Component } from 'react';



export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/userlogin'>User Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/ownerlogin'>Owner Login</a>
                    <a className="order-3 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="row" style={{paddingTop: '300px'}}></div>
            <div className="row">
            <div className="col-md-4 offset-4 align-self-center">
                <div className="card text-center">
                    <div className="card-body">
                       
                        <p className="card-text"> If you have any questions, comments, or concerns feel free to drop us a message.</p>
                        <p>DeliciousDeliveriesSD@gmail.com</p>
                        {/* <a href="#/contact" className="btn btn-secondary">Contact Us</a> */}
                        <a href="/" className="btn btn-secondary">Back to Home</a>
                    </div>
                </div>
                </div>
                </div>
                {/* <div className="container" style={{paddingTop: '300px'}}>
            <div  id='wrapper'>
            <div className='padding'></div>
            <div className="container aboutDesc">
              <div className='thanks has-text-light text-centered'>
                About us......
              
              <a className='button' href="/">Back to Home</a>
              </div>
            </div>
          </div>        
            </div> */}
                {/* <nav className="navbar navbar-expand-lg justify-content-center fixed-bottom navbar-light bg-light"> */}
                <ul className="nav justify-content-center fixed-bottom">
                    {/* <li className="nav-item">
                        <a className="nav-link font-weight-bold text-dark bg-light" href="#/about">About Us</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link font-weight-bold text-dark bg-light" href="#">Contact Us</a>
                    </li> */}
                </ul>
               

            </div>
        );
    }
}