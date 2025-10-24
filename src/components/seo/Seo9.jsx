import React from "react";
import "./Seo9.css";

const Seo9 = () => {
  const steps = [
    {
      id: 1,
      logo: "./x.webp",
      title: "Discover",
      description:
        "As your search engine optimization company, we take the time to understand your business needs, demands, and expectations. During the discovery phase, we meet with your key company stakeholders and conduct an initial site review. We then identify KPIs, determine your conversion path, and perform keyword research for deeper insights.",
    },
    {
      id: 2,
      logo: "./f.webp",
      title: "Analyze",
      description:
        "The next step is analysis — including competitive benchmarking, an in-depth site audit, analytics review, and link risk assessment. We gather and analyze business data to identify the factors impacting your digital presence and use this insight to shape your SEO strategy.",
    },
    {
      id: 3,
      logo: "./x.webp",
      title: "Strategize",
      description:
        "Once we’ve identified your marketing gaps and opportunities, our SEO experts will develop a 60-day Strategic Online Marketing Plan (SOMP) outlining campaign goals, expected outcomes, and completion timelines to ensure targeted, immediate results.",
    },
    {
      id: 4,
      logo: "./f.webp",
      title: "Execute",
      description:
        "We implement your SEO plan by optimizing web pages, blog posts, and business listings. We enhance site structure, manage listings, and use multi-channel strategies like social media engagement and backlink campaigns to expand your online presence.",
    },
    {
      id: 5,
      logo: "./x.webp",
      title: "Measure",
      description:
        "From day one, we track progress with analytics tools to assess campaign impact. We monitor traffic, rankings, and conversion rates, ensuring every effort delivers measurable, data-driven results that align with your business goals.",
    },
    {
      id: 6,
      logo: "./f.webp",
      title: "Report",
      description:
        "Our team provides monthly reports and consultations, keeping you updated with KPI trends, traffic performance, and ranking improvements. Every month, we also set a new 90-day roadmap for continuous growth.",
    },
    {
      id: 7,
      logo: "./x.webp",
      title: "Adjust",
      description:
        "SEO is ever-evolving. We refine and adapt strategies based on algorithm updates and market trends to ensure your business maintains top rankings and sustained growth over time.",
    },
  ];

  return (
    <section className="seo-tools-section">
      <h4>Digital Otters Agile SEO Methodology</h4>
      <h5>Your First Step Towards Digital Success</h5>
      
      <p className="intro-text">
        The search landscape is constantly evolving. To rank high on search engines, you need to invest
        in the right SEO services tailored to your business’s needs, demands, and target customers.
        Simply relying on old SEO tactics is not enough to maintain a robust online presence — you need
        to find a reliable SEO company that can elevate your digital marketing efforts.
        <br />
        <br />
        Digital Otters is a customer-focused SEO company. Our SEO experts work closely with clients to
        develop personalized SEO strategies that drive long-term profitability using our proven “Agile SEO”
        methodology — built on the following processes:
      </p>

      {/* Image Gallery Example (Optional logos row) */}
      

    

      <div className="seo-card-grid">
        {steps.map((step) => (
          <div className="seo-card" key={step.id}>
            <img src={step.logo} alt={step.title} className="seo-logo" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default Seo9;
