import React, { Component } from 'react';

export default class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <a className='navbar-brand order-1 font-weight-bold' href="#">Login</a>
                    <a className="navbar-brand order-2 font-weight-bold" href='#'>Sign-Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <br />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 h1 text-center font-italic">Delicious Deliveries</div>
                        <div className="col-lg-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type='button'>Go!</button>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>                                       
                </div>
                <nav className="navbar fixed-bottom navbar-light bg-light">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-item">About Us</a>
                            </li>
                            <li className="nav-item float-right">
                                <a href="#" className="nav-item">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        );
    }
}
