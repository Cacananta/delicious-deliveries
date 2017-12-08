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
import AddRestaurant from './index/addRestaurantIndex';
import AddMenuItem from './index/addMenuItemIndex';
import Checkout from './components/checkout';
import OwnerAdmin from './index/ownerAdminIndex';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/restaurant/:id' component={RestaurantDetails} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/searchresults' component={SearchResults} />
                    <Route exact path='/shoppingcart' component={ShoppingCart} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/addrestaurant' component={AddRestaurant} />
                    <Route exact path='/addMenuItem' component={AddMenuItem} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/owner/:id' component={OwnerAdmin} />
                </div>
            </Router>
            
        );
    }
}
