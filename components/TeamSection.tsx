import React from 'react';
import './TeamSection.css'; // Import the CSS for styling

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="/images/member1.jpg" alt="Team Member 1" className="team-member-image" />
          <h3 className="member-name">John Doe</h3>
          <p className="member-role">CEO</p>
        </div>
        <div className="team-member">
          <img src="/images/member2.jpg" alt="Team Member 2" className="team-member-image" />
          <h3 className="member-name">Jane Smith</h3>
          <p className="member-role">Designer</p>
        </div>
        <div className="team-member">
          <img src="/images/member3.jpg" alt="Team Member 3" className="team-member-image" />
          <h3 className="member-name">Emily Johnson</h3>
          <p className="member-role">Marketing Manager</p>
        </div>
        <div className="team-member">
          <img src="/images/member4.jpg" alt="Team Member 4" className="team-member-image" />
          <h3 className="member-name">Michael Brown</h3>
          <p className="member-role">Developer</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;