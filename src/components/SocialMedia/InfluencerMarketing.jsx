import React from 'react';
import styles from './InfluencerMarketing.module.css';

const InfluencerMarketing = () => (
  <div className={styles.influencerMarketing}>
    {/* Left Column (5/12 width) - Single Card */}
    <div className={styles.leftColumn}>
      <div className={styles.leftCard}>
        <h2 className={styles.mainHeading}>Industries We Cater</h2>
        <p>
          **Innovative and Creative Social Media Management Services**
        </p>
        <p>
          With expertise in every sector, our social media management services expand to all horizons. From top-notch real estate brands, e-commerce stores, and tech companies to healthcare providers, educational institutes, and corporate clients. Our services are designed with innovation and creativity at its core.
        </p>

        <ul className={styles.keyFeatures}>
          <li><span className={styles.featureIcon}>✔️</span> ROI Focused Strategies</li>
          <li><span className={styles.featureIcon}>✔️</span> Timely Execution & Delivery</li>
          <li><span className={styles.featureIcon}>✔️</span> Advanced Ad Management</li>
        </ul>

        <button className={styles.ctaButton}>
          Get Started Today
        </button>
      </div>
    </div>

    {/* Right Column (7/12 width) - Six Cards, 2 per row */}
    <div className={styles.rightColumn}>
      {[
        { 
          heading: "E-commerce Brands", 
          text: "Drive sales and build brand loyalty with targeted campaigns tailored for online stores." 
        },
        { 
          heading: "Real Estate", 
          text: "Showcase properties and connect with potential buyers using visually rich content strategies." 
        },
        { 
          heading: "Healthcare Providers", 
          text: "Build trust and disseminate vital information while maintaining compliance and sensitivity." 
        },
        { 
          heading: "Educational Institutes", 
          text: "Engage students, parents, and alumni with compelling stories and campus life updates." 
        },
        { 
          heading: "Technology & SaaS", 
          text: "Simplify complex products and showcase innovative features to a tech-savvy audience." 
        },
        { 
          heading: "Corporate & B2B", 
          text: "Establish thought leadership and foster professional relationships through strategic content." 
        },
      ].map((card, index) => (
        <div key={index} className={styles.rightCard}>
          <div className={styles.cardImageContainer}>
            <img 
              src="./baby boy.png" 
              alt={`${card.heading} icon`} 
              className={styles.cardImage} 
              loading="lazy"
            />
          </div>
          <h3 className={styles.cardHeading}>{card.heading}</h3>
          <p className={styles.cardText}>{card.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default InfluencerMarketing;