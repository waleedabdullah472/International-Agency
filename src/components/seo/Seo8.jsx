 import React from "react";
import "./Seo8.css";

const Seo8 = () => (
  // Use a fragment or a div to wrap the content
  <section className="seo-tools-section">
    {/* First Heading */}
    <h1>Tools We Use for SEO</h1>

    {/* Paragraph (wrapped in <p> tag as requested) */}
    <p>
      To help achieve the best SERP ranks, we employ a variety of SEO tools and
      applications. With the use of cutting-edge equipment, we can expedite and
      improve Search Engine Optimisation procedures to produce better and faster
      outcomes.
    </p>

    {/* Image Gallery Container */}
    <div className="image-gallery">
      {/* Tool 1 - Replace 'path/to/image1.jpg' with your actual image path */}
      <div className="tool-image">
        <img src="./facebook.webp" alt="SEO Tool Semrush" />
      </div>
      {/* Tool 2 */}
      <div className="tool-image">
        <img src="./facebook.webp" alt="SEO Tool Ahrefs" />
      </div>
      {/* Tool 3 */}
      <div className="tool-image">
        <img src="./facebook.webp" alt="SEO Tool Google Search Console" />
      </div>
      {/* Tool 4 */}
      <div className="tool-image">
        <img src="./facebook.webp" alt="SEO Tool Google Analytics 4" />
      </div>
      {/* Tool 5 */}
      <div className="tool-image">
        <img src="./facebook.webp" alt="SEO Tool Screaming Frog" />
      </div>
      {/* Tool 6 */}
      <div className="tool-image">
        <img src="./facebook.webp" alt="SEO Tool Moz" />
      </div>
    </div>
  </section>
);

export default Seo8;