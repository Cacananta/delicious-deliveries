import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing';
import RestaurantDetails from './components/restaurantDetails';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Landing} />
                </div>
            </Router>
            
        );
    }
}