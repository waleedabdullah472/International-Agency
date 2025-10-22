// src/components/SocialMedia/CrisisManagement.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './CrisisManagement.module.css';

const creativeAssets = [
  { id: 1, title: 'Autumn Campaign Launch', time: '2 hours ago', type: 'video', url: './video.mp4', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 2, title: 'New Logo Mockup v2', time: 'Yesterday', type: 'image', url: './TikTok.svg', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 3, title: 'Social Media Ad Set 1', time: '5 days ago', type: 'image', url: './facebook.webp', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 4, title: 'Q4 Strategy Video', time: '1 week ago', type: 'video', url: './video.mp4', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 5, title: 'Website Banner Design', time: '1 week ago', type: 'image', url: './TikTok.svg', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 6, title: 'Client Feedback Story', time: '2 weeks ago', type: 'video', url: './video.mp4', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 7, title: 'Instagram Reel Draft', time: '3 weeks ago', type: 'video', url: './video.mp4', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 8, title: 'Brand Guideline Update', time: '1 month ago', type: 'image', url: './facebook.webp', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 9, title: 'Email Template Design', time: '1 month ago', type: 'image', url: './TikTok.svg', reactions: ['😍', '🔥', '👏', '😄'] },
];

const CreativeCollection = () => {
  const [favorites, setFavorites] = useState(new Set());
  const videoRefs = useRef({});

  const toggleFavorite = (assetId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(assetId)) {
      newFavorites.delete(assetId);
    } else {
      newFavorites.add(assetId);
    }
    setFavorites(newFavorites);
  };

  // Setup video autoplay using IntersectionObserver
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(error => {
            console.log('Autoplay failed:', error);
          });
        } else {
          entry.target.pause();
        }
      });
    }, options);

    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.serviceSection}>
      
      <header className={styles.header}>
        <h1 className={styles.mainHeading}>Digital Otters Creative Collection</h1>
        <p className={styles.introText}>
          Creativity, innovation, and design are all synonyms of Digital Otters. Our team is dedicated to providing our clients with the best creative assets for their social media platforms, pay-per-click campaigns, on-site marketing opportunities, and more.
        </p>
      </header>

      <div className={styles.assetsGrid}>
        {creativeAssets.map((asset) => (
          <article key={asset.id} className={styles.assetCard}>
            
            {/* Header: Left side - Name, Right side - Time */}
            <div className={styles.cardHeader}>
              <span className={styles.assetTitle} title={asset.title}>
                {asset.title}
              </span>
              <span className={styles.assetTime}>{asset.time}</span>
            </div>

            {/* Media Display */}
            <div className={styles.mediaContainer}>
              {asset.type === 'video' ? (
                <video
                  ref={el => videoRefs.current[asset.id] = el}
                  className={styles.actualMedia} 
                  src={asset.url}
                  muted 
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Video: ${asset.title}`}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className={styles.actualMedia} 
                  src={asset.url}
                  alt={asset.title}
                  loading="lazy"
                />
              )}
            </div>

            {/* Footer: Left side - Reactions, Right side - Favorite */}
            <div className={styles.cardFooter}>
              {/* Left Side: Reactions */}
              <div className={styles.reactions}>
                {asset.reactions.map((reaction, index) => (
                  <span key={index} className={styles.reactionIcon}>
                    {reaction}
                  </span>
                ))}
              </div>

              {/* Right Side: Favorite Icon */}
              <div 
                className={styles.favorite}
                onClick={() => toggleFavorite(asset.id)}
                role="button"
                tabIndex={0}
                aria-label={favorites.has(asset.id) ? `Remove ${asset.title} from favorites` : `Add ${asset.title} to favorites`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFavorite(asset.id);
                  }
                }}
              >
                <FaHeart 
                  className={`${styles.favoriteIcon} ${favorites.has(asset.id) ? styles.active : ''}`} 
                />
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default CreativeCollection;