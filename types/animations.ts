import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'fadeIn', // Animation for fading in
    duration: 500, // Duration in milliseconds
    timingFunction: 'ease-in', // Timing function for smoothness
  },
  {
    name: 'slideIn', // Animation for sliding in
    duration: 700,
    timingFunction: 'ease-out',
  },
  {
    name: 'zoomIn', // Animation for zooming in
    duration: 600,
    timingFunction: 'ease-in-out',
  },
  {
    name: 'bounce', // Animation for bouncing effect
    duration: 800,
    timingFunction: 'ease-in-out',
  },
];

export default animationTypes; // Default export of animationTypes array