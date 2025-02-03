/*Projects.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
/*Description: This is the Projects page of the portfolio website.*/
import React from 'react';
import project1Img from 'D:/JavaScript_Class/my-portfolio/src/assets/images/Project1.jpg';
import project2Img from 'D:/JavaScript_Class/my-portfolio/src/assets/images/Project2.jpg'; 
import project3Img from 'D:/JavaScript_Class/my-portfolio/src/assets/images/Project3.jpg';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p className="portfolio-description">Three featured projects demonstrating full-stack development capabilities</p>


      <div className="project-card">
        <div className="project-media">
          <img src={project1Img} alt="Portfolio Platform" className="project-image" />
          <div className="project-meta">
            <span className="project-role">Full-stack Developer</span>
            <span className="project-duration">2025.01 - 2025.02</span>
          </div>
        </div>
        
        <div className="project-content">
          <h3 className="project-title">01. Personal Portfolio Platform</h3>
          <div className="tech-stack">
            <strong>Technical Architecture:</strong>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Webpack</span>
          </div>
          
          <div className="project-outcomes">
            <h4>Key Outcomes:</h4>
            <ul>
              <li>⚡ 90+ Lighthouse performance score through code splitting optimization</li>
              <li>🛡️ Enhanced security with CSP headers implementation</li>
              <li>🚀 40% faster page loads via image lazy loading</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="project-card">
        <div className="project-media">
          <img src={project2Img} alt="Opinion Analysis" className="project-image" />
          <div className="project-meta">
            <span className="project-role">Project Leader</span>
            <span className="project-duration">2021.09 - 2023.06</span>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">02. Public Opinion Analysis System</h3>
          <div className="tech-stack">
            <strong>Technical Architecture:</strong>
            <span>Python</span>
            <span>Flask</span>
            <span>Scrapy-Redis</span>
            <span>Elasticsearch</span>
          </div>
          
          <div className="project-outcomes">
            <h4>Key Outcomes:</h4>
            <ul>
              <li>🕸️ Distributed crawling system handling 100k+ daily requests</li>
              <li>📈 80% accurate sentiment analysis model with NLP integration</li>
              <li>🔔 Real-time alerting system with &lt;5min latency</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="project-card">
        <div className="project-media">
          <img src={project3Img} alt="Auto Analytics" className="project-image" />
          <div className="project-meta">
            <span className="project-role">Data Engineer</span>
            <span className="project-duration">2023.02 - 2023.05</span>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">03. Automotive Market Analytics</h3>
          <div className="tech-stack">
            <strong>Technical Architecture:</strong>
            <span>Django</span>
            <span>Apache Spark</span>
            <span>Tableau</span>
            <span>Docker</span>
          </div>
          
          <div className="project-outcomes">
            <h4>Key Outcomes:</h4>
            <ul>
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