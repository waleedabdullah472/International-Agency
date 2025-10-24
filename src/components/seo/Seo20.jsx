import React from 'react';
import './Seo20.css'; // CSS Import for styling

const Seo20 = () => {
  return (
    <section className="seo20-section">
      <div className="seo20-container">

        {/* LEFT SIDE */}
        <div className="seo20-left">
          <h2>Monthly Reporting</h2>
          <p>
            The report includes all key performance indicators that show the 
            monthly SEO performance — such as rankings, traffic, conversions, 
            and other essential metrics that demonstrate growth and results.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo20-right">
          <h3>Included:</h3>
          <div className="seo20-buttons">
            <button>Site Health Audit</button>
            <button>Backlinks</button>
            <button>Organic Traffic Progress</button>
            <button>Keyword Ranking Progress</button>
            <button>Market Competition</button>
            <button>Keyword CTR</button>
            <button>Current Goal Achievements</button>
            <button>Future Goals & Strategy</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Seo20;
