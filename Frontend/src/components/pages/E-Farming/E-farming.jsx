import React from 'react';
import './E-farming.css';

function EFarmingPage() {
  return (
    <div className="efarming-page">
      {/* Header Section */}
      <header className="efarming-header">
        <h1>Welcome to E-Farming</h1>
        <p>Your Partner in Growing Your Farming Business</p>
      </header>

      {/* How to Grow Your Business Section */}
      <section className="efarming-grow-business">
        <h2>How to Grow Your Business with Us</h2>
        <div className="business-tips">
          <div className="tip-card">
            <h3>Sell Your Products Online</h3>
            <p>Expand your reach by listing your farm products on our platform and connect with a wider customer base.</p>
          </div>
          <div className="tip-card">
            <h3>Get Expert Advice</h3>
            <p>Receive personalized farming tips from experts to increase crop yield and improve your farming practices.</p>
          </div>
          <div className="tip-card">
            <h3>Explore Market Trends</h3>
            <p>Stay updated with market trends and demand shifts to optimize your product offerings.</p>
          </div>
          <div className="tip-card">
            <h3>Explore Market Trends</h3>
            <p>Stay updated with market trends and demand shifts to optimize your product offerings.</p>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="efarming-resources">
        <h2>Educational Resources</h2>
        <p>Learn about the latest farming techniques, sustainable practices, and how to improve your farm's productivity.</p>
        <div className="resource-cards">
          <div className="resource-card">
            <h3>Sustainable Farming Practices</h3>
            <p>Learn how sustainable farming can increase long-term yields and protect the environment.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="resource-card">
            <h3>Crop Rotation Tips</h3>
            <p>Understand the importance of crop rotation in maintaining healthy soil and maximizing production.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="resource-card">
            <h3>Technology in Farming</h3>
            <p>Discover how technology, like drones and automated systems, can revolutionize your farm's efficiency.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="resource-card">
            <h3>Technology in Farming</h3>
            <p>Discover how technology, like drones and automated systems, can revolutionize your farm's efficiency.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="efarming-news">
        <h2>Latest Farming News</h2>
        <div className="news-articles">
          <div className="news-card">
            <h3>Government Subsidies for Farmers in 2024</h3>
            <p>Stay informed about new government initiatives and subsidies aimed at helping farmers.</p>
            <button className="btn-read-more">Read More</button>
          </div>
          <div className="news-card">
            <h3>Weather Patterns and Crop Forecasting</h3>
            <p>Learn how weather predictions can help farmers plan for planting and harvesting.</p>
            <button className="btn-read-more">Read More</button>
          </div>
          <div className="news-card">
            <h3>Global Market Demand for Organic Produce</h3>
            <p>Find out how the global demand for organic products is shaping the agricultural market.</p>
            <button className="btn-read-more">Read More</button>
          </div>
          <div className="news-card">
            <h3>Global Market Demand for Organic Produce</h3>
            <p>Find out how the global demand for organic products is shaping the agricultural market.</p>
            <button className="btn-read-more">Read More</button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="efarming-success-stories">
        <h2>Success Stories</h2>
        <p>Be inspired by stories from other farmers who have successfully grown their business using our platform.</p>
        <div className="success-cards">
          <div className="success-card">
            <h3>Farm 1: From Local Market to Global Reach</h3>
            <p>Learn how this farm expanded its operations and reached customers across the country.</p>
            <button className="btn-read-more">Read Story</button>
          </div>
          <div className="success-card">
            <h3>Farm 2: Boosting Yields with New Techniques</h3>
            <p>Find out how innovative farming techniques helped increase productivity and profitability.</p>
            <button className="btn-read-more">Read Story</button>
          </div>
          <div className="success-card">
            <h3>Farm 2: Boosting Yields with New Techniques</h3>
            <p>Find out how innovative farming techniques helped increase productivity and profitability.</p>
            <button className="btn-read-more">Read Story</button>
          </div>
          <div className="success-card">
            <h3>Farm 2: Boosting Yields with New Techniques</h3>
            <p>Find out how innovative farming techniques helped increase productivity and profitability.</p>
            <button className="btn-read-more">Read Story</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EFarmingPage;
