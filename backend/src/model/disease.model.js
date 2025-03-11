import mongoose from "mongoose";

const diseaseSchema = new mongoose.Schema({
    disease:{
        type: String,
        required: true
    },
    symptoms:{
        type: [String],
        required: true
    }
})

const Disease=mongoose.model('Disease',diseaseSchema);

export default Disease;