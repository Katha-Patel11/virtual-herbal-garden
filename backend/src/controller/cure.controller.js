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

    const diseases = await Disease.find({
      symptoms: { $in: symptoms.map((s) => new RegExp(s, "i")) },
    });

    if (!diseases) {
      return res
        .status(404)
        .json({ message: "No disease found for the given symptoms" });
    }
    /* console.log(diseases); */
    let bestMatch = null;
    let maxMatches = 0;

    diseases.forEach((disease) => {
      const matchedSymptoms = disease.symptoms.filter((sym) => {
        return symptoms.includes(sym);
      });

      if (matchedSymptoms.length > maxMatches) {
        maxMatches = matchedSymptoms.length;
        bestMatch = {
          disease: disease.disease,
          matchedSymptoms: matchedSymptoms,
        };
      }
    });

    if (!bestMatch) {
      return res
        .status(404)
        .json({ message: "No disease found for the given symptoms" });
    }

    console.log("Best Match:", bestMatch.disease);
    console.log("Matching symptoms:", bestMatch.matchedSymptoms);

    const herbalCure = await HerbalCure.findOne({
      diseases_treated: { $regex: new RegExp(bestMatch.disease, "i") },
    });

    if (!herbalCure) {
      return res
        .status(404)
        .json({ message: "No herbal cure found for this disease" });
    }

    console.log("Herbal Cure Found:", herbalCure.name);

    res.status(200).json({
      disease: bestMatch.disease,
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
