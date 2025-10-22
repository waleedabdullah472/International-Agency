// src/components/SocialMedia/BrandAwareness.jsx
import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaImage, FaHeadset, FaSearch } from 'react-icons/fa';
import styles from './BrandAwareness.module.css';

// Component for a list item with an icon
const ComparisonItem = ({ text, isCorrect }) => (
  <li className={styles.comparisonItem}>
    {isCorrect ? (
      <FaCheckCircle className={styles.checkIcon} />
    ) : (
      <FaTimesCircle className={styles.timesIcon} />
    )}
    <span>{text}</span>
  </li>
);

// Component for the comparison cards
const Card = ({ title, icon: Icon, points, isOtters }) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <Icon className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
    <ul className={styles.comparisonList}>
      {points.map((point, index) => (
        <ComparisonItem key={index} text={point.text} isCorrect={point.isCorrect} />
      ))}
    </ul>
  </div>
);

const ottersPoints = [
  { text: "Every brand has customers that meet people around, years to give feedback on brands. With that in mind, a great first impression that lasts forever is what you need.", isCorrect: true },
  { text: "A strong social media presence with creatives that create a buzz in the market, is what we give.", isCorrect: true },
  { text: "Why should you choose us? Why should you not, we have everything a social media agency has, just better.", isCorrect: true },
  { text: "We have an In-House SEO Team, dedicated managers, and 24/7 client support.", isCorrect: true },
];

const seoPoints = [
  { text: "Lack of experience in various sectors that assist social media managers, leads to delays.", isCorrect: false },
  { text: "Slow reporting can lead to delayed actions, that can in turn waste ad spend.", isCorrect: false },
  { text: "Generic analytical tools for reporting and monitoring, may not be efficient for high budgeted ad campaigns.", isCorrect: false },
  { text: "S.M.A.R.T. Goals, but limited resources and experience for ideal results and implementation.", isCorrect: true },
];

const typicalAgencyPoints = [
  { text: "Dedicated manager, experienced strategy but needs your help for proper implementation.", isCorrect: true },
  { text: "Third-party tools for reporting with additional costing billed to clients over the retainer cost.", isCorrect: false },
  { text: "Standard checklists for social media profile and ads optimization, may not be enough to increase ROIs.", isCorrect: false },
  { text: "Efficient but unreliable client support during crisis situations and issue management.", isCorrect: false },
];

const BrandAwareness = () => (
  <section className={styles.brandAwareness}>
    
    <header className={styles.header}>
      <h1 className={styles.mainHeading}>Why Choose Our Digital Otters Social Media Management Agency?</h1>
      <p className={styles.introText}>
        Every brand has customers that meet people around, years to give feedback on brands. With that in mind, a great first impression that lasts forever is what you need. A strong social media presence with creatives that create a buzz in the market, is what we give. Why should you choose us? Why should you not, we have everything a social media agency has, just better.
      </p>
    </header>

    {/* --- 6 Image Placeholder Row --- */}
  <div className={styles.imageGrid}>
  {[
    './gg.jpg',
    './ii.jpg',
    './ll.jpg',
    './mm.jpg',
    './ss.jpg',
    './tt.jpg'
  ].map((imgSrc, index) => (
    <div key={index} className={styles.imagePlaceholder}>
      <img src={imgSrc} alt={`Social ${index + 1}`} className={styles.image} />
    </div>
  ))}
</div>

    
    {/* --- Comparison Cards Row --- */}
    <div className={styles.cardsRow}>
      
      <Card 
        title="Digital Otters"
        icon={FaHeadset}
        points={ottersPoints}
        isOtters={true}
      />

      <Card 
        title="In-House SEO Team"
        icon={FaSearch}
        points={seoPoints}
        isOtters={false}
      />

      <Card 
        title="Typical Agencies"
        icon={FaSearch}
        points={typicalAgencyPoints}
        isOtters={false}
      />
    </div>

  </section>
);

export default BrandAwareness;