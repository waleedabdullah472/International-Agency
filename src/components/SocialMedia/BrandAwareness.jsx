import React from 'react';
import styles from './BrandAwareness.module.css';

// Array of image paths (keep the original paths)
const images = [
    './gg.jpg',
    './ii.jpg',
    './ll.jpg',
    './mm.jpg',
    './ss.jpg',
    './tt.jpg'
];

// Data for the comparison cards
const cardData = [
    {
        header: 'Digital Otters (Us)',
        features: [
            { text: 'In-depth business goals analysis, strategizing, and plan implementation.', isCorrect: true },
            { text: 'Advanced marketing and analytical tools, for increased ad performance and reporting.', isCorrect: true },
            { text: 'Dedicated social media manager, with an experienced team to complete tasks.', isCorrect: true },
            { text: '24/7 help desk and client support to ensure timely resolution of issues and client concerns.', isCorrect: true },
        ],
    },
    {
        header: 'In-House SEO Team',
        features: [
            { text: 'Lack of experience in various sectors that assist social media managers, leads to delays.', isCorrect: false },
            { text: 'Slow reporting can lead to delayed actions, that can in turn waste ad spend.', isCorrect: false },
            { text: 'Generic analytical tools for reporting and monitoring, may not be efficient for high budgeted ad campaigns.', isCorrect: false },
            { text: 'S.M.A.R.T. Goals, but limited resources and experience for ideal results and implementation.', isCorrect: false },
        ],
    },
    {
        header: 'Typical Agencies',
        features: [
            { text: 'Dedicated manager, experienced strategy but needs your help for proper implementation.', isCorrect: true },
            { text: 'Third-party tools for reporting with additional costing billed to clients over the retainer cost.', isCorrect: false },
            { text: 'Standard checklists for social media profile and ads optimization, may not be enough to increase ROIs.', isCorrect: false },
            { text: 'Efficient but unreliable client support during crisis situations and issue management.', isCorrect: false },
        ],
    },
];

const BrandAwareness = () => {
    // Component for rendering a single feature item
    const FeatureItem = ({ text, isCorrect }) => (
        <li className={styles.featureItem}>
            <span className={`${styles.icon} ${isCorrect ? styles.correct : styles.incorrect}`}>
                {isCorrect ? '✔' : '✖'}
            </span>
            <span>{text}</span>
        </li>
    );

    // Component for rendering a single card
    const Card = ({ header, features }) => (
        <div className={styles.card}>
            <h2 className={styles.cardHeader}>{header}</h2>
            <ul className={styles.featureList}>
                {features.map((feature, idx) => (
                    <FeatureItem
                        key={idx}
                        text={feature.text}
                        isCorrect={feature.isCorrect}
                    />
                ))}
            </ul>
        </div>
    );

    return (
        <div className={styles.brandAwarenessContainer}>
            <h1 className={styles.header}>
                Why Choose Our Digital Otters Social Media Management Agency?
            </h1>
            <p className={styles.paragraph}>
                Every brand has customers that meet people around, years to give feedback
                on brands. With that in mind, a great first impression that lasts forever
                is what you need. A strong social media presence with creatives that
                create a buzz in the market, is what we give. Why should you choose us?
                Why should you not, we have everything a social media agency has, just
                better.
            </p>

            {/* Existing Row for Images */}
            <div className={styles.imageRow}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <img src={src} alt={`Brand Partner ${index + 1}`} className={styles.brandImage} />
                    </div>
                ))}
            </div>

            {/* New Row for Comparison Cards */}
            <div className={styles.cardRow}>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        header={card.header}
                        features={card.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandAwareness;