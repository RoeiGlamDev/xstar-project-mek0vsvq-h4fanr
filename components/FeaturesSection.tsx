import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const features = [
  {
    title: 'Luxury Accommodations',
    description: 'Experience the comfort of high-end living with our premium properties.',
  },
  {
    title: 'Exclusive Amenities',
    description: 'Enjoy top-notch facilities including pools, gyms, and spas.',
  },
  {
    title: 'Personalized Services',
    description: 'Receive tailored services to make your stay unforgettable.',
  },
  {
    title: 'Prime Locations',
    description: 'Stay in the heart of the city with easy access to attractions.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;