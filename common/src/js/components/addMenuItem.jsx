import React, { Component } from 'react';
import {
    updateItemName,
    updateItemPrice,
    updateItemDescription,
    updateItemCategory,
    addNewMenuItem
} from '../actions/addMenuItemActions';
import NavBar from '../index/navBarIndex';


export default class AddMenuItem extends Component {
    constructor(props) {
        super(props);

        this.handleItemName = this.handleItemName.bind(this);
        this.handleItemPrice = this.handleItemPrice.bind(this);
        this.handleItemDescription = this.handleItemDescription.bind(this);
        this.handleItemCategory = this.handleItemCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleItemName(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateItemName(value));
    }

    handleItemPrice(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateItemPrice(value));
    }

    handleItemDescription(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateItemDescription(value));
    }

    handleItemCategory(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateItemCategory(value));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { dispatch, name, price, description, category, activeRestaurant } = this.props;
        dispatch(addNewMenuItem(name, price, description, category, activeRestaurant));
    }



    render() {
        const { name, price, description, category, shoppingCart, currentOwnerId } = this.props;
        return (
            <div>
                 <NavBar/>
                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container text-center">
                        <h1 className="display-3">Add Menu Item</h1>
                    </div>
                </div>
                <div className="container-fluid shortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header">
                                    <strong> What's On Your Menu</strong>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="card-body form-group">
                                        <label htmlFor="description"><strong>Item Type:</strong></label><br/>
                                        <select value={category} onChange={this.handleItemCategory} name="itemType" id="item-type" >
                                            <option defaultValue hidden>Select Item Type</option>
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Dinner">Dinner</option>
                                            <option value="Snack">Snack</option>
                                            <option value="Drinks">Drinks</option>
                                        </select>
                                        <br />
                                        <label htmlFor="itemName"><strong>Menu Item Name:</strong></label><br/>
                                        <input  onChange={this.handleItemName} type="text" name='name' placeholder='Enter item name...' className='form-control' value={name} />
                                        <br />
                                        <label htmlFor="price"><strong>Price:</strong></label><br/>
                                        <div className="input-group">
                                            <span className="input-group-addon">$</span>
                                            <input onChange={this.handleItemPrice} type="number" step='.01' name='price' placeholder='Enter price...' className="input-group currency"  value={price}/>
                                        </div>
                                        <br/>
                                        <label htmlFor="description"><strong>Description:</strong></label><br/>
                                        <input onChange={this.handleItemDescription} type="text" name='description' placeholder='Description...' className="form-control" value={description} />                             
                                    </div>
                                    <div className="card-footer text-muted">
                                        <a href="#/"><button type="submit" className="btn btn-primary">Enter</button></a>
                                    </div>                                    
                                </form>
                                <a href={`#/owner/${currentOwnerId}`} className='text-center'>Back to Owner Homepage</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg fixed-bottom justify-content-center mt-5 opacity">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold text-dark" href="#/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold text-dark" href="#/contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}