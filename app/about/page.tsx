import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#ff69b4' }}>Welcome to HouseIL</h1> {/* Pink color for elegance */}
        <p style={{ fontSize: '18px' }}>Your luxury home away from home.</p>
      </header>
      <section>
        <h2 style={{ color: '#ff69b4' }}>About Us</h2> {/* Pink color for elegance */}
        <p>
          At HouseIL, we redefine luxury living with our exquisite selection of properties.
          Our mission is to provide an unparalleled experience in the heart of the city.
        </p>
        <p>
          Each home is meticulously curated to ensure comfort, style, and sophistication.
          Discover the perfect getaway with us.
        </p>
      </section>
      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>&copy; {new Date().getFullYear()} HouseIL. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;