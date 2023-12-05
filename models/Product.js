import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    
    type: {
        type: String,
        required: true,
    },
    
    prod_type: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },

    recommendation: {
        type: String,
        required: true
    },
    
    recommendation_img: {
        type: String,
        required: true
    },
    

});

export default mongoose.model("Event", eventSchema);