/* About.js */
/* Student name: Rui Sun */
/* Student Number: 301480676 */
/* Date: 2025-02-02 */
/* Description: This is the About page of the portfolio website. 
It contains the profile picture, name, specialization, and resume download/view buttons. */

// Importing React and necessary assets for the About page
import React from 'react';
import profileImage from '../picture.jpg'; // Importing the profile image
import './About.css'; // Importing the associated CSS for styling

// About functional component
export default function About() {
  // Path to the resume PDF file
  const pdfPath = process.env.PUBLIC_URL + '/documents/Resume.pdf';

  return (
    <div className="about-container">
      {/* Profile section containing the image and information */}
      <div className="profile-section">
        {/* Displaying the profile image */}
        <img 
          src={profileImage}
          alt="Profile"
          className="avatar"
        />
        <div className="profile-info">
          {/* Displaying the profile name and job title */}
          <h1>Rui Sun</h1>
          <h2>Full-stack Developer</h2>
          {/* Displaying the specialization */}
          <p className="specialization">Specializing in React & Node.js Development</p>
        </div>
      </div>

      {/* Section for resume actions (View and Download buttons) */}
      <div className="resume-actions">
        {/* Button for viewing the resume in a new tab */}
        <button 
          onClick={() => window.open(pdfPath, '_blank')} // Opens the PDF in a new tab
          className="resume-btn view-btn"
        >
          📄 View Resume
        </button>
        {/* Button for downloading the resume as a PDF file */}
        <a 
          href={pdfPath} 
          download="Rui_Sun_Resume.pdf" // Initiates download with the specified filename
          className="resume-btn download-btn"
        >
          ⬇️ Download PDF
        </a>
      </div>
    </div>
  );
}
