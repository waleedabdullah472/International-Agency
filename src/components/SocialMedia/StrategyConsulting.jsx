// src/components/SocialMedia/StrategyConsulting.jsx
import React from 'react';
import styles from './StrategyConsulting.module.css';

const StrategyConsulting = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Strategy Consulting 🧠</h2>
    <p className={styles.description}>
      Developing a cohesive, goal-driven social media roadmap tailored to your business objectives.
    </p>
    <ul className={styles.featureList}>
      <li>Audience Definition</li>
      <li>Competitive Analysis</li>
      <li>Goal Setting (KPIs)</li>
    </ul>
  </section>
);

export default StrategyConsulting;