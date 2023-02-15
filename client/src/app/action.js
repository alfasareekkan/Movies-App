import axios from 'axios';

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies
  };
};

export const setSelectedMovie = (movie) => {
  return {
    type: 'SET_SELECTED_MOVIE',
    payload: movie
  };
};
export const setMoviesToStore = (movie) => {
    return {
        type: 'SET_MOVIES_TO_STORE',
        payload: movie
    }
}
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/api/movies');
      dispatch(setMovies(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/movie/${id}`);
        dispatch(setSelectedMovie(response.data));
        dispatch(setMoviesToStore(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectMovie = (movie) => {
  return async (dispatch) => {
    dispatch(setSelectedMovie(movie));
  };
};
