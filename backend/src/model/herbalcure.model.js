import mongoose from "mongoose";

const herbalCureSchema = mongoose.Schema({
    disease: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    severity: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH'],
        required: true
    },
    drug: {
        type: String,
        required: true
    }
})

const HerbalCure = mongoose.model("HerbalCure", herbalCureSchema);

export default HerbalCure;