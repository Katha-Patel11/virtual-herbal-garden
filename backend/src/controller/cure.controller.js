import Disease from "../model/disease.model.js";
import HerbalCure from "../model/herbalcure.model.js";

const findCure = async (req, res) => {
  try {
    console.log("Finding cure...");
    const { symptoms, age, gender, severity } = req.body;
    console.log("Request Body:", req.body);

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ message: "Symptoms are required" });
    }

    const disease = await Disease.findOne({
      symptoms: { $all: symptoms.map((s) => new RegExp(s, "i")) },
    });

    if (!disease) {
      return res
        .status(404)
        .json({ message: "No disease found for the given symptoms" });
    }

    console.log("Disease Found:", disease.disease);

    const herbalCure = await HerbalCure.findOne({
      diseases_treated: { $regex: new RegExp(disease.disease, "i") },
    });

    if (!herbalCure) {
      return res
        .status(404)
        .json({ message: "No herbal cure found for this disease" });
    }

    console.log("Herbal Cure Found:", herbalCure.name);

    res.status(200).json({
      disease: disease.disease,
      cure: herbalCure.name,
      scientific_name: herbalCure.scientific_name,
      usage_instructions: herbalCure.usage_instructions,
      duration: herbalCure.duration,
      side_effects: herbalCure.side_effects,
      parts_used: herbalCure.parts_used,
      region_found: herbalCure.region_found,
    });
  } catch (error) {
    console.error(`Error during search: ${error.message}`);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export default findCure;
