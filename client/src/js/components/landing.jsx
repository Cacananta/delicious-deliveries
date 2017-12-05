import React, { Component } from 'react';

const background = {
    backgroundImage: 'url(./DD-landing.jpg)',
    height: '500px',
    width: '200px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

export default class Landing extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
                    <a className='navbar-brand order-1 font-weight-bold' href="#">Login</a>
                    <a className="navbar-brand order-1 font-weight-bold float-right" href='#'>Sign-Up</a>
                    <button className="navbar-toggler" type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div style={background}>

                </div>
                <br />
            </div>
            
        );
    }
}