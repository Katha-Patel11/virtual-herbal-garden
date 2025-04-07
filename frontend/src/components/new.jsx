import React, { useState, useEffect } from 'react';
import '../styles/search.css';
import Header from './Header';
import Footer from './Footer';

const Search = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [possibleDiseases, setPossibleDiseases] = useState([]);
    const [remedies, setRemedies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchCompleted, setSearchCompleted] = useState(false);
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
  
    /* // Mock disease data - in a real app, this would come from your backend
    const mockDiseases = [
      {
        id: 1,
        name: 'Common Cold',
        symptoms: ['Congestion', 'Runny Nose', 'Sore Throat', 'Cough', 'Fatigue'],
        description: 'A viral infection affecting the upper respiratory tract.',
        remedies: [1, 5]
      },
      {
        id: 2,
        name: 'Anxiety Disorder',
        symptoms: ['Anxiety', 'Restlessness', 'Poor Concentration', 'Insomnia', 'Irritability'],
        description: 'A mental health condition characterized by feelings of worry, anxiety, or fear.',
        remedies: [1, 3]
      },
      {
        id: 3,
        name: 'Indigestion',
        symptoms: ['Bloating', 'Stomachache', 'Heartburn', 'Nausea'],
        description: 'Discomfort or pain in the upper abdomen often occurring after eating.',
        remedies: [2, 4]
      },
      {
        id: 4,
        name: 'Tension Headache',
        symptoms: ['Headache', 'Stress', 'Muscle Pain', 'Fatigue'],
        description: 'A common type of headache that causes pain in the head, neck, and behind the eyes.',
        remedies: [3, 4]
      },
      {
        id: 5,
        name: 'Seasonal Allergies',
        symptoms: ['Congestion', 'Runny Nose', 'Itching', 'Sore Throat'],
        description: 'An allergic reaction to seasonal environmental triggers like pollen.',
        remedies: [5]
      },
      {
        id: 6,
        name: 'Insomnia',
        symptoms: ['Insomnia', 'Restlessness', 'Fatigue', 'Poor Concentration'],
        description: 'A sleep disorder characterized by difficulty falling asleep or staying asleep.',
        remedies: [1, 3]
      }
    ];
  
    // Example remedies data - in a real app, this would come from your backend
    const mockRemedies = [
      {
        id: 1,
        name: 'Chamomile',
        symptoms: ['Anxiety', 'Insomnia', 'Indigestion'],
        diseases: ['Anxiety Disorder', 'Insomnia'],
        description: 'A gentle herb that helps calm nerves and aids digestion.',
        preparation: 'Steep 1 tsp dried flowers in hot water for 5-10 minutes.',
        imageUrl: '/images/chamomile.jpg'
      },
      {
        id: 2,
        name: 'Peppermint',
        symptoms: ['Indigestion', 'Headache', 'Nausea'],
        diseases: ['Indigestion', 'Tension Headache'],
        description: 'Cooling herb that soothes digestive issues and clears the head.',
        preparation: 'Steep fresh or dried leaves in hot water for 5-7 minutes.',
        imageUrl: '/images/peppermint.jpg'
      },
      {
        id: 3,
        name: 'Lavender',
        symptoms: ['Anxiety', 'Insomnia', 'Headache', 'Stress'],
        diseases: ['Anxiety Disorder', 'Insomnia', 'Tension Headache'],
        description: 'Aromatic herb with calming properties, excellent for anxiety and sleep issues.',
        preparation: 'Use as a tea or essential oil for aromatherapy.',
        imageUrl: '/images/lavender.jpg'
      },
      {
        id: 4,
        name: 'Ginger',
        symptoms: ['Nausea', 'Indigestion', 'Inflammation', 'Muscle Pain'],
        diseases: ['Indigestion', 'Tension Headache'],
        description: 'Warming herb that helps with digestive issues and inflammation.',
        preparation: 'Steep fresh sliced ginger in hot water for 10 minutes.',
        imageUrl: '/images/ginger.jpg'
      },
      {
        id: 5,
        name: 'Echinacea',
        symptoms: ['Congestion', 'Sore Throat', 'Fever', 'Fatigue'],
        diseases: ['Common Cold', 'Seasonal Allergies'],
        description: 'Immune-boosting herb often used for cold and flu symptoms.',
        preparation: 'Take as a tincture or steep dried herb in hot water.',
        imageUrl: '/images/echinacea.jpg'
      },
    ]; */
  
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
  
    // Check if a disease matches the selected symptoms
    /* const calculateDiseaseMatch = (disease, selectedSymptoms) => {
      const matchingSymptoms = disease.symptoms.filter(symptom => 
        selectedSymptoms.includes(symptom)
      );
      
      const matchPercentage = (matchingSymptoms.length / disease.symptoms.length) * 100;
      
      return {
        ...disease,
        matchingSymptoms,
        matchPercentage: Math.round(matchPercentage)
      };
    }; */
  
    // Search for diseases and remedies based on selected symptoms
    const searchRemedies = () => {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        // Find matching diseases with a match percentage
        const matchedDiseases = mockDiseases
          .map(disease => calculateDiseaseMatch(disease, selectedSymptoms))
          .filter(disease => disease.matchingSymptoms.length > 0)
          .sort((a, b) => b.matchPercentage - a.matchPercentage);
        
        // Get remedies for these diseases
        const relevantRemedyIds = new Set();
        matchedDiseases.forEach(disease => {
          disease.remedies.forEach(remedyId => {
            relevantRemedyIds.add(remedyId);
          });
        });
        
        const matchedRemedies = mockRemedies
          .filter(remedy => relevantRemedyIds.has(remedy.id))
          .sort((a, b) => {
            const aMatches = a.symptoms.filter(symptom => selectedSymptoms.includes(symptom)).length;
            const bMatches = b.symptoms.filter(symptom => selectedSymptoms.includes(symptom)).length;
            return bMatches - aMatches;
          });
        
        setPossibleDiseases(matchedDiseases);
        setRemedies(matchedRemedies);
        setLoading(false);
        setSearchCompleted(true);
      }, 800);
      
      // In a real application, you would call your backend API:
      // fetch('/api/search', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ symptoms: selectedSymptoms })
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     setPossibleDiseases(data.diseases);
      //     setRemedies(data.remedies);
      //     setLoading(false);
      //     setSearchCompleted(true);
      //   });
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

        {/* <div className={`results-section ${searchCompleted ? 'active' : ''}`}>
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          ) : (
            <>
              {searchCompleted && possibleDiseases.length === 0 ? (
                <div className="no-results">
                  <p>No matching conditions found for your symptoms.</p>
                  <p>Try selecting different symptoms or consult with a healthcare professional.</p>
                </div>
              ) : (
                <>
                  {searchCompleted && (
                    <div className="results-container">
                      <div className="possible-diseases">
                        <h2>Possible Conditions</h2>
                        <p className="disclaimer-subtle">Based on your symptoms, you might be experiencing:</p>
                        
                        <div className="diseases-list">
                          {possibleDiseases.map(disease => (
                            <div key={disease.id} className="disease-card">
                              <div className="disease-header">
                                <h3>{disease.name}</h3>
                                <div className="match-indicator">
                                  <div className="match-bar">
                                    <div 
                                      className="match-fill" 
                                      style={{ width: `${disease.matchPercentage}%` }}
                                    ></div>
                                  </div>
                                  <span className="match-percentage">{disease.matchPercentage}% match</span>
                                </div>
                              </div>
                              <p className="disease-description">{disease.description}</p>
                              <div className="matching-symptoms">
                                <p>Matching symptoms:</p>
                                <div className="symptom-tags">
                                  {disease.matchingSymptoms.map(symptom => (
                                    <span key={symptom} className="symptom-tag highlight">
                                      {symptom}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="recommended-remedies">
                        <h2>Recommended Herbal Remedies</h2>
                        <p className="remedies-intro">These natural remedies may help with your symptoms:</p>
                        
                        <div className="remedies-grid">
                          Show all remedies
                          {remedies.map(remedy => (
                            <div key={remedy.id} className="remedy-card">
                              <div className="remedy-image" style={{ backgroundImage: `url(${remedy.imageUrl})` }}>
                                <h3>{remedy.name}</h3>
                              </div>
                              <div className="remedy-details">
                                <p className="remedy-description">{remedy.description}</p>
                                <div className="remedy-for-diseases">
                                  <p>May help with:</p>
                                  <div className="disease-tags">
                                    Show all diseases
                                    {remedy.diseases.filter(disease => 
                                      possibleDiseases.some(d => d.name === disease)
                                    ).map(disease => (
                                      <span key={disease} className="disease-tag">
                                        {disease}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div className="matching-symptoms">
                                  <p>Addresses these symptoms:</p>
                                  <div className="symptom-tags">
                                    Show all symptom
                                    {remedy.symptoms
                                      .filter(symptom => selectedSymptoms.includes(symptom))
                                      .map(symptom => (
                                        <span key={symptom} className="symptom-tag highlight">
                                          {symptom}
                                        </span>
                                      ))}
                                  </div>
                                </div>
                                <div className="remedy-preparation">
                                  <p><strong>Preparation:</strong> Write preparation part here</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div> */}
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