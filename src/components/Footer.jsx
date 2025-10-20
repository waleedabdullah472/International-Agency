// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="advanced-footer">

            {/* NEW SECTION 1: Two-Sided CTA & Moving Logos */}
            <div className="footer-pre-cta">
                <div className="container">
                    <div className="cta-split">
                        
                        {/* LEFT SIDE: Heading, Paragraph, and Button */}
                        <div className="cta-left">
                            <h2>Are you ready to work with Digital Otters?</h2>
                            <p>
                                Let's collaborate to elevate your business, expanding the reach of 
                                your products, services, and innovations to new markets, customers, and users.
                            </p>
                            <button className="cta-quote-button">GET A FREE QUOTE</button>
                        </div>
                        
                        {/* RIGHT SIDE: Auto-Moving Images */}
                        <div className="cta-right">
                            <div className="logo-carousel-row row-1">
                                <div className="carousel-track">
                                    {/* First row of logos */}
                                    <img src="/public/f.webp" alt="Client Logo" />
                                    <img src="/public/x.webp" alt="Client Logo" />
                                    <img src="/public/i.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/x.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    {/* Duplicate for seamless loop */}
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    <img src="/public/x.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/f.webp" alt="Client Logo" />
                                    <img src="/public/i.webp" alt="Client Logo" />
                                </div>
                            </div>
                            <div className="logo-carousel-row row-2">
                                <div className="carousel-track">
                                    {/* Second row of logos */}
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    <img src="/public/y.webp" alt="Client Logo" />
                                    {/* Duplicate for seamless loop */}
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                    <img src="/public/l.webp" alt="Client Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION 2: 5-Card Grid (Full Width) */}
            <div className="footer-cards-section">
                <div className="cards-grid">
                    <div className="card card-1">
                        <img src="/i.webp" alt="Service 1" />
                        
                    </div>
                    <div className="card card-2">
                        <img src="/public/f.webp" alt="Service 2" />
                    </div>
                    <div className="card card-3">
                        <img src="x.webp" alt="Service 3" />
                    </div>
                    <div className="card card-4">
                        <img src="/public/l.webp" alt="Service 4" />
                    </div>
                    <div className="card card-5">
                        <img src="/public/y.webp" alt="Service 5" />
                    </div>
                </div>
            </div>

            {/* EXISTING SECTION: Footer Links (Footer Top) */}
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        
                        {/* Column 1: Branding & Social */}
                        <div className="footer-col branding-col">
                            <Link to="/" className="footer-logo">
                                <h1>Digital Otters</h1> 
                            </Link>
                            <p>
                                Social Media Marketing & Management Agency. We drive real results through innovative digital strategies and data-driven approaches.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Services Links */}
                        <div className="footer-col">
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link to="/social-media">Social Media Marketing</Link></li>
                                <li><Link to="/seo">SEO Optimization</Link></li>
                                <li><Link to="/ppc">PPC Advertising</Link></li>
                                <li><Link to="/content">Content Marketing</Link></li>
                                <li><Link to="/web-design">Web Design & Development</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Company Links */}
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/work">Our Work</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact/CTA */}
                        <div className="footer-col contact-col">
                            <h4>Get in Touch</h4>
                            <p>Ready to boost your brand?</p>
                            <p>Email: <a href="mailto:info@digitalotters.com">info@digitalotters.com</a></p>
                            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                            <button className="cta-button">Start a Project</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* EXISTING SECTION: Copyright (Footer Bottom) */}
            <div className="footer-bottom">
                <div className="container">
                    <p>
                        &copy; {new Date().getFullYear()} Digital Otters. All Rights Reserved. 
                        | <Link to="/privacy">Privacy Policy</Link> 
                        | <Link to="/terms">Terms of Service</Link>
                        | <Link to="/cookies">Cookie Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;