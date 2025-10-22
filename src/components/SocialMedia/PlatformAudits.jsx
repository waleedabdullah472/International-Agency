// src/components/SocialMedia/PlatformAudits.jsx
import React from 'react';
import { FaCheckCircle, FaRocket, FaUserFriends } from 'react-icons/fa';
import styles from './PlatformAudits.module.css';

// Component for the checkmark list item
const FeatureItem = ({ text }) => (
  <li className={styles.featureItem}>
    <FaCheckCircle className={styles.checkIcon} />
    <span>{text}</span>
  </li>
);

const PlatformAudits = () => (
  <section className={styles.serviceSection}>
    
    <header className={styles.header}>
      <h1 className={styles.mainHeading}>Organic vs Paid Social: What's the Difference?</h1>
    </header>

    <div className={styles.contentContainer}>
      
      {/* --- Left Column: Organic Social --- */}
      <div className={styles.card}>
        <div className={styles.cardIconHeader}>
          <FaUserFriends className={styles.cardHeaderIcon} />
          <h2 className={styles.cardHeading}>Organic Social</h2>
        </div>
        
        <p className={styles.cardIntro}>
          This involves leveraging the complimentary tools offered by social networks to enhance brand visibility, share compelling content that resonates with your current audience or followers, and promptly address customer inquiries or feedback.
        </p>
        
        <ul className={styles.featureList}>
          <FeatureItem text="For raising brand awareness" />
          <FeatureItem text="For creating a community on social media" />
          <FeatureItem text="Ideal for audiences in the research phase of their buying cycle" />
          <FeatureItem text="Helps you retain and maintain a relationship with existing customers" />
        </ul>
        
        <button className={styles.actionButton}>Explore Organic Strategy</button>
      </div>

      {/* --- Right Column: Paid Social --- */}
      <div className={styles.card}>
        <div className={styles.cardIconHeader}>
          <FaRocket className={styles.cardHeaderIcon} />
          <h2 className={styles.cardHeading}>Paid Social</h2>
        </div>
        
        <p className={styles.cardIntro}>
          This method involves investing capital to promote your content and brand to a vast, targeted audience pool through sponsored posts, advertisements, and boosted content, offering greater control over reach and demographic targeting.
        </p>
        
        <ul className={styles.featureList}>
          <FeatureItem text="For generating immediate leads and sales" />
          <FeatureItem text="For reaching a precisely defined, new audience" />
          <FeatureItem text="Ideal for audiences ready to make a purchase decision" />
          <FeatureItem text="Helps you scale campaigns quickly and track specific ROI" />
        </ul>
        
        <button className={`${styles.actionButton} ${styles.paidButton}`}>Launch Paid Campaigns</button>
      </div>

    </div>

  </section>
);

export default PlatformAudits;