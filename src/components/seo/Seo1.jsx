import React from 'react';
import styles from '../SocialMedia/StrategyConsulting.module.css';

const StrategyConsulting = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        
        {/* === First Row: Main Content Only (Text) === */}
        <div className={styles.contentWrapper}>
          
          {/* Left Content (Row 1) - This becomes the top content on mobile */}
          <div className={styles.leftContent}>
            <h3 className={styles.sectionTitle}>Rank Oriented
SEO Services Agency</h3>
            <p className={styles.description}>
             Boost your search visibility and drive revenue growth with our top-tier SEO services. As a leading SEO agency, Digital Otters combines expertise and cutting-edge technology to craft customized strategies that deliver high ROIs.
            </p>
            
            <button className={styles.ctaButton}>
              Get a Free Quote
            </button>
          </div>

          {/* Right Content - Single Big Image (Moved to row 3 on mobile) */}
          <div className={styles.rightContent}>
            <div className={styles.singleImageContainer}>
              <img src="./panda2.jpeg" alt="Social Media Management" className={styles.bigImage} />
            </div>
          </div>

        </div>

        {/* === Second Row: Small Images & Recognition Section === */}
        <div className={styles.secondaryContentWrapper}>
          
          {/* Left Content (Row 2): 7 Images Row */}
          <div className={styles.secondaryLeftContent}>
            <div className={styles.imagesRow}>
              <div className={styles.smallImageContainer}>
                <img src="./1.webp" alt="Social Media Service 1" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./2.webp" alt="Social Media Service 2" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./3.webp" alt="Social Media Service 3" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./4.webp" alt="Social Media Service 4" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./5.webp" alt="Social Media Service 5" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./6.webp" alt="Social Media Service 6" className={styles.smallImage} />
              </div>
            </div>
          </div>

          {/* Right Content (Row 2): Recognition Section */}
          

        </div>
      </div>
    </section>
  );
};

export default StrategyConsulting;