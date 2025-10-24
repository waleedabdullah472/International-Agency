import React from 'react';
import './Seo18.css'; // CSS file for styling

const Seo18 = () => {
  return (
    <section className="seo18-section">
      <div className="seo18-container">

        {/* LEFT SIDE - TEXT */}
        <div className="seo18-left">
          <h2>Technical Optimization</h2>
          <p>
            A website can only rank if the search engine can find it — that’s what
            technical SEO does. It improves your visibility for search engines.
          </p>
        </div>

        {/* RIGHT SIDE - BUTTONS */}
        <div className="seo18-right">
          <h3>Included:</h3>
          <div className="seo18-buttons">
            <button>hreflang Attributes</button>
            <button>4xx Errors</button>
            <button>Crawlability & Indexing</button>
            <button>Robots.txt file</button>
            <button>Markup Optimization</button>
            <button>Sitemap Optimization</button>
            <button>JavaScript and CSS files</button>
            <button>Core Web Vitals</button>
            <button>SSL Status</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Seo18;
