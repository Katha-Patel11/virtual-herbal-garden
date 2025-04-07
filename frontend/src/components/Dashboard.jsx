import React, { useState } from 'react';
import Footer from './Footer';
import "../styles/dashboard.css";
import Header from './Header';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="dashboard-container">
      <Header/>

      <main className="main-content">
        <section className="left-section">
          <h1 className="section-title">Find Herbal Cure</h1>
          <p className="section-description">
            Discover natural remedies for your health concerns with traditional herbal wisdom.
          </p>
          <button className="action-button find-button">Find</button>
        </section>

        <div className="center-image">
          <div className="circle-image"></div>
        </div>

        <section className="right-section">
          <h1 className="section-title">Browse Plants</h1>
          <p className="section-description">
            Browse a variety of medicinal plants and learn about their healing properties.
          </p>
          <button className="action-button browse-button">Browse</button>
        </section>
      </main>

      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for various plants"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <section class="featured-plants">
        <h2 class="featured-title">Explore Herbal Plants</h2>
        
        <div class="plants-grid">
          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant1.jpg" alt="Basil" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Basil</h3>
              <p class="plant-description">A culinary herb with antimicrobial properties that may help fight infections and boost immunity.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>
          
          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant2.jpg" alt="Mint" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Mint</h3>
              <p class="plant-description">Known for its digestive benefits, mint can also help relieve headaches and improve respiratory health.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>
          
          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant3.jpg" alt="Turmeric" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Turmeric</h3>
              <p class="plant-description">A powerful anti-inflammatory herb that may help reduce pain and improve brain function.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>
          
          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant4.jpg" alt="Aloe Vera" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Aloe Vera</h3>
              <p class="plant-description">Soothes skin irritations, burns, and helps with digestive issues. Rich in antioxidants.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>
          
          {/* <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant5.jpg" alt="Chamomile" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Chamomile</h3>
              <p class="plant-description">Helps with sleep and relaxation. Can reduce anxiety and soothe digestive discomfort.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>
          
          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant6.jpg" alt="Ginger" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Ginger</h3>
              <p class="plant-description">Powerful medicinal root that fights nausea and has anti-inflammatory properties.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>

          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant6.jpg" alt="Ginger" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Ginger</h3>
              <p class="plant-description">Powerful medicinal root that fights nausea and has anti-inflammatory properties.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div>

          <div class="plant-card">
            <div class="plant-image-container">
              <img src="path/to/plant6.jpg" alt="Ginger" class="plant-image"></img>
            </div>
            <div class="plant-info">
              <h3 class="plant-name">Ginger</h3>
              <p class="plant-description">Powerful medicinal root that fights nausea and has anti-inflammatory properties.</p>
              <a href="#" class="plant-link">Learn more</a>
            </div>
          </div> */}
        </div>
      </section>

      <section class="benefits-section">
        <h2 class="benefits-title">Benefits of Herbal Remedies</h2>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🌿</div>
            <h3 class="benefit-title">Natural Healing</h3>
            <p class="benefit-description">Herbal remedies work with your body's natural processes to promote healing without harsh chemicals.</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">🔄</div>
            <h3 class="benefit-title">Holistic Approach</h3>
            <p class="benefit-description">Plants contain complex compounds that work together to address multiple aspects of health.</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">🌍</div>
            <h3 class="benefit-title">Sustainable Practice</h3>
            <p class="benefit-description">Growing and using herbs connects us to tradition and supports environmental sustainability.</p>
          </div>
          
        </div>
      </section>
      <Footer></Footer>
      
    </div>
  );
};

export default Dashboard;