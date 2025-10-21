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
          57 percent of consumers actively follow a brand's social page to stay informed about new products or services. This underscores the critical importance for brands to curate content that not only fosters connection and facilitates meaningful communication but also nurtures a sense of community among their audience. Rather than merely inundating users with promotional material devoid of substance, brands must focus on crafting content that resonates with their audience on a deeper level.
        </p>

        {/* Paragraph 2 */}
        <p className={styles.paragraph}>
          This is where the realm of social media management comes into play. Often referred to as social media marketing management.
        </p>
        
        {/* Paragraph 3 */}
        <p className={styles.paragraph}>
          At Digital Otters, we adopt a holistic approach to effectively managing the social media accounts of our clients. As a leading Social Media Marketing Agency, our expertise lies in seamlessly blending organic and paid solutions to yield the most efficient and profitable outcomes. As a result, our Social Media Management Agency is dedicated to delivering tangible results that drive engagement, foster brand loyalty, and ultimately contribute to sustained growth in the digital sphere.
        </p>
      </div>
    </div>
  </div>
);

export default ContentCreation;