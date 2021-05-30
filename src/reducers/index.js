import {combineReducers} from 'redux';

import {ADD_MOVIES, 
    ADD_FAVOURITE, 
    REMOVE_FROM_FAVOURITE, 
    SHOW_MOVIES, 
    SHOW_FAVOURITES,
    ADD_MOVIE_SEARCH,
    ADD_MOVIE_SEARCH_TO_LIST
} from '../actions/index';

const initialMoviesState = {
    list: [],
    favourite: [],
    flag: false
}

export function movies(state = initialMoviesState, action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state, 
                list: action.movies
        }
        case ADD_FAVOURITE:
            return {
                ...state, 
                favourite: [action.movie, ...state.favourite]
            }
        case REMOVE_FROM_FAVOURITE:
            const Movie = action.movie;

            const newFavourite = state.favourite.filter(movie => movie.Title !== Movie.Title);
            return {
                ...state,
                favourite: newFavourite
            }
        case SHOW_MOVIES:
            return {
                ...state,
                flag: false
            }
        case SHOW_FAVOURITES:
            return {
                ...state,
                flag: true
            }
        case ADD_MOVIE_SEARCH_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state
    }
}

const initialSearchState = {
    result: {
    },
    show_results: false
}

export function search(state = initialSearchState, action)
{
    switch(action.type){
        case ADD_MOVIE_SEARCH:
            return {
                ...state,
                result: action.movie,
                show_results: true
            }
            case ADD_MOVIE_SEARCH_TO_LIST:
                return {
                    ...state,
                    show_results: false
                }
        default:
            return state;
    }
}

/*const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}*/

export default combineReducers({
    movies: movies,
    search: search
});