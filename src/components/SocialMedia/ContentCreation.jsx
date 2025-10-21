// src/components/SocialMedia/ContentCreation.jsx
import React from 'react';
import styles from './ContentCreation.module.css';

const ContentCreation = () => (
  <section className={styles.serviceSection}>
    <h2 className={styles.sectionTitle}>Content Creation 📸</h2>
    <p className={styles.description}>
      High-quality visual and written content, including photos, videos, and compelling captions.
    </p>
    <ul className={styles.featureList}>
      <li>Graphic Design</li>
      <li>Videography & Editing</li>
      <li>Copywriting</li>
    </ul>
  </section>
);

export default ContentCreation;