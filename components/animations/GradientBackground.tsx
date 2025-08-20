import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-color: #000000; // black
  }
  50% {
    background-color: #ff007f; // pink
  }
  100% {
    background-color: #000000; // black
  }
`;

const GradientBackgroundContainer = styled.div`
  position: fixed; // fixed positioning for full background
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${gradientAnimation} 10s ease infinite; // animation duration and easing
  z-index: -1; // behind other components
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />; // render the gradient background
};

export default GradientBackground;