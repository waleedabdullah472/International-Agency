// src/components/SocialMedia/CrisisManagement.jsx
import React from 'react';
import styles from './CrisisManagement.module.css';

const CrisisManagement = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Crisis Management 🚨</h2>
    <p className={styles.description}>
      Having a plan and expert team ready to swiftly and effectively manage negative public relations situations.
    </p>
    <ul className={styles.featureList}>
      <li>Response Protocol Development</li>
      <li>Rapid Communication</li>
      <li>Post-Crisis Review</li>
    </ul>
  </section>
);

export default CrisisManagement;