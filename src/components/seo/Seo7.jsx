import React, { useEffect, useState, useRef } from "react";
import "./Seo7.css";

const Seo7 = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const counters = [
    { label: "Traffic Growth", value: 40 },
    { label: "Keyword Success", value: 85 },
    { label: "ROI Increase", value: 240 },
    { label: "Conversion Rate", value: 190 },
  ];

  return (
    <section className="seo7-section" ref={sectionRef}>
      <div className="seo7-container">
        <div className="seo7-left">
          <h2>Game Changing SEO Services</h2>
          <p>
            For every dollar that you spend on our SEO services, we yield
            extensive results for your brand. Our numbers are a testament to our
            efficiency and effectiveness.
          </p>
          <button className="seo7-btn">GET A FREE QUOTE</button>
        </div>

        <div className="seo7-right">
          {counters.map((item, index) => (
            <div className="seo7-counter-box" key={index}>
              <h3>{startCount ? <CountUp end={item.value} /> : "0"}%</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return count;
};

export default Seo7;