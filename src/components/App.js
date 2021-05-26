import React from 'react';
import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';

function App () {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourate</div>
          </div>

          <div className="list">
            {data.map(movie => (
              <MovieCard movie = {movie}/>
            ))}
          </div>
        </div>
      </div>
    )
}

export default App;
