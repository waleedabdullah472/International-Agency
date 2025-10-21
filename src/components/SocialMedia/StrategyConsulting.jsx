import React, { useEffect, useRef, useState } from 'react';
import styles from './StrategyConsulting.module.css';

const StrategyConsulting = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Left Content */}
          <div className={styles.leftContent}>
            <h3 className={styles.sectionTitle}>Social Media Management Agency</h3>
            <p className={styles.description}>
              Providing Result Proven Facebook, Instagram, Linkedin, Twitter, Snapchat, TikTok, and YouTube Management and Marketing Services. Our Social Media Management services are provided by a team of certified and well-trained professionals.
            </p>
            
            <button className={styles.ctaButton}>
              Get Started
            </button>

            {/* 7 Images Row */}
            <div className={styles.imagesRow}>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 1" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 2" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 3" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 4" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 5" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 6" className={styles.smallImage} />
              </div>
              <div className={styles.smallImageContainer}>
                <img src="./f.webp" alt="Social Media Service 7" className={styles.smallImage} />
              </div>
            </div>

            {/* Recognition Section */}
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

          {/* Right Content - Single Big Image */}
          <div className={styles.rightContent}>
            <div 
              ref={imageRef}
              className={`${styles.singleImageContainer} ${isVisible ? styles.animate : ''}`}
            >
              <img src="./baby boy.png" alt="Social Media Management" className={styles.bigImage} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategyConsulting;