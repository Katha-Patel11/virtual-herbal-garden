import React, { useState } from 'react';
import "../styles/dashboard.css";

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
      <header className="header">
        <div className="logo">Herbal Garden</div>
        <nav className="navigation">
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Herbal Cures</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/register">Login/SignUp</a></li>
          </ul>
        </nav>
      </header>

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
    </div>
  );
};

export default Dashboard;