import React from 'react';
import './Seo17.css';

const Seo17 = () => {
  const onPageItems = [
    "Search Intent",
    "Title Tags",
    "Permalink Structures",
    "Image Alt Tags",
    "Keyword Distribution",
    "Keyword Mapping",
    "Meta Structure",
    "Internal Linking",
    "Text to HTML Ratio",
  ];

  return (
    <section className="seo17-section">
      <div className="seo17-container">
        {/* Left Side */}
        <div className="seo17-left">
          <h2>On-Page Optimization</h2>
          <p>
            To improve rankings, we need a strong base and that comes with On-page SEO,
            which covers everything on your webpage.
          </p>
        </div>

        {/* Right Side */}
        <div className="seo17-right">
          <h3>Included:</h3>
          <div className="onpage-buttons">
            {onPageItems.map((item, index) => (
              <button key={index} className="onpage-btn">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo17;
