import React from 'react';
import styles from './CommunityManagement.module.css';

// Data for the 6-column grid on the left side


// Data for each individual card on the right side
const cardData = [
  {
    id: 1,
    imageSrc: './facebook.webp', // Replace with actual image path
    
    heading: "Facebook Management & Marketing",
    paragraph: "One of the most popular social media platforms on the market is Facebook. Numerous companies, brands, and pages use the platform ecosystem. Granular targeting is a feature of Facebook Marketing that enables us to target the most appropriate population in search of our ideal clients."
  },
  {
    id: 2,
    imageSrc: './instagram-1.webp', // Replace with actual image path
   
    heading: "Instagram Management & Marketing",
    paragraph: "Instagram marketing is more about brand value due to the platform’s expanding user base, primarily younger users. We at Digital Otters provide the best Instagram marketing services, crafting memorable reels, visually appealing campaigns, and advertising that converts."
  },
  {
    id: 3,
    imageSrc: './twitter-1.webp', // Replace with actual image path
   
    heading: "Twitter Management & Marketing",
    paragraph: " Well-known brands, corporate staff, and others use the platform, which is primarily text and content-based. One of the best platforms for B2B targeting and advertising is Twitter marketing. The marketplace is cutthroat when it comes to lead quality."
  },
  {
    id: 4,
    imageSrc: './linkedin-1.webp', // Replace with actual image path
    
    heading: "LinkedIn Management & Marketing",
    paragraph: "The largest business networking site in the world, LinkedIn, has solidified its position as a growth accelerator for businesses. LinkedIn marketing assists in creating long-term business relations, attracting exceptional brands from around the world, and produce high-quality leads."
  },
  {
    id: 5,
    imageSrc: './youtube.webp', // Replace with actual image path
    
    heading: " YouTube Management & Marketing",
    paragraph: "   User-generated content is what makes YouTube the largest video search engine in the World. With countless brands, individual channels and creators on the platform, it is one of the best social channels for advertising. YouTube marketing and advertising is perfect for brand awareness, lead generation and creating a buzz."
  },
  {
    id: 6,
    imageSrc: './TikTok.svg', // Replace with actual image path
    
    heading: "TikTok Marketing",
    paragraph: "     With TikTok being the social media channel with the quickest growth to date, you may quickly increase sales. TikTok marketing differs greatly from traditional PPC campaigns and advertising techniques. We will repurpose your videos to increase your sales and incorporate the best marketing elements for an optimal TikTok."
  },
];

// Component for the complex card structure on the right side
const ScrollableCard = ({ imageSrc, imageDesc, heading, paragraph }) => (
  <div className={styles.scrollCard}>
    {/* Card Left Side: Image */}
    <div className={styles.cardImageContainer}>
      <img src={imageSrc} alt={imageDesc} className={styles.cardImage} />
    </div>
    
    {/* Card Right Side: Heading and Text */}
    <div className={styles.cardContent}>
      <h4 className={styles.cardHeading}>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  </div>
);

const CommunityManagement = () => (
  <div className={styles.outerContainer}>
    <div className={styles.contentWrapper}>
      
      {/* LEFT SIDE: 6 Column Grid */}
      <div className={styles.leftSide}>
        <h1>Social Media Excellence</h1>
        <h4>Skyrocket Your ROI with Strategic Social Media Marketing</h4>
        
        <p>
          Social media management services focus on increased sales, client retention, brand awareness and engagement across all social channels. 
        </p>

        {/* 6 Column Grid */}
       

        <p>
          Digital Otters is an expert in creating custom social media marketing strategies that precisely match your company's goals. A one-size-fits-all strategy will just not work anymore.
        </p>
        
        <button className={styles.actionButton}>Get Started Today</button>
      </div>
      
      {/* RIGHT SIDE: Scrollable Cards */}
      <div className={styles.rightSide}>
        
        
        {/* Mapping over cardData to render unique cards */}
        {cardData.map(card => (
          <ScrollableCard 
            key={card.id} 
            imageSrc={card.imageSrc}
            imageDesc={card.imageDescription} 
            heading={card.heading} 
            paragraph={card.paragraph} 
          />
        ))}
      </div>
    </div>
  </div>
);

export default CommunityManagement;