// src/components/SocialMedia/CommunityManagement.jsx
import React from 'react';
import styles from './CommunityManagement.module.css';

const CommunityManagement = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Community Management 💬</h2>
    <p className={styles.description}>
      Engaging with your audience, responding to comments and messages, and fostering a positive online community.
    </p>
    <ul className={styles.featureList}>
      <li>24/7 Monitoring</li>
      <li>Direct Message Response</li>
      <li>Sentiment Analysis</li>
    </ul>
  </section>
);

export default CommunityManagement;