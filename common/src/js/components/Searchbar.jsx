import React, { Component } from 'react';
import { updateSearchLocation, captureLocation } from "../actions/searchBarActions";
// import SearchBarIndex from '../index/searchBarIndex';
import { Link } from 'react-router-dom';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        var input = document.getElementById('searchBarInput');
        var restrictions = { componentRestrictions: { country: 'us' } };
        new google.maps.places.Autocomplete(input, restrictions);
    }

    handleClick() {
        const { dispatch } = this.props;
        var input = document.getElementById('searchBarInput').value;
        dispatch(updateSearchLocation());
        dispatch(captureLocation(input));
      }

    render() {

        return (
            <div className="input-group">
            <input 
            placeholder="Enter an address..."
            id="searchBarInput"
            type="text"
            className="form-control"
            />
            <Link to={'/searchresults'}><button className="btn btn-primary" onClick={this.handleClick} type='button'>Go!</button></Link>
        </div>
        );
    }
}