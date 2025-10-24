import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Seo12.css";

const feedbacks = [
  {
    name: "Sophia Turner",
    company: "BrightWave Co.",
    feedback:
      "Digital Otters helped us achieve record-breaking organic growth within months. Their professionalism and skill are unmatched.",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "David Johnson",
    company: "GrowthEdge Media",
    feedback:
      "Their SEO strategy is data-driven and precise. We've seen amazing improvements in visibility and traffic.",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "Emma Davis",
    company: "InnovateX",
    feedback:
      "Partnering with Digital Otters has been a smooth and result-oriented experience. Great communication and delivery.",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "Michael Lee",
    company: "NextPhase Digital",
    feedback:
      "Highly professional and transparent team. The reports are clear and the results speak for themselves.",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "Ava Martinez",
    company: "SocialSync Labs",
    feedback:
      "Our website now ranks on the first page for multiple high-competition keywords. Excellent work!",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "James Carter",
    company: "Visionary Ads",
    feedback:
      "Digital Otters took our digital marketing strategy to the next level. Highly recommend!",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "Olivia Green",
    company: "ClickWave Agency",
    feedback:
      "Exceptional SEO service! Their approach is detailed, creative, and always results-driven.",
    image: "./facebook.webp",
    rating: 5,
  },
  {
    name: "William Scott",
    company: "BrandPulse Media",
    feedback:
      "A perfect blend of professionalism and innovation. Our search performance has improved drastically.",
    image: "./facebook.webp",
    rating: 5,
  },
];

const Seo12 = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Calculate cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector('.seo12-card');
    if (!card) return;

    const cardWidth = card.offsetWidth + 30; // card width + gap
    const scrollAmount = cardWidth * cardsPerView * (direction === "left" ? -1 : 1);
    
    container.scrollBy({ 
      left: scrollAmount, 
      behavior: "smooth" 
    });

    // Update current index
    const newIndex = direction === "right" 
      ? Math.min(currentIndex + cardsPerView, feedbacks.length - 1)
      : Math.max(currentIndex - cardsPerView, 0);
    
    setCurrentIndex(newIndex);
  };

  // Auto scroll to the right on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      scroll("right");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="seo12-section">
      <div className="seo12-container">
        <h2 className="seo12-heading">Partner Feedback</h2>
        <p className="seo12-subheading">
          See what our certified partners say about working with Digital Otters.
        </p>

        <div className="seo12-carousel-container">
          {/* Scroll Buttons */}
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          
          {/* Feedback Cards */}
          <div className="seo12-carousel" ref={scrollRef}>
            {feedbacks.map((item, index) => (
              <div className="seo12-card" key={index}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="seo12-image" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/90x90/666/fff?text=Avatar';
                  }}
                />
                <p className="seo12-feedback">"{item.feedback}"</p>
                <h4 className="seo12-name">{item.name}</h4>
                <span className="seo12-company">{item.company}</span>
                <div className="seo12-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="seo12-star" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seo12;