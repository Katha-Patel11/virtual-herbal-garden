import mongoose from "mongoose";

const diseaseSchema = new mongoose.Schema({
    Disease:{
        type: String,
        required: true
    },
    Symptom_1: String,
    Symptom_2: String,
    Symptom_3: String,
    Symptom_4: String,
    Symptom_5: String,
    Symptom_6: String,
    Symptom_7: String,
    Symptom_8: String,
    Symptom_9: String,
    Symptom_10: String,
    Symptom_11: String,
    Symptom_12: String,
    Symptom_13: String,
    Symptom_14: String,
    Symptom_15: String,
    Symptom_16: String,
    Symptom_17: String,
})

const Disease=mongoose.model('Disease',diseaseSchema);

export default Disease;