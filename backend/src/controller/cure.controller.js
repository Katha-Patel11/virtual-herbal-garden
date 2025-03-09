import Disease from "../model/disease.model.js";
import HerbalCure from "../model/herbalcure.model.js";

const findCure = async(req,res) => {
    try{
        console.log("Finding cure")
        const {symptoms, age, gender,severity} = req.body;
        console.log(req.body)
        console.log(symptoms)
        console.log(age)
        const disease = await Disease.findOne({
            $or:[
                {Symptom_1: {$in: symptoms}},
                {Symptom_2: {$in: symptoms}},
                {Symptom_3: {$in: symptoms}},
                {Symptom_4: {$in: symptoms}},
                {Symptom_5: {$in: symptoms}},
                {Symptom_6: {$in: symptoms}},
                {Symptom_7: {$in: symptoms}},
                {Symptom_8: {$in: symptoms}},
                {Symptom_9: {$in: symptoms}},
                {Symptom_10: {$in: symptoms}},
                {Symptom_11: {$in: symptoms}},
                {Symptom_12: {$in: symptoms}},
                {Symptom_13: {$in: symptoms}},
                {Symptom_14: {$in: symptoms}},
                {Symptom_15: {$in: symptoms}},
                {Symptom_16: {$in: symptoms}},
                {Symptom_17: {$in: symptoms}},
            ]
        })

        if(!disease){
            return res.status(400).json({ message:'No disease found'})
        }

        console.log(disease);

        const herbal = await HerbalCure.findOne({
            disease: disease.Disease,
            age: {$lte: age},
            gender: gender,
            severity: severity
        })

        if(!herbal){
            return res.status(404).json({message:'No herbal cure found'})
        }

        res.status(200).json({ disease: disease.Disease, cure: herbalCure.drug });

    }catch(error){
        console.error(`Error during search: ${error.message}`);
        res.status(500).json({message: error.message})
    }

}

export default findCure;