// src/components/SocialMedia/PaidAdvertising.jsx
import React from 'react';
import styles from './PaidAdvertising.module.css';

const PaidAdvertising = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Paid Advertising 💰</h2>
    <p className={styles.description}>
      Creating, managing, and optimizing targeted ad campaigns across various social platforms to maximize ROI.
    </p>
    <ul className={styles.featureList}>
      <li>Ad Copy & Creative</li>
      <li>Audience Targeting</li>
      <li>Budget Management</li>
    </ul>
  </section>
);

export default PaidAdvertising;