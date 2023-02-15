import { Schema, model } from "mongoose";

const schema = new Schema({
    Title: {
        type:String
    },
    Year:  {
        type:String
    },
    Rated:  {
        type:String
    },
    Released:  {
        type:String
    },
    Runtime:  {
        type:String
    },
    Genre:  {
        type:String
    },
    Director:  {
        type:String
    },
    Writer:  {
        type:String
    },
    Plot:  {
        type:String
    },
    Language:  {
        type:String
    },
    Country:  {
        type:String
    },
    Awards:  {
        type:String
    },
    Poster:  {
        type:String
    },
    Metascore:  {
        type:String
    },
    imdbRating:  {
        type:String
    },
    imdbVots:  {
        type:String
    },
    imdbId:  {
        type:String
    },
    Type:  {
        type:String
    },
    Response:  {
        type:String
    },
    Images: Array
}, { timestamps: true });

const movieSchema = model("Movies", schema);
export default movieSchema;