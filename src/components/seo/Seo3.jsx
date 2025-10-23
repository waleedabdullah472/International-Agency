import React from "react";
import "./Seo3.css";

const services = [
  {
    image: "./lion.jpg",
    title: "Keyword Research & Strategy",
    description:
      "We analyze your industry and target audience to find high-performing keywords that increase your website visibility and drive relevant traffic."
  },
  {
    image: "./lion.jpg",
    title: "On-Page Optimization",
    description:
      "Our experts optimize title tags, meta descriptions, and content structure to ensure your site is search-engine friendly and user-centric."
  },
  {
    image: "./lion.jpg",
    title: "Technical SEO",
    description:
      "We fix crawl issues, improve site speed, and enhance mobile responsiveness to boost your overall site performance and rankings."
  },
  {
    image: "./lion.jpg",
    title: "Content Creation",
    description:
      "We craft SEO-focused content that resonates with your audience, improves engagement, and builds your authority in the market."
  },
  {
    image: "./lion.jpg",
    title: "Link Building",
    description:
      "Our ethical link-building strategies help your website earn high-quality backlinks, improving domain authority and organic rankings."
  },
  {
    image: "./lion.jpg",
    title: "Analytics & Reporting",
    description:
      "We track SEO metrics closely, providing detailed reports on your growth, rankings, and ROI for transparent performance evaluation."
  }
];

const Seo3 = () => (
  <section className="seo3-section">
    <div className="seo3-container">
      {/* Header Section */}
      <div className="seo3-header">
        <h2 className="seo3-main-heading">What do our SEO Services include?</h2>
        <p className="seo3-description">
          Whether you aim to bridge gaps or seek a ready-made solution, our tailored search engine optimization services are designed to assist. Explore further details about our personalized strategies for attracting organic search traffic and converting it into revenue.
        </p>
      </div>

      {/* Service Cards */}
      <div className="seo3-cards-grid">
        {services.map((service, index) => (
          <div key={index} className="seo3-card">
            <img src={service.image} alt={service.title} className="seo3-card-image" />
            <div className="seo3-card-content">
              <h3 className="seo3-card-title">{service.title}</h3>
              <p className="seo3-card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Seo3;
