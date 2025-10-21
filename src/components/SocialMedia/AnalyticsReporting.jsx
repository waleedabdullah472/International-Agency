// src/components/SocialMedia/AnalyticsReporting.jsx
import React from 'react';
import styles from './AnalyticsReporting.module.css';

const AnalyticsReporting = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Analytics & Reporting 📊</h2>
    <p className={styles.description}>
      Tracking, measuring, and reporting on key metrics to provide actionable insights and continuous improvement.
    </p>
    <ul className={styles.featureList}>
      <li>Monthly Performance Reviews</li>
      <li>A/B Testing Analysis</li>
      <li>Custom Dashboard Setup</li>
    </ul>
  </section>
);

export default AnalyticsReporting;