'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation starts from the bottom
      distance: '50px', // Distance of the animation
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll back
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with class 'reveal'
  }, []);

  return <div className="reveal">{children}</div>; // Render children inside reveal div
};

export default ScrollRevealComponent;