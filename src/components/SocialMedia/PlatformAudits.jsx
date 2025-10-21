// src/components/SocialMedia/PlatformAudits.jsx
import React from 'react';
import styles from './PlatformAudits.module.css';

const PlatformAudits = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Platform Audits 🔍</h2>
    <p className={styles.description}>
      A comprehensive review of your current social media profiles for optimization, consistency, and compliance.
    </p>
    <ul className={styles.featureList}>
      <li>Profile Optimization</li>
      <li>Brand Voice Consistency</li>
      <li>Compliance Checks</li>
    </ul>
  </section>
);

export default PlatformAudits;