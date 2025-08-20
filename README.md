import React from 'react';

const ReadMe: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#ff69b4' }}>HouseIL</h1>
      <h2>Luxury Dark AirBNB Website</h2>
      <p>Welcome to HouseIL, your premier destination for high-end accommodations.</p>
      
      <h3>Table of Contents</h3>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
      </ul>

      <h3 id="features">Features</h3>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Responsive layout</li>
        <li>Dark theme with pink accents</li>
        <li>Easy navigation</li>
        <li>Booking management system</li>
      </ul>

      <h3 id="installation">Installation</h3>
      <p>To get started, clone the repository and install the dependencies:</p>
      <pre>
        <code>
          git clone https://github.com/yourusername/houseIL.git
          cd houseIL
          npm install
        </code>
      </pre>

      <h3 id="usage">Usage</h3>
      <p>Run the application in development mode:</p>
      <pre>
        <code>
          npm start
        </code>
      </pre>

      <h3 id="contributing">Contributing</h3>
      <p>We welcome contributions! Please fork the repository and submit a pull request.</p>

      <h3 id="license">License</h3>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default ReadMe;