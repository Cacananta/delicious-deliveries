import React, { Component } from 'react';
import {
    updateItemName,
    updateItemPrice,
    updateItemDescription,
    updateItemCategory,
    addNewMenuItem
} from '../actions/addMenuItemActions';


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
    const { dispatch, name, price, description, category } = this.props;
    const { data } = { name, price, description, category }
    dispatch(addNewMenuItem(data));
    }



    render() {
        const { name, price, description, category } = this.props;
        return (
            <div className=" addMenuItem">
                <nav className="navbar fixed-top navbar-expand-lg mb-5 opacity">
                    <a className="order-1 font-weight-bold nav-link text-dark" href='#/login'>Login</a>
                    <a className="order-2 font-weight-bold nav-link text-dark" href='#/signup'>Sign Up</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link font-weight-bold" href="/">Delicious Deliveries</a>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card " style={{ marginTop: '80px' }}>
                            <form onSubmit={this.handleSubmit}>
                                <div className="card-body form-group">
                                    <div className="card-header text-center">
                                        <h1> <strong> Add Menu Item </strong> </h1>
                                    </div>
                                    <br />
                                    <label htmlFor="itemName"><strong>Menu Item Name   </strong></label>
                                    <input  onChange={this.handleItemName} type="text" name='name' placeholder='Enter item name...' className='form-control' value={name} />
                                    <br />
                                    <label htmlFor="price"><strong>Price   </strong></label>
                                    <div className="input-group">
                                    <span class="input-group-addon">$</span>
                                    <input onChange={this.handleItemPrice} type="number" step='.01' name='price' placeholder='Enter price...' className="form-control currency"  value={price}/>
                                    </div>
                                    <br />
                                    <label htmlFor="description"><strong>Description   </strong></label>
                                    <input onChange={this.handleItemDescription} type="text" name='description' placeholder='Description...' className="form-control" value={description} />
                                    <br />
                                    <label htmlFor="description"><strong>Item Type   </strong></label>
                                    <select value={category} onChange={this.handleItemCategory} className="form-control" name="itemType" id="item-type" >
                                        <option defaultValue hidden>Select Item Type   </option>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                        <option value="Snack">Snack</option>
                                        <option value="Drinks">Drinks</option>
                                    </select>
                                </div>
                                <div className="card-footer text-muted">
                                    <a href="/"><button type="submit" className="btn btn-primary form-control">Enter</button></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-3"></div>
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