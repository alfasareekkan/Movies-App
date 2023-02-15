import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    movies: [],
    storedMovies:[],
  selectedMovie: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_SELECTED_MOVIE':
          return { ...state, selectedMovie: action.payload };
      case 'SET_MOVIES_TO_STORE':
          return { ...state, storedMovies: [...state.storedMovies,action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
