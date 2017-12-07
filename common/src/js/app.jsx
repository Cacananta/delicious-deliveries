import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './index/landingIndex';
import RestaurantDetails from './components/restaurantDetails';
import Login from './index/loginIndex';
import SignUp from './index/signupIndex';
import About from './components/about'
import SearchResults from './components/searchResults';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/restaurant/:restaurant' component={RestaurantDetails} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/searchresults' component={SearchResults} />

                </div>
            </Router>
            
        );
    }
}
