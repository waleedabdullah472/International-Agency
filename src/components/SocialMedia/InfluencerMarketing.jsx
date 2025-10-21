// src/components/SocialMedia/InfluencerMarketing.jsx
import React from 'react';
import styles from './InfluencerMarketing.module.css';

const InfluencerMarketing = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Influencer Marketing ✨</h2>
    <p className={styles.description}>
      Identifying and collaborating with key influencers to expand your reach and build brand credibility.
    </p>
    <ul className={styles.featureList}>
      <li>Influencer Vetting</li>
      <li>Campaign Negotiation</li>
      <li>Performance Tracking</li>
    </ul>
  </section>
);

export default InfluencerMarketing;