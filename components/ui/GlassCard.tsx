import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: rgba(255, 192, 203, 0.1); // Light pink background with transparency
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); // Glass effect
  padding: 20px;
  color: #fff; // White text color for contrast
  max-width: 300px;
  margin: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default GlassCard;