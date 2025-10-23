// src/components/Work.jsx
import React from 'react';
import './Work.css';

// Data for each project
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

// Project Card Component
const ProjectCard = ({ imageSrc, title }) => (
    <div className="picture-item">
        <h3 className="picture-title-overlay">{title}</h3>
        <img src={imageSrc} alt={title} className="picture-image" />
    </div>
);

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="work-title">Our Work</h1>
            <div className="pictures-grid">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageSrc={project.imageSrc}
                        title={project.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Work;
