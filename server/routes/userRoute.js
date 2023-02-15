import { Router } from "express";
import { getAllMovies, getMovie } from "../controller/movieController.js";


const router = Router()

router.get('/movies', getAllMovies)
router.get('/movie/:id', getMovie)


export default router