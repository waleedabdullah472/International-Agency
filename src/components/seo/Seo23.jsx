import React, { useState } from "react";
import "./Seo23.css";

const Seo23 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SEO?",
      answer:
        "Search Engine Optimization or SEO is a cluster of procedures that aim to improve website visibility in Search Engines. These engines can be Google, Bing, Yandex, etc. The purpose of SEO is to get more organic traffic.",
    },
    {
      question: "How does SEO work?",
      answer:
        "Google being the top Search Engine, works on pre-defined algorithms with ranking factors. Relevancy is the main thing to focus on be it for content, search intent, backlinks, or anything else. The more relevant you are the better chances you have to rank on search queries.",
    },
    {
      question: "What are SEO services?",
      answer:
        "SEO services are designed to boost your organic rankings and traffic on search engines with White-hat SEO. SEO services include website audits, on-page SEO, technical SEO, off-page SEO, reporting, etc.",
    },

     {
      question: "How do I know which type of SEO service I need?",
      answer:
        " The type of SEO services depends on the goals of your brand/website. If you want to sell products, choose eCommerce SEO, if you want to rank on Business listings choose Local SEO, and so on.We at Digital Otters, provide all kinds of SEO services for our clients, you don’t have to know everything our experts are always here to help you out. Feel free to contact us here.",
    },
    {
      question: "How much do SEO services cost?s",
      answer:
        "The cost of SEO services usually depends on the type of services, competition of the keywords, the target location, and more. However, our pricing is customized for brands to ensure rank-oriented SEO services.",
    },
  ];

  return (
    <div className="seo-component-23">
      <div className="seo23-container">
        {/* ===== Left Side ===== */}
        <div className="seo23-left">
          <h2>FAQ's About SEO Services</h2>
          <p>
            Increasing revenue through SEO is a tried and true tactic. The
            question is: How does it work, what are the costs, which type of SEO
            to use and so much more?
          </p>
          <p>
            We have answered some frequently asked questions for you. If you’ve
            any more questions, feel free to contact us.
          </p>
          <button>Contact Us</button>
        </div>

        {/* ===== Right Side (FAQ Accordion) ===== */}
        <div className="seo23-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seo23;
