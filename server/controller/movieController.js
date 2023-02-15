import Movie from "../model/Movies.js"

export const getAllMovies = async (req, res) => {
    try {
        let result = await Movie.find({}, { Title: 1, Released: 1, Poster:1 });
        res.status(200).json(result);
      } catch (error) {
      res.status(500).json({ message: error.message })
  }
}


export const getMovie = async (req, res) => {
    const movieId=req.params.id
    try {
        let result = await Movie.findOne({_id: movieId});
        res.status(200).json(result);
      } catch (error) {
      res.status(500).json({ message: error.message })
  }
}