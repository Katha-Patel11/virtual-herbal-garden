import mongoose from "mongoose";

const herbalCureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  scientific_name: {
    type: String,
    required: true,
  },
  diseases_treated: {
    type: [String], // Array of disease names
    required: true,
  },
  usage_instructions: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  side_effects: {
    type: [String], // Array of side effects
  },
  parts_used: {
    type: [String],
    required: true,
  },
  region_found: {
    type: [String],
  },
});

const HerbalCure = mongoose.model("HerbalCure", herbalCureSchema);

export default HerbalCure;
