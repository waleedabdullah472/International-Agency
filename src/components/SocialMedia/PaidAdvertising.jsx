import React from 'react';
import styles from './PaidAdvertising.module.css';

const PaidAdvertising = () => (
  <div className={styles.paidAdvertising}>
    {/* Centered Main Heading and Paragraph */}
    <div className={styles.header}>
      <h1>Paid Advertising Campaign Options</h1>
      <p>
        Explore our curated selection of paid advertising packages across the most
        effective social media platforms. Each option is designed to maximize
        reach and conversion for your specific business goals.
      </p>
    </div>

    {/* Three Card Layout for Platform Options */}
    <div className={styles.cardContainer}>
      
      {/* Card 1: Facebook/Instagram */}
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 className={styles.mainHeading}>Facebook/Instagram Reach</h2>
          <p className={styles.description}>
            Target a vast, diverse audience with highly segmented demographics 
            and interest-based targeting on the Meta platform.
          </p>
          
          <h3 className={styles.smallHeading}>Campaign Schedule</h3>
          <ul className={styles.scheduleList}>
            <li><span className={styles.time}>9:00 AM</span> - Campaign Launch & Budget Allocation</li>
            <li><span className={styles.time}>10:30 AM</span> - Initial A/B Testing Phase Begins</li>
            <li><span className={styles.time}>1:00 PM</span> - Creative Performance Review</li>
            <li><span className={styles.time}>3:30 PM</span> - Mid-Day Optimization Adjustments</li>
            <li><span className={styles.time}>5:00 PM</span> - Daily Performance Summary Report</li>
          </ul>
        </div>
      </div>

      {/* Card 2: LinkedIn */}
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 className={styles.mainHeading}>LinkedIn B2B Lead Generation</h2>
          <p className={styles.description}>
            Focus on professional connections, industry leaders, and key
            decision-makers for high-value business-to-business (B2B) leads.
          </p>
          
          <h3 className={styles.smallHeading}>Campaign Schedule</h3>
          <ul className={styles.scheduleList}>
            <li><span className={styles.time}>8:30 AM</span> - Audience Refinement Session</li>
            <li><span className={styles.time}>11:00 AM</span> - Sponsored Content Distribution</li>
            <li><span className={styles.time}>2:00 PM</span> - Messaging and Copy Review</li>
            <li><span className={styles.time}>4:00 PM</span> - Competitor Analysis Check</li>
            <li><span className={styles.time}>6:00 PM</span> - Lead Capture System Verification</li>
          </ul>
        </div>
      </div>
      
      {/* Card 3: TikTok/YouTube Shorts */}
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 className={styles.mainHeading}>Short-Form Video Virality</h2>
          <p className={styles.description}>
            Leverage the power of short, engaging video content to build brand 
            awareness and tap into younger, mobile-first markets.
          </p>
          
          <h3 className={styles.smallHeading}>Campaign Schedule</h3>
          <ul className={styles.scheduleList}>
            <li><span className={styles.time}>10:00 AM</span> - Creative Asset Upload & Approval</li>
            <li><span className={styles.time}>12:30 PM</span> - Trend Integration Check</li>
            <li><span className={styles.time}>2:30 PM</span> - Engagement Rate Monitoring</li>
            <li><span className={styles.time}>4:30 PM</span> - Hashtag and Placement Optimization</li>
            <li><span className={styles.time}>7:00 PM</span> - Peak Traffic Hour Boost</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PaidAdvertising;