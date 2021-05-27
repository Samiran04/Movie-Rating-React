import React from 'react';
import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';
import {addMovies} from '../actions/index';

class App extends React.Component {

  componentDidMount(){

    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });

    console.log(store.getState());

    store.dispatch(addMovies(data));
  }
  render(){

    const {store} = this.props;

    console.log(store.getState());

    const {list} = store.getState();

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourate</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie = {movie} key={`movie-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    )
   }
}

export default App;
