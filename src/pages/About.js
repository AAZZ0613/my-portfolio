import React from 'react';
import profileImage from 'D:/JavaScript_Class/my-portfolio/src/picture.jpg';
import './About.css';

export default function About() {
  const pdfPath = process.env.PUBLIC_URL + '/documents/Resume.pdf';

  return (
    <div className="about-container">
      <div className="profile-section">
        <img 
          src={profileImage}
          alt="Profile"
          className="avatar"
        />
        <div className="profile-info">
          <h1>Rui Sun</h1>
          <h2>Full-stack Developer</h2>
          <p className="specialization">Specializing in React & Node.js Development</p>
        </div>
      </div>

      <div className="resume-actions">
        <button 
          onClick={() => window.open(pdfPath, '_blank')}
          className="resume-btn view-btn"
        >
          📄 View Resume
        </button>
        <a 
          href={pdfPath} 
          download="Rui_Sun_Resume.pdf"
          className="resume-btn download-btn"
        >
          ⬇️ Download PDF
        </a>
      </div>
    </div>
  );
}