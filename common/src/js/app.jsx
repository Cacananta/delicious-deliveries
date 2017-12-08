import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './index/landingIndex';
import RestaurantDetails from './index/restaurantDetailsIndex';
import Login from './index/loginIndex';
import SignUp from './index/signupIndex';
import About from './components/about';
import Contact from './components/contact';
import SearchResults from './index/searchResultsIndex';
import ShoppingCart from './index/shoppingCartIndex';
import AddRestaurant from './components/addRestaurant';

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
                    <Route exact path='/shoppingcart' component={ShoppingCart} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/addrestaurant' component={AddRestaurant} />
                </div>
            </Router>
            
        );
    }
}
