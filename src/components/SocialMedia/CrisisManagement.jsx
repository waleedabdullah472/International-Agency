// src/components/SocialMedia/CrisisManagement.jsx
import React from 'react';
import { FaHeart, FaVideo, FaImage } from 'react-icons/fa';
import styles from './CrisisManagement.module.css';

// Placeholder data for nine creative assets
const creativeAssets = [
  { id: 1, title: 'Autumn Campaign Launch', time: '2 hours ago', type: 'video', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 2, title: 'New Logo Mockup v2', time: 'Yesterday', type: 'image', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 3, title: 'Social Media Ad Set 1', time: '5 days ago', type: 'image', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 4, title: 'Q4 Strategy Video', time: '1 week ago', type: 'video', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 5, title: 'Website Banner Design', time: '1 week ago', type: 'image', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 6, title: 'Client Feedback Story', time: '2 weeks ago', type: 'video', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 7, title: 'Instagram Reel Draft', time: '3 weeks ago', type: 'video', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 8, title: 'Brand Guideline Update', time: '1 month ago', type: 'image', reactions: ['😍', '🔥', '👏', '😄'] },
  { id: 9, title: 'Email Template Design', time: '1 month ago', type: 'image', reactions: ['😍', '🔥', '👏', '😄'] },
];

const CreativeCollection = () => (
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
          
          {/* Top Bar with Title and Time */}
          <div className={styles.cardHeader}>
            <span className={styles.assetTitle}>{asset.title}</span>
            <span className={styles.assetTime}>{asset.time}</span>
          </div>

          {/* Placeholder for Media */}
          <div className={styles.mediaContainer}>
            {asset.type === 'video' ? (
              <FaVideo className={styles.mediaIcon} />
            ) : (
              <FaImage className={styles.mediaIcon} />
            )}
            <p className={styles.mediaPlaceholderText}>
              {asset.type === 'video' ? 'Video Preview' : 'Image Preview'}
            </p>
          </div>

          {/* Social Icons */}
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
            <div className={styles.favorite}>
              <FaHeart className={styles.favoriteIcon} />
            </div>
          </div>
        </article>
      ))}
    </div>

  </section>
);

export default CreativeCollection;