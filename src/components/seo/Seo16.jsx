import React from 'react';
import './Seo16.css';

const Seo16 = () => {
  const auditItems = [
    "Error Identification",
    "Sitespeed Evaluation",
    "Site Warnings",
    "Robots.txt File",
    "Sitemap Issues",
    "Indexing & Crawling",
    "Meta Structure",
    "Content Analysis",
    "HrefLang",
    "SSL Certificate",
  ];

  return (
    <section className="seo16-section">
      <div className="seo16-container">
        {/* Left Side */}
        <div className="seo16-left">
          <h2>Website Audit</h2>
          <p>
            Auditing over 140 on-page and technical SEO issues from surface-level to in-depth analysis, 
            website audit is a core part of SEO services.
          </p>
        </div>

        {/* Right Side */}
        <div className="seo16-right">
          <h3>Included:</h3>
          <div className="audit-buttons">
            {auditItems.map((item, index) => (
              <button key={index} className="audit-btn">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo16;
