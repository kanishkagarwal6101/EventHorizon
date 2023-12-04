import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    
    ticket: {
        type: String,
        required: true,
        unique: true,
    }   

});

export default mongoose.model("Movie", movieSchema);