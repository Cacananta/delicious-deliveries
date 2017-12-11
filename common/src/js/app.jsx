import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './index/landingIndex';
import RestaurantDetails from './index/restaurantDetailsIndex';
import Login from './index/loginIndex';
import SignUp from './index/signupIndex';
import About from './index/aboutIndex';
import Contact from './index/contactIndex';
import SearchResults from './index/searchResultsIndex';
import ShoppingCart from './index/shoppingCartIndex';
import AddRestaurant from './index/addRestaurantIndex';
import AddMenuItem from './index/addMenuItemIndex';
import Checkout from './index/checkoutIndex';
import OwnerAdmin from './index/ownerAdminIndex';
import OwnerViewUpdateIndex from './index/ownerViewUpdateIndex';
import UpdateRestaurant from './index/updateRestaurantDetailsIndex';
import UpdateOwnerInfo from './index/updateOwnerInfoIndex';
import UpdateUserInfo from './components/updateUserInfo';



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
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/owner/:id/addrestaurant' component={AddRestaurant} />
                    <Route exact path='/owner/:id/restaurant/:restid/addMenuItem' component={AddMenuItem} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/owner/:id/viewupdaterestaurants' component={OwnerViewUpdateIndex} />
                    <Route exact path='/owner/:id' component={OwnerAdmin} />
                    <Route exact path='/owner/:id/updaterestaurant/:restid' component={UpdateRestaurant} />
                    <Route exact path='/owner/:id/updateOwnerInfo' component={UpdateOwnerInfo} />
                    <Route exact path='/customer/:id/updateUserInfo' component={UpdateUserInfo} />
                </div>
            </Router>
            
        );
    }
}
