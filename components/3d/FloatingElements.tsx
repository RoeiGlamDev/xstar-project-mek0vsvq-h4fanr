import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black; // Background color for the container
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px; // Adjust width as needed
  height: 200px; // Adjust height as needed
  background-color: pink; // Floating element color
  border-radius: 50%; // Circular shape
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); // Shadow for depth
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px); // Floating effect
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ top: '20%', left: '10%' }} />
      <FloatingElement style={{ top: '50%', left: '50%' }} />
      <FloatingElement style={{ top: '70%', right: '15%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;