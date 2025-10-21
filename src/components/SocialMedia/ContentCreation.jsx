// src/components/SocialMedia/ContentCreation.jsx
import React from 'react';
import styles from './ContentCreation.module.css';

const ContentCreation = () => (
  <div className={styles.contentSection}>
    <div className={styles.container}>
      {/* Centered Header */}
      <h2 className={styles.centeredTitle}>What Is Social Media Management?</h2>

      <div className={styles.textBlock}>
        {/* Paragraph 1 */}
        <p className={styles.paragraph}>
          <strong>57 percent of consumers actively follow a brand's social page to stay informed about new products or services.</strong> This underscores the critical importance for brands to curate content that not only fosters connection and facilitates meaningful communication but also nurtures a sense of community among their audience. Rather than merely inundating users with promotional material devoid of substance, brands must focus on crafting content that resonates with their audience on a deeper level.
        </p>

        {/* Paragraph 2 */}
        <p className={styles.paragraph}>
          This is where the realm of <strong>social media management</strong> comes into play. Often referred to as <strong>social media marketing management</strong>.
        </p>
        
        {/* Paragraph 3 */}
        <p className={styles.paragraph}>
          At Digital Otters, we adopt a <strong>holistic approach</strong> to effectively managing the social media accounts of our clients. As a leading <strong>Social Media Marketing Agency</strong>, our expertise lies in seamlessly blending organic and paid solutions to yield the most efficient and profitable outcomes. As a result, our <strong>Social Media Management Agency</strong> is dedicated to delivering tangible results that drive engagement, foster brand loyalty, and ultimately contribute to sustained growth in the digital sphere.
        </p>
      </div>
    </div>
  </div>
);

export default ContentCreation;