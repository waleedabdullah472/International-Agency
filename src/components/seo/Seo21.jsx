import React from 'react';
import './Seo21.css';

const Seo21 = () => {
  // Example images — using same image repeated for layout
  const images = [
    './facebook.webp', './facebook.webp', './facebook.webp',
    './facebook.webp', './facebook.webp', './facebook.webp', './facebook.webp',
    './facebook.webp', './facebook.webp', './facebook.webp'
  ];

  return (
    <section className="seo21-section">
      <div className="seo21-container">

        {/* LEFT SIDE */}
        <div className="seo21-left">
          <h2>Our Social Media Presence</h2>
          <p>
            We build meaningful connections across leading social platforms. 
            Our team crafts engaging strategies to expand your online visibility 
            and ensure your brand stays ahead of the competition.
          </p>
          <button>Learn More</button>
        </div>

        {/* RIGHT SIDE - Image Grid */}
        <div className="seo21-right">
          <div className="seo21-gallery">
            {images.map((src, index) => (
              <div className="seo21-image" key={index}>
                <img src={src} alt={`social-${index}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Seo21;
