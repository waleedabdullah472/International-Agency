import React from "react";
import { FaCheckCircle, FaTimesCircle, FaHeadset, FaImage, FaSearch } from "react-icons/fa";
import styles from "./BrandAwareness.module.css";

const BrandAwareness = () => {
  const images = [
    "/images/social1.jpg",
    "/images/social2.jpg",
    "/images/social3.jpg",
    "/images/social4.jpg",
    "/images/social5.jpg",
    "/images/social6.jpg",
  ];

  const cards = [
    {
      icon: <FaSearch className={styles.cardIcon} />,
      title: "Market Research",
      text: "We help identify your target audience and develop strategies to reach them effectively.",
    },
    {
      icon: <FaHeadset className={styles.cardIcon} />,
      title: "Customer Support",
      text: "Our experts ensure quick response and engagement with your followers for better relationships.",
    },
    {
      icon: <FaImage className={styles.cardIcon} />,
      title: "Visual Branding",
      text: "We create visually appealing graphics and media to strengthen your brand identity.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Boost Your Brand Awareness</h2>
      <p className={styles.paragraph}>
        Our team helps you establish a powerful online presence through creativity, strategy, and consistency.
      </p>

      {/* Image Grid */}
      <div className={styles.imageGrid}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={src} alt={`Brand ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandAwareness;
