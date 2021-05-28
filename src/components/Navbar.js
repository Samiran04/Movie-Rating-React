import React from 'react';
import {handleMovieSearch} from '../actions/index';

class Navbar extends React.Component {

    constructor() {
        super();

        this.state = {
            searchWord: ''
        }
    }

    handleSearch = () => {
        const {searchWord} = this.state;

        this.props.dispatch(handleMovieSearch(searchWord));
    }

    handleChange = (e) => {

        this.setState({
            searchWord: e.target.value
        });
    }
    render(){
        return (
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange = {this.handleChange}/>
                    <button id="search-btn" onClick = {this.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;