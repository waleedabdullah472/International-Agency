import React from 'react';
import styles from './AnalyticsReporting.module.css';

const AnalyticsReporting = () => (
  <div className={styles.analyticsReporting}>
    
    {/* --- First Row: Text (Left) | Image (Right) --- */}
    <div className={styles.contentRow}>
      
      {/* Left Section: Heading -> P -> Button */}
      <div className={styles.row1Left}>
        <h2 className={styles.sectionHeading}>Data-Driven Strategy & Optimization</h2>
        <p className={styles.sectionParagraph}>
          Our analytics transform raw social media data into clear, actionable insights. We focus on measuring **true ROI**, optimizing campaigns mid-flight, and ensuring every marketing dollar is spent effectively.
        </p>
        <button className={styles.ctaButton}>
          Start Analyzing My Campaigns
        </button>
      </div>
      
      {/* Right Section: Image */}
      <div className={styles.row1Right}>
        <div className={styles.imageContainer}>
          <img 
            src="./liner.png" 
            alt="Dashboard displaying data metrics" 
            className={styles.rowImage} 
            loading="lazy"
          />
        </div>
      </div>
      
    </div>

    {/* --- Second Row: Image (Left) | Text (Right) --- */}
    <div className={styles.contentRow}>
      
      {/* Left Section: Image */}
      <div className={styles.row2Left}>
        <div className={styles.imageContainer}>
          <img 
            src="./mans.png" 
            alt="Illustrated monthly report with charts" 
            className={styles.rowImage} 
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Right Section: Heading -> P -> Button */}
      <div className={styles.row2Right}>
        <h2 className={styles.sectionHeading}>Transparent & Comprehensive Reporting</h2>
        <p className={styles.sectionParagraph}>
          Receive comprehensive **monthly reports** that are easy to understand. We detail key findings, competitor benchmarks, and provide clear strategic recommendations for the upcoming cycle.
        </p>
        <button className={styles.ctaButton}>
          Download a Sample Report
        </button>
      </div>

    </div>
    
    {/* --- Third Row: Text (Left) | Image (Right) --- (NEW ROW) */}
    <div className={styles.contentRow}>
        
      {/* Left Section: Heading -> P -> Button */}
      <div className={styles.row3Left}>
        <h2 className={styles.sectionHeading}>Predictive Modeling & Future Planning</h2>
        <p className={styles.sectionParagraph}>
          Go beyond simple reporting with **predictive analytics**. We leverage historical performance to model future outcomes, helping you allocate budget for maximum long-term growth and success.
        </p>
        <button className={styles.ctaButton}>
          Explore Predictive Features
        </button>
      </div>
      
      {/* Right Section: Image */}
      <div className={styles.row3Right}>
        <div className={styles.imageContainer}>
          <img 
            src="./hand.png" // Placeholder image source
            alt="Chart showing a future trend prediction" 
            className={styles.rowImage} 
            loading="lazy"
          />
        </div>
      </div>
      
    </div>
    {/* --- END OF NEW ROW --- */}

  </div>
);

export default AnalyticsReporting;