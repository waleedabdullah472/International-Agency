import React from "react";
import "./Seo14.css";

const Seo14 = () => {
  const industries = [
    {
      logo: "./facebook.webp",
      title: "Ecommerce Brands",
      description:
        "At Digital Otters, we have experts in e-commerce SEO — be it for Shopify, Magento, WooCommerce, or any platform.",
    },
    {
      logo: "./facebook.webp",
      title: "Healthcare Providers",
      description:
        "Mastering search intent, we dominate SERPs with our SEO for clinics and medical professionals across the globe.",
    },
    {
      logo: "./facebook.webp",
      title: "Real Estate Companies",
      description:
        "Real estate SEO to rank high on SERPs. Sell, Buy, or Rent more properties with our advanced SEO services.",
    },
    {
      logo: "./facebook.webp",
      title: "SaaS Companies",
      description:
        "We perform result-oriented SaaS SEO services to attract organic traffic, quality leads, and loyal clients.",
    },
    {
      logo: "./facebook.webp",
      title: "EdTech Companies",
      description:
        "Our personalized EdTech SEO helps brands stand out in a highly competitive market and gain maximum returns.",
    },
    {
      logo: "./facebook.webp",
      title: "Corporate Companies",
      description:
        "Corporate SEO designed for maximum awareness, credibility, and consistent lead generation for your business.",
    },
  ];

  return (
    <section className="seo14-section">
      <div className="seo14-container">
        {/* Left Side */}
        <div className="seo14-left">
          <h2>Industries We Cater</h2>
          <p className="seo14-subtitle">
            Result-Oriented Search Engine Optimization Services
          </p>
          <p className="seo14-desc">
            Amassing years of collective experience, it's no wonder that our
            services span across multiple industries. We cater to top-notch
            clients from all fields with advanced SEO services.
          </p>
          <p className="seo14-desc">
            Our professionals design a customized strategy for the optimization
            and content of every brand. Catering to all kinds of businesses and
            sectors, we ensure the base of every website is perfect before we
            initiate off-page SEO.
          </p>

          <ul className="seo14-list">
            <li>Increased Organic Traffic</li>
            <li>Higher Domain Authority</li>
            <li>Boosted Lead Generation</li>
            <li>Increased Page-one Rankings</li>
            <li>Local & Global SEO Optimization</li>
            <li>Long-Term Sustainable Growth</li>
            <li>Enhanced Website Credibility</li>
          </ul>

          <button className="seo14-btn">GET A FREE QUOTE</button>
        </div>

        {/* Right Side */}
        <div className="seo14-right">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <img src={item.logo} alt={item.title} className="industry-logo" />
              <div className="industry-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seo14;