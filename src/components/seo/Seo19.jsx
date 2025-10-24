import React from 'react';
import './Seo19.css'; // CSS Import for styling

const Seo19 = () => {
  return (
    <section className="seo19-section">
      <div className="seo19-container">

        {/* LEFT SIDE */}
        <div className="seo19-left">
          <h2>Off-Page Optimization</h2>
          <p>
            It is the set of practices that help build your website’s external relations — 
            improving your site’s reputation in the eyes of search engines. 
            Off-page optimization strengthens authority, trust, and visibility.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="seo19-right">
          <h3>Included:</h3>
          <div className="seo19-buttons">
            <button>Link Building</button>
            <button>Content Marketing</button>
            <button>Public Relations</button>
            <button>Social Media Presence</button>
            <button>Influencer Marketing</button>
            <button>Local SEO</button>
            <button>Guest Posting</button>
            <button>Brand Mentions</button>
            <button>Pillow Links</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Seo19;
