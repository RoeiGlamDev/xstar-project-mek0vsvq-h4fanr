import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setScrolling(currentScroll > 100); // Change threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolling; // Return scrolling state
};

export default useScrollAnimation;