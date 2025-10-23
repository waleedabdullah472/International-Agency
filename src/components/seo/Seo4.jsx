import React from "react";
import "./Seo4.css";

const Seo4 = () => (
  <section className="seo4-section">
    <div className="seo4-container">

      <div className="seo4-row">
        {/* Left side: Image */}
        <div className="seo4-left">
          <img src="./map.svg" alt="SEO Growth" className="seo4-image" />
        </div>

        {/* Center: Text */}
        <div className="seo4-center">
          <h2 className="seo4-heading">186% Increase in Organic Traffic
</h2>
          <p className="seo4-description">
          Our team was willing to pitch in to assist this healthcare provider become more visible online and in their neighborhood. By utilizing cutting-edge WordPress development, SEO, social media management, and PPC.
          </p>
        </div>

        {/* Right side: Button */}
        <div className="seo4-right">
          <button className="seo4-btn">Get a Free Quote
</button>
        </div>
      </div>

    </div>
  </section>
);

export default Seo4;
