import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITE, SHOW_MOVIES, SHOW_FAVOURITES} from '../actions/index';

const initialMoviesState = {
    list: [],
    favourite: [],
    flag: false
}

export default function movies(state = initialMoviesState, action){

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
        default:
            return state
    }
}