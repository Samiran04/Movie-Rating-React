import React from 'react';
import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';
import {addMovies, showFavourite, showMovies} from '../actions/index';

class App extends React.Component {

  componentDidMount(){

    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });

    console.log(store.getState());

    store.dispatch(addMovies(data));
  }

  checkFavourite = (movie) => {
    const {movies} = this.props.store.getState();
    const {favourite} = movies;

    let index = favourite.indexOf(movie);

    if(index !== -1)
      return true;
    
    return false
  }

  showMovies = () => {
    const {dispatch} = this.props.store;

    dispatch(showMovies());
  }

  showFavourite = () => {
    const {dispatch} = this.props.store;

    dispatch(showFavourite());
  }


  render(){

    const {store} = this.props;

    console.log(store.getState());

    const {movies} = store.getState();

    const {list, favourite, flag} = movies;

    let myMovies = flag?favourite:list;

    return (
      <div className="App">
        <Navbar 
        dispatch = {store.dispatch}
        search = {store.getState().search}/>
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={this.showMovies}>Movies</div>
            <div className="tab" onClick={this.showFavourite}>Favourate</div>
          </div>

          <div className="list">
            {myMovies.map((movie, index) => (
              <MovieCard 
              movie = {movie} 
              key={`movie-${index}`} 
              dispatch = {store.dispatch}
              isFavourite = {this.checkFavourite(movie)}/>
            ))}
            {myMovies.length === 0?<div>No movies to display!</div>:null}
          </div>
        </div>
      </div>
    )
   }
}

export default App;
