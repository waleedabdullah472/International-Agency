import React, { useState, useEffect } from 'react';
import styles from './StrategyConsulting.module.css';

const StrategyConsulting = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [animated, setAnimated] = useState(false);

  const platforms = [
    "Facebook", "Instagram", "LinkedIn", 
    "Twitter", "Snapchat", "TikTok", "YouTube"
  ];

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    // Scroll animation trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.scrollAnimation}`);
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add(styles.animate);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Left Content */}
          <div className={styles.leftContent}>
            <h3 className={`${styles.sectionTitle} ${styles.scrollAnimation}`}>
              Social Media Management Agency
            </h3>
            <p className={`${styles.description} ${styles.scrollAnimation}`}>
              Providing Result Proven Facebook, Instagram, Linkedin, Twitter, Snapchat, TikTok, and YouTube Management and Marketing Services. Our Social Media Management services are provided by a team of certified and well-trained professionals.
            </p>
            
            <button className={`${styles.ctaButton} ${styles.scrollAnimation}`}>
              Get Started
            </button>

            {/* 7 Images Row */}
            <div className={styles.imagesRow}>
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className={styles.smallImageContainer}
                  data-platform={platform}
                >
                  <img 
                    src="./f.webp" 
                    alt={platform}
                    className={styles.smallImage} 
                  />
                </div>
              ))}
            </div>

            {/* Recognition Section */}
            <div className={`${styles.recognitionSection} ${styles.scrollAnimation}`}>
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
              className={`${styles.singleImageContainer} ${
                isFullscreen ? styles.fullscreen : ''
              }`}
              onClick={toggleFullscreen}
            >
              <img 
                src="./baby boy.png" 
                alt="Social Media Management" 
                className={styles.bigImage} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategyConsulting;