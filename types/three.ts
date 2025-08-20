import React from 'react';

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ThreeProps {
  properties: Property[];
}

const Three: React.FC<ThreeProps> = ({ properties }) => {
  return (
    <div className="three-container">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.imageUrl} alt={property.title} className="property-image" />
          <h2 className="property-title">{property.title}</h2>
          <p className="property-description">{property.description}</p>
          <p className="property-price">${property.price.toFixed(2)} per night</p>
        </div>
      ))}
    </div>
  );
};

export default Three;