import React from "react";
import styles from "./PaidAdvertising.module.css";

const PaidAdvertising = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Social Media Management Packages</h2>
      <p className={styles.description}>
        In today’s competitive digital landscape, Our dedicated team is committed to providing you with the tools, strategies, and the support you need to stand out and make an impact in the digital world that too within the most convenient price bracket
      </p>

      <div className={styles.cards}>
        {/* Card 1 */}
        <div className={styles.card}>
          <h3>Social Basic</h3>
          <p>
            A basic entry-level package for those starting out on social media
            and the digital world. Includes basic content posting and monitoring.
          </p>

          <h4>Standard Offerings</h4>
          <ul>
            <li>Posts per Month - 08</li>
            <li>Gifs / Videos - Included</li>
            <li>Posts Copywriting per Month - 08</li>
            <li>Number of Networks - 2 (Meta)</li>
            <li>Paid Ad Campaigns - 6</li>
          </ul>

          <h4>Strategic Offerings</h4>
          <ul>
            <li>Brand Reputation Analysis</li>
            <li>Social Media Marketing Strategy</li>
            <li>Social Media Competitive Analysis</li>
            <li>Monthly Audit + Recommendations</li>
          </ul>

          <h4>Platform Optimizations</h4>
          <ul>
            <li>Cover Photo & Profile</li>
            <li>Ad Account Optimization</li>
            <li>Network Setup & Optimization</li>
            <li>Business Page Setup / Optimization</li>
          </ul>

          <h4>Marketing Optimizations</h4>
          <ul>
            <li>Organic Growth Tactics</li>
            <li>Customer Segmentation</li>
            <li>Suggested Paid Budget - $750</li>
            <li>Community Management - 6 Hrs</li>
          </ul>

          <button className={styles.button}>Choose Plan</button>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <h3>Social Pro</h3>
          <p>
            A mid-tier package designed for growing businesses. Offers more
            engagement, content creation, and reporting.
          </p>

          <h4>Standard Offerings</h4>
          <ul>
            <li>Posts per Month - 16-20</li>
            <li>Gifs / Videos - Included</li>
            <li>Posts Copywriting per Month - 16-20</li>
            <li>Number of Networks - 3</li>
            <li>Paid Ad Campaigns - 8</li>
          </ul>

          <h4>Strategic Offerings</h4>
          <ul>
            <li>Brand Reputation Analysis</li>
            <li>Social Media Marketing Strategy</li>
            <li>Social Media Competitive Analysis</li>
            <li>Monthly Audit + Recommendations</li>
          </ul>

          <h4>Platform Optimizations</h4>
          <ul>
            <li>Cover Photo & Profile</li>
            <li>Ad Account Optimization</li>
            <li>Network Setup & Optimization</li>
            <li>Business Page Setup / Optimization</li>
          </ul>

          <h4>Marketing Optimizations</h4>
          <ul>
            <li>Organic Growth Tactics</li>
            <li>Customer Segmentation</li>
            <li>Suggested Paid Budget - $1000</li>
            <li>Community Management - 10 Hrs</li>
          </ul>

          <button className={styles.button}>Choose Plan</button>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <h3>Social Elite</h3>
          <p>
            A premium package for established brands seeking advanced campaign
            strategies, analytics, and high engagement growth.
          </p>

          <h4>Standard Offerings</h4>
          <ul>
            <li>Posts per Month - 25+</li>
            <li>Gifs / Videos - Included</li>
            <li>Posts Copywriting per Month - 25+</li>
            <li>Number of Networks - 5</li>
            <li>Paid Ad Campaigns - 12</li>
          </ul>

          <h4>Strategic Offerings</h4>
          <ul>
            <li>Comprehensive Brand Audit</li>
            <li>Advanced Marketing Strategy</li>
            <li>Competitor Benchmark Reports</li>
            <li>Monthly + Weekly Insights</li>
          </ul>

          <h4>Platform Optimizations</h4>
          <ul>
            <li>Complete Brand Kit Setup</li>
            <li>Advanced Ad Account Management</li>
            <li>Multi-Network Integration</li>
            <li>Page Performance Optimization</li>
          </ul>

          <h4>Marketing Optimizations</h4>
          <ul>
            <li>Influencer Collaboration Strategy</li>
            <li>Audience Targeting Expansion</li>
            <li>Suggested Paid Budget - $1500</li>
            <li>Community Management - 20 Hrs</li>
          </ul>

          <button className={styles.button}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PaidAdvertising;