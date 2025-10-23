import React, { useEffect, useRef } from 'react';
import './Work.css';

// Data for each project, including image path and a title
const projectData = [
    { imageSrc: './lion.jpg', title: 'Creative Project One' },
    { imageSrc: './lion.jpg', title: 'Awesome Design Two' },
    { imageSrc: './lion.jpg', title: 'Client Work Three' },
    { imageSrc: './lion.jpg', title: 'Photography Four' },
    { imageSrc: './lion.jpg', title: 'Website Build Five' },
    { imageSrc: './lion.jpg', title: 'Branding Six' },
    { imageSrc: './lion.jpg', title: 'Mobile App Seven' },
    { imageSrc: './lion.jpg', title: 'E-commerce Eight' },
    { imageSrc: './lion.jpg', title: 'Marketing Nine' },
    // You can continue adding more items here
    { imageSrc: './lion.jpg', title: 'Project Ten' },
    { imageSrc: './lion.jpg', title: 'Project Eleven' },
    { imageSrc: './lion.jpg', title: 'Project Twelve' },
    { imageSrc: './lion.jpg', title: 'Project Thirteen' },
    { imageSrc: './lion.jpg', title: 'Project Fourteen' },
    { imageSrc: './lion.jpg', title: 'Project Fifteen' },
    { imageSrc: './lion.jpg', title: 'Project Sixteen' },
    { imageSrc: './lion.jpg', title: 'Project Seventeen' },
    { imageSrc: './lion.jpg', title: 'Project Eighteen' },
    { imageSrc: './lion.jpg', title: 'Project Nineteen' },
    { imageSrc: './lion.jpg', title: 'Project Twenty' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-One' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Two' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Three' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Four' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Five' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Six' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Seven' },
    { imageSrc: './lion.jpg', title: 'Project Twenty-Eight' }
];

// Project Card Component with Title
const ProjectCard = ({ imageSrc, title, index, className }) => {
    return (
        <div 
            className={`picture-item hide-picture-initial ${className}`}
            style={{ '--i': index + 1 }}
        >
            <h3 className="picture-title-overlay">{title}</h3> {/* NEW TITLE ELEMENT */}
            <img src={imageSrc} alt={`Work ${index + 1}: ${title}`} className="picture-image" />
        </div>
    );
};

const Work = () => {
    const gridRef = useRef(null);

    // Scroll-triggered animation
    useEffect(() => {
        const pictures = gridRef.current.querySelectorAll('.picture-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hide-picture-initial');
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        pictures.forEach(picture => {
            observer.observe(picture);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="work-container">
            <h1 className="work-title">Our Work</h1>
            
            <div className="pictures-grid" ref={gridRef}>
                {projectData.map((project, index) => {
                    let animationClass = '';
                    
                    // Logic to alternate animation direction
                    if (index % 3 === 0) {
                        animationClass = 'animate-left-to-right';
                    } else if (index % 3 === 1) {
                        animationClass = 'animate-bottom-to-top';
                    } else {
                        animationClass = 'animate-right-to-left';
                    }

                    return (
                        <ProjectCard 
                            key={index} 
                            index={index} 
                            imageSrc={project.imageSrc}
                            title={project.title} // PASS THE TITLE PROP
                            className={animationClass} 
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Work;