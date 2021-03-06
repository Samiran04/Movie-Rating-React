export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_MOVIES = 'SHOW_MOVIES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_MOVIE_SEARCH = 'ADD_MOVIE_SEARCH';
export const ADD_MOVIE_SEARCH_TO_LIST = 'ADD_MOVIE_SEARCH_TO_LIST';

export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie) {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function showMovies() {
    return {
        type: SHOW_MOVIES
    }
}

export function showFavourite() {
    return {
        type: SHOW_FAVOURITES
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_MOVIE_SEARCH,
        movie: movie
    }
}

export function addMoviesFromSeachToList(movie) {
    return {
        type: ADD_MOVIE_SEARCH_TO_LIST,
        movie: movie
    }
}

export function handleMovieSearch (searchWord) {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=ef31a81&t=${searchWord}`;

    return function(dispatch){
            fetch(url)
            .then(data => data.json())
            .then(movie => { console.log(movie)
                dispatch(addMovieSearchResult(movie))
             })
        }
}