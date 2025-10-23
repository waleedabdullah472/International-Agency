import React from 'react';
import styles from './StrategyConsulting.module.css';

const StrategyConsulting = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        
        {/* === First Row: Main Content Only (Text) === */}
        <div className={styles.contentWrapper}>
          
          {/* Left Content (Row 1) - This becomes the top content on mobile */}
          <div className={styles.leftContent}>
            <h3 className={styles.sectionTitle}>Social Media<br></br> Management Agency</h3>
            <p className={styles.description}>
              Providing Result Proven Facebook, Instagram, Linkedin, Twitter, Snapchat, TikTok, and YouTube Management and Marketing Services. Our Social Media Management services are provided by a team of certified and well-trained professionals.
            </p>
            
            <button className={styles.ctaButton}>
              Get Started
            </button>
          </div>

          {/* Right Content - Single Big Image (Moved to row 3 on mobile) */}
          <div className={styles.rightContent}>
            <div className={styles.singleImageContainer}>
              <img src="./baby boy.png" alt="Social Media Management" className={styles.bigImage} />
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
          <div className={styles.secondaryRightContent}>
            <div className={styles.recognitionSection}>
              <div className={styles.recognizedBy}>RECOGNIZED BY:</div>
              <div className={styles.reviewPlatforms}>
                <div className={styles.platform}>
                  <div className={styles.platformHeader}>
                    <div className={styles.platformName}>Google</div>
                    <div className={styles.stars}>★★★★★</div>
                  </div>
                  <div className={styles.reviewCount}>100+ Reviews</div>
                </div>
                <div className={styles.platform}>
                  <div className={styles.platformHeader}>
                    <div className={styles.platformName}>GoogleFirm</div>
                    <div className={styles.stars}>★★★★★</div>
                  </div>
                  <div className={styles.reviewCount}>100+ Reviews</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategyConsulting;