/*Projects.js*/
/* Student name: Rui Sun */
/* Student Number: 301480676 */
/* Date: 2025-02-02 */
/* Description: This is the Projects page of the portfolio website. */

import React from 'react'; // Importing React library for creating components
import Project1Img from '../assets/images/Project1.jpg'; // Importing image for Project 1
import Project2Img from '../assets/images/Project2.jpg'; // Importing image for Project 2
import Project3Img from '../assets/images/Project3.jpg'; // Importing image for Project 3
import './Projects.css'; // Importing the CSS file for styling the Projects page

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1> {/* Page Title */}
      <p className="portfolio-description">Three featured projects demonstrating full-stack development capabilities</p> {/* Description of the page */}

      {/* Project 1 Card */}
      <div className="project-card">
        <div className="project-media">
          {/* Project 1 Image */}
          <img src={Project1Img} alt="Portfolio Platform" className="project-image" />
          <div className="project-meta">
            {/* Project 1 Role and Duration */}
            <span className="project-role">Full-stack Developer</span>
            <span className="project-duration">2025.01 - 2025.02</span>
          </div>
        </div>
        
        <div className="project-content">
          <h3 className="project-title">01. Personal Portfolio Platform</h3> {/* Project 1 Title */}
          <div className="tech-stack">
            <strong>Technical Architecture:</strong> {/* Label for tech stack */}
            <span>React</span> {/* Technology used in Project 1 */}
            <span>Node.js</span> {/* Technology used in Project 1 */}
            <span>Express</span> {/* Technology used in Project 1 */}
            <span>Webpack</span> {/* Technology used in Project 1 */}
          </div>
          
          <div className="project-outcomes">
            <h4>Key Outcomes:</h4> {/* Key outcomes header */}
            <ul>
              {/* List of key outcomes for Project 1 */}
              <li>⚡ 90+ Lighthouse performance score through code splitting optimization</li>
              <li>🛡️ Enhanced security with CSP headers implementation</li>
              <li>🚀 40% faster page loads via image lazy loading</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project 2 Card */}
      <div className="project-card">
        <div className="project-media">
          {/* Project 2 Image */}
          <img src={Project2Img} alt="Opinion Analysis" className="project-image" />
          <div className="project-meta">
            {/* Project 2 Role and Duration */}
            <span className="project-role">Project Leader</span>
            <span className="project-duration">2021.09 - 2023.06</span>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">02. Public Opinion Analysis System</h3> {/* Project 2 Title */}
          <div className="tech-stack">
            <strong>Technical Architecture:</strong> {/* Label for tech stack */}
            <span>Python</span> {/* Technology used in Project 2 */}
            <span>Flask</span> {/* Technology used in Project 2 */}
            <span>Scrapy-Redis</span> {/* Technology used in Project 2 */}
            <span>Elasticsearch</span> {/* Technology used in Project 2 */}
          </div>
          
          <div className="project-outcomes">
            <h4>Key Outcomes:</h4> {/* Key outcomes header */}
            <ul>
              {/* List of key outcomes for Project 2 */}
              <li>🕸️ Distributed crawling system handling 100k+ daily requests</li>
              <li>📈 80% accurate sentiment analysis model with NLP integration</li>
              <li>🔔 Real-time alerting system with &lt;5min latency</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project 3 Card */}
      <div className="project-card">
        <div className="project-media">
          {/* Project 3 Image */}
          <img src={Project3Img} alt="Auto Analytics" className="project-image" />
          <div className="project-meta">
            {/* Project 3 Role and Duration */}
            <span className="project-role">Data Engineer</span>
            <span className="project-duration">2023.02 - 2023.05</span>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">03. Automotive Market Analytics</h3> {/* Project 3 Title */}
          <div className="tech-stack">
            <strong>Technical Architecture:</strong> {/* Label for tech stack */}
            <span>Django</span> {/* Technology used in Project 3 */}
            <span>Apache Spark</span> {/* Technology used in Project 3 */}
            <span>Tableau</span> {/* Technology used in Project 3 */}
            <span>Docker</span> {/* Technology used in Project 3 */}
          </div>
          
          <div className="project-outcomes">
            <h4>Key Outcomes:</h4> {/* Key outcomes header */}
            <ul>
              {/* List of key outcomes for Project 3 */}
              <li>📊 Processed 200k+ vehicle records with Spark SQL</li>
              <li>🤖 85% accurate price prediction model using XGBoost</li>
              <li>📱 Integrated BI dashboards with RBAC controls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
