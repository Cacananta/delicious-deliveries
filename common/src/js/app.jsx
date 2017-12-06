import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import Landing from './components/landing';
<<<<<<< HEAD
import RestaurantDetails from './components/restaurantDetails';
import UserLogin from './components/userlogin';
import OwnerLogin from './components/ownerlogin';
import SignUp from './components/signup';


=======
import SearchResults from './components/searchResults';
>>>>>>> beginning store wiring with axios in components
=======
import LandingIndex from './index/landingIndex';
import SearchResultsIndex from './index/searchResultsIndex';
import SearchBarIndex from './index/searchBarIndex';
>>>>>>> Stashed changes

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
<<<<<<< Updated upstream
                    <Route exact path='/' component={Landing} />
<<<<<<< HEAD
                    <Route exact path='/userlogin' component={UserLogin} />
                    <Route exact path='/ownerlogin' component={OwnerLogin} />
                    <Route exact path='/signup' component={SignUp} />
=======
                    <Route exact path='/searchresults' component={SearchResults} />
>>>>>>> beginning store wiring with axios in components
=======
                    <Route path='/' components={LandingIndex} />
                    <Route exact path='/searchresults' component={SearchResultsIndex} />
>>>>>>> Stashed changes
                </div>
            </Router>
            
        );
    }
}