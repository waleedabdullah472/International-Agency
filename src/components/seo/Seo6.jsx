import React from "react";
import "./Seo6.css";

const Seo6 = () => {
  const cards = [
    {
      img: "./facebook.webp",
      title: "Website Audit",
      desc: "A site audit includes performance, structure, and content analysis to identify issues and ensure your website is fully optimized for better rankings."
    },
    {
      img: "./linkedin-1.webp",
      title: "Traffic Goal Assessment",
      desc: "We analyze the type of audience and intent to ensure your traffic brings real business value, not just higher visitor numbers."
    },
    {
      img: "./facebook.webp",
      title: "Keyword Research",
      desc: "Finding and targeting the right focus and long-tail keywords to boost visibility, traffic quality, and conversion rates."
    },
    {
      img: "./linkedin-1.webp",
      title: "On-Page Optimization",
      desc: "Enhancing your site’s content, images, meta-structure, and speed to improve rankings and user experience."
    },
    {
      img: "./facebook.webp",
      title: "Meta Structure Optimization",
      desc: "Optimizing meta tags like Title, Description, and Robots to improve click-through rates and visibility on search engines."
    },
    {
      img: "./linkedin-1.webp",
      title: "Off-Page Optimization",
      desc: "Building backlinks, guest posts, and social presence to increase your domain authority and website reputation."
    },
    {
      img: "./facebook.webp",
      title: "PageSpeed Optimization",
      desc: "Improving load time for desktop and mobile users by optimizing hosting, code, and media files for faster experiences."
    },
    {
      img: "./linkedin-1.webp",
      title: "High-Tier Link Building",
      desc: "Securing high-quality backlinks to improve your site’s credibility and search engine rankings effectively."
    },
    {
      img: "./facebook.webp",
      title: "Algorithm Impact Analysis",
      desc: "Monitoring and analyzing algorithm changes to adjust strategies and maintain your website’s top performance."
    },
    {
      img: "./linkedin-1.webp",
      title: "Monthly Reporting",
      desc: "We provide detailed performance reports that cover traffic, rankings, backlinks, and overall SEO progress."
    }
  ];

  return (
    <section className="seo6-wrapper">
      {/* Section 1 */}
      <div className="seo6-intro">
        <h2>What's Included in Our Technical SEO?</h2>
        <p>
          For every dollar that you spend on our SEO services, we yield extensive
          results for your brand. Our numbers are a testament to our efficiency
          and effectiveness.
        </p>
      </div>

      {/* Section 2 */}
      <div className="seo6-grid">
        {cards.map((card, index) => (
          <div className="seo6-card" key={index}>
            <div className="seo6-card-left">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="seo6-card-right">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Seo6;
