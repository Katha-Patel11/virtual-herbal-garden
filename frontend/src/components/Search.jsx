import React, { useState, useEffect } from 'react';
import '../styles/search.css';
import Header from './Header';
import Footer from './Footer';

const Search = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);
  
    // Categorized symptoms for better organization
    const symptomCategories = {
      'General': ["Fever","Fatigue","Malaise","Weight loss","chills","night_sweats","loss_of_appetite","general_discomfort","high_fever","low_grade_fever"],
      'Head & Mind': ["headache","confusion","dizziness","blurred_vision","memory_loss","difficulty_concentrating","hallucinations"],
      'Respiratory': ["cough","shortness_of_breath","chest_pain","wheezing","sputum_production","nasal_congestion","sore_throat","runny_nose","dry_cough","productive_cough"],
      'Digestive': ["diarrhea","nausea","vomiting","abdominal_pain","constipation","bloating"],
      'Sleep': ["insomnia","excessive_sleepiness"],
      'Skin': ["rash","itching","skin_discoloration","hives","dry_skin"],
      'Pain': ["joint_pain","muscle_pain","back_pain","neck_pain","abdominal_pain","chest_pain"],
      'Emotional': ["anxiety","depression","mood_swings","irritability"]
    };
  
    // Toggle a symptom selection
    const handleSymptomToggle = (symptom) => {
      setSelectedSymptoms(prevSelected => 
        prevSelected.includes(symptom)
          ? prevSelected.filter(s => s !== symptom)
          : [...prevSelected, symptom]
      );
    };
  
    // Clear all selected symptoms
    const clearSelections = () => {
      setSelectedSymptoms([]);
      setPossibleDiseases([]);
      setRemedies([]);
      setSearchCompleted(false);
    };
  
    // Toggle category expansion
    const toggleCategory = (category) => {
      if (expandedCategory === category) {
        setExpandedCategory(null);
      } else {
        setExpandedCategory(category);
      }
    };
    const searchRemedies = () => {
      setLoading(true);
    };

  return (
    <>
    <Header/>
    <div className="herbal-remedy-container">
      <div className="hero-section">
        <h1>Natural Remedies Finder</h1>
        <p>Select your symptoms to discover potential conditions and nature's healing solutions</p>
      </div>

      <div className="search-section">
        <div className="symptoms-selection">
          <h2>What symptoms are you experiencing?</h2>
          <p className="selection-hint">Select all that apply</p>

          <div className="symptoms-categories">
            {Object.entries(symptomCategories).map(([category, symptoms]) => (
              <div key={category} className="category-container">
                <div 
                  className="category-header" 
                  onClick={() => toggleCategory(category)}
                >
                  <h3>{category}</h3>
                  <span className={`arrow ${expandedCategory === category ? 'down' : 'right'}`}>
                    {expandedCategory === category ? '▼' : '▶'}
                  </span>
                </div>
                
                {expandedCategory === category && (
                  <div className="symptoms-grid">
                    {symptoms.map(symptom => (
                      <label key={symptom} className="symptom-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedSymptoms.includes(symptom)}
                          onChange={() => handleSymptomToggle(symptom)}
                        />
                        <span className="checkbox-custom"></span>
                        {symptom}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="action-buttons">
            <button 
              className="search-button" 
              onClick={searchRemedies}
              disabled={selectedSymptoms.length === 0}
            >
              Find Conditions & Remedies
            </button>
            <button 
              className="clear-button" 
              onClick={clearSelections}
              disabled={selectedSymptoms.length === 0}
            >
              Clear All
            </button>
          </div>

          {selectedSymptoms.length > 0 && (
            <div className="selected-symptoms">
              <p>Selected symptoms: {selectedSymptoms.length}</p>
              <div className="symptom-tags">
                {selectedSymptoms.map(symptom => (
                  <span key={symptom} className="symptom-tag">
                    {symptom}
                    <button 
                      onClick={() => handleSymptomToggle(symptom)} 
                      className="remove-tag"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="disclaimer">
        <p><strong>Disclaimer:</strong> The information provided is for educational purposes only. 
        Always consult with a healthcare professional before using herbal remedies or if you suspect 
        you have a medical condition requiring attention.</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Search;