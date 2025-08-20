import React from 'react';
import './AboutSection.css'; // Assuming a CSS file for styles

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to HouseIL</h1>
                <p className="about-description">
                    Experience luxury living in our exquisite properties, where elegance meets comfort. 
                    HouseIL offers a curated selection of high-end accommodations designed for discerning travelers.
                </p>
                <p className="about-description">
                    Our commitment to exceptional service and attention to detail ensures that your stay 
                    will be nothing short of extraordinary.
                </p>
                <button className="about-button">Discover More</button>
            </div>
        </section>
    );
};

export default AboutSection;