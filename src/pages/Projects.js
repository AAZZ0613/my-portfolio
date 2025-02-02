import React from 'react';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My projects</h1>
      <p>Selected projects demonstrating full-stack development expertise:</p>

      <div className="project">
        <h3>01. Personal Portfolio Platform</h3>
        <p>
          <strong>Tech Stack:</strong> React · Node.js · Express · Webpack<br/>
          · Performance Optimization: Lighthouse 90+ via code splitting & lazy loading<br/>
          · Security Implementation: CSP headers & secure API endpoints
        </p>
      </div>

      <div className="project">
        <h3>02. Public Opinion Analysis System</h3>
        <p>
          <strong>Tech Stack:</strong> Python · Flask · Scrapy-Redis · Elasticsearch<br/>
          · Distributed Crawling: Processed 100k+ daily requests from 20+ platforms<br/>
          · Sentiment Analysis: TextBlob+Jieba model with 80% accuracy<br/>
          · Real-time Alerting: Elasticsearch trend detection in &lt;5min
        </p>
      </div>

      <div className="project">
        <h3>03. Automotive Market Analytics</h3>
        <p>
          <strong>Tech Stack:</strong> Django · Apache Spark · Tableau · Docker<br/>
          · Data Pipeline: Analyzed 200k+ vehicle records with Spark SQL<br/>
          · Price Prediction: XGBoost model with 85% valuation accuracy<br/>
          · BI Integration: Role-based Tableau dashboards
        </p>
      </div>
    </div>
  );
}