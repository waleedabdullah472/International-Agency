import React from "react";
// Assuming you are using regular CSS files
import "../seo/Seo2.css"; 

const statsData = [
  "Award Winning SEO services with years of experience",
  "Approx 5x Increase in return on investments with SEO services",
  "99% Client retention with increased ROI and conversions",
  "2 Million+ pages ranking on the first page and counting↑",
];

const Seo2 = () => (
  <section className="stats-section-seo2">
    <div className="stats-container-seo2">
      {statsData.map((stat, index) => {
        // Split the content into the first two words and the rest
        const words = stat.split(' ');
        const firstTwoWords = `${words[0]} ${words[1]}`;
        const restOfContent = words.slice(2).join(' ');

        return (
          <div key={index} className="stat-card-seo2">
            <p className="stat-text-seo2">
              {/* Highlight the first two words */}
              <span className="stat-highlight-seo2">
                {firstTwoWords}
              </span>{' '}
              {/* Render the rest of the sentence */}
              {restOfContent}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Seo2;