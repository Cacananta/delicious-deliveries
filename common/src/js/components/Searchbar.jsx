import React, { Component } from 'react';
import { updateSearchLocation, captureLocation } from "../actions/searchBarActions";
import { Link } from 'react-router-dom';
import NavBar from '../index/navBarIndex';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.changeSearchlocation = this.changeSearchlocation.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        var input = document.getElementById('searchBarInput');
        var restrictions = { componentRestrictions: { country: 'us' } };
        new google.maps.places.Autocomplete(input, restrictions);
    }

    changeSearchlocation(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(captureLocation(value));
    }


    handleClick() {
        const { dispatch } = this.props;
        var input = document.getElementById('searchBarInput').value;
        dispatch(updateSearchLocation(input));
        dispatch(captureLocation(input));
    }

    render() {
        const {location} = this.props;
        let button;
        if (location.length > 0) {
            button = <Link to={'/searchresults'}><button className="btn btn-primary" onClick={this.handleClick} type='button'>Go!</button></Link>
        }
        return (
            <div className="input-group">
                <input
                    onChange={this.changeSearchlocation}
                    placeholder="Enter an address..."
                    id="searchBarInput"
                    className="form-control"
                    value={location}
                />
                { button }
            </div>
        );
    }
}