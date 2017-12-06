import React, { Component } from 'react';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var input = document.getElementById('searchbarinput');
        var restrictions = { componentRestrictions: { country: 'us' } };
        new google.maps.places.Autocomplete(input, restrictions);
    }


    render() {
        return (
            <div className="input-group">
            <input 
            id="searchbarinput"
            type="text"
            className="form-control"
            />
       
            <button className="btn btn-primary " type='button'>Go!</button>
        
        </div>
        );
    }

}