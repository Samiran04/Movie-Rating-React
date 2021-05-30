import React from 'react';
import {handleMovieSearch, addMoviesFromSeachToList} from '../actions/index';

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

    handleAddMovie = (movie) => {
        this.props.dispatch(addMoviesFromSeachToList(movie));
    }
    render(){

        const {result, show_results} = this.props.search;

        //console.log(this.props.search);

        return (
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange = {this.handleChange}/>
                    <button id="search-btn" onClick = {this.handleSearch}>Search</button>
                    {show_results && <div className="search-results">
                        <div className="search-result">
                            <img src={result.Poster} alt="search-pic" />

                            <div className="movie-info">
                                <span>{result.Title}</span>

                                <button onClick={() => this.handleAddMovie(result)}>Add To Movies</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Navbar;