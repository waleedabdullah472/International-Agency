import React from 'react';
import './Seo22.css';

const Seo22 = () => {
  return (
    <div className="seo-component-22">
      <div className="seo22-container">

        {/* === Card 1 === */}
        <div className="seo22-card">
          <img src="./lion.jpg" alt="SEO Blog 1" className="seo22-image" />
          <h3>We are Certified Agency Partner on Semrush</h3>
          <a href="#" className="seo22-readmore">Read More »</a>
          <p className="seo22-date">October 18, 2025</p>
        </div>

        {/* === Card 2 === */}
        <div className="seo22-card">
          <img src="./lion.jpg" alt="SEO Blog 2" className="seo22-image" />
          <h3>How to Check If a Website Is Real or a Scam – A Complete 2025 Guide</h3>
          <a href="#" className="seo22-readmore">Read More »</a>
          <p className="seo22-date">October 18, 2025</p>
        </div>

        {/* === Card 3 === */}
        <div className="seo22-card seo22-info-card">
          <h3>Learn SEO From Our Blog Section</h3>
          <p>
            Increasing revenue through SEO is a tried and true tactic. The question is: 
            How does it work, what are the costs, which type of SEO to use and so much more? 
            We have answered some frequently asked questions for you. If you’ve any more 
            questions, feel free to contact us.
          </p>
          <button>Explore Blogs</button>
        </div>

      </div>
    </div>
  );
};

export default Seo22;
