/*Service.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <p className="services-intro">Here are the services I offer:</p>
      
      <div className="service">
        <h3 className="service-title">Web Development</h3>
        <p className="service-description">
          I specialize in building high-performance web applications, offering full-stack solutions from front-end development to backend systems. With expertise in React and Node.js, I create responsive, dynamic user interfaces and robust backends, ensuring seamless performance and excellent user experience.
        </p>
        <ul className="service-list">
          <li>Single-Page Applications (SPAs)</li>
          <li>RESTful APIs</li>
          <li>Database Management with MongoDB, PostgreSQL</li>
          <li>Performance Optimization (Webpack, Lighthouse)</li>
          <li>Security Implementation (OAuth2, JWT)</li>
        </ul>
        <p className="service-conclusion">
          Whether it’s a small app or an enterprise-level platform, I ensure the codebase is maintainable, scalable, and aligned with long-term business goals. If you're looking for a high-performing, scalable web application with a great user experience, I’d love to collaborate with you to bring your project to life and ensure its success.
        </p>
      </div>
      
      <div className="service">
        <h3 className="service-title">Python</h3> 
        <p className="service-description">
          I am also a passionate Python engineer with strong experience in backend development, data analysis, and automation. Over the years, I’ve developed a deep understanding of Python’s capabilities, using frameworks like Django, Flask, and FastAPI to build scalable and efficient web applications.
        </p>
        <p className="service-description">
          In addition to web development, I am highly skilled in data manipulation using libraries like Pandas and NumPy, as well as in machine learning with tools such as scikit-learn and TensorFlow. I have successfully built data pipelines, automated processes, and created predictive models to drive business insights.
        </p>
        <ul className="service-list">
          <li>Backend Development with Django, Flask, FastAPI</li>
          <li>Data Analysis with Pandas, NumPy</li>
          <li>Machine Learning with scikit-learn, TensorFlow</li>
          <li>Cloud Technologies (AWS, GCP)</li>
          <li>Database Management (SQL, NoSQL)</li>
        </ul>
        <p className="service-conclusion">
          My focus is on writing efficient, reusable code and optimizing performance, while also adhering to best practices in software engineering. Collaboration and continuous learning are at the core of my work ethic. I’m eager to tackle new challenges and contribute to impactful projects.
        </p>
      </div>

      <div className="service">
        <h3 className="service-title">Consulting</h3>
        <p className="service-description">
          Need advice on building scalable applications or improving web performance? I offer expert consulting services to help you optimize your applications and choose the right technologies.
        </p>
        <p className="service-conclusion">
          Whether you're looking to improve scalability, performance, or architecture, feel free to reach out for personalized consulting services tailored to your needs.
        </p>
      </div>
    </div>
  );
}
