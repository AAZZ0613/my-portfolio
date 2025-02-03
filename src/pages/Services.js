/*Service.js*/
/* Student name: Rui Sun */
/* Student Number: 301480676 */
/* Date: 2025-02-02 */
/* Description: This is the Services page of the portfolio website.
It contains information about the services offered by the website owner,
 including web development, Python, and consulting services. */
 
import React from 'react';  // Importing React to create components
import './Services.css';    // Importing the associated CSS for styling

export default function Services() {
  return (
    <div className="services-container"> {/* Main container for services section */}
      <h1 className="services-title">My Services</h1> {/* Heading for the services section */}
      <p className="services-intro">Here are the services I offer:</p> {/* Introductory text for the services */}

      {/* First Service: Web Development */}
      <div className="service"> 
        <h3 className="service-title">Web Development</h3> {/* Title of the first service */}
        <p className="service-description">
          I specialize in building high-performance web applications, offering full-stack solutions from front-end development to backend systems. With expertise in React and Node.js, I create responsive, dynamic user interfaces and robust backends, ensuring seamless performance and excellent user experience.
        </p> {/* Description of Web Development service */}
        <ul className="service-list"> {/* List of specific offerings under Web Development */}
          <li>Single-Page Applications (SPAs)</li>
          <li>RESTful APIs</li>
          <li>Database Management with MongoDB, PostgreSQL</li>
          <li>Performance Optimization (Webpack, Lighthouse)</li>
          <li>Security Implementation (OAuth2, JWT)</li>
        </ul>
        <p className="service-conclusion">
          Whether it’s a small app or an enterprise-level platform, I ensure the codebase is maintainable, scalable, and aligned with long-term business goals. If you're looking for a high-performing, scalable web application with a great user experience, I’d love to collaborate with you to bring your project to life and ensure its success.
        </p> {/* Conclusion of Web Development service */}
      </div>
      
      {/* Second Service: Python */}
      <div className="service">
        <h3 className="service-title">Python</h3> {/* Title of the second service */}
        <p className="service-description">
          I am also a passionate Python engineer with strong experience in backend development, data analysis, and automation. Over the years, I’ve developed a deep understanding of Python’s capabilities, using frameworks like Django, Flask, and FastAPI to build scalable and efficient web applications.
        </p> {/* Description of Python expertise */}
        <p className="service-description">
          In addition to web development, I am highly skilled in data manipulation using libraries like Pandas and NumPy, as well as in machine learning with tools such as scikit-learn and TensorFlow. I have successfully built data pipelines, automated processes, and created predictive models to drive business insights.
        </p> {/* Additional description for data analysis and machine learning */}
        <ul className="service-list"> {/* List of specific Python-related services */}
          <li>Backend Development with Django, Flask, FastAPI</li>
          <li>Data Analysis with Pandas, NumPy</li>
          <li>Machine Learning with scikit-learn, TensorFlow</li>
          <li>Cloud Technologies (AWS, GCP)</li>
          <li>Database Management (SQL, NoSQL)</li>
        </ul>
        <p className="service-conclusion">
          My focus is on writing efficient, reusable code and optimizing performance, while also adhering to best practices in software engineering. Collaboration and continuous learning are at the core of my work ethic. I’m eager to tackle new challenges and contribute to impactful projects.
        </p> {/* Conclusion of Python service */}
      </div>

      {/* Third Service: Consulting */}
      <div className="service">
        <h3 className="service-title">Consulting</h3> {/* Title of the consulting service */}
        <p className="service-description">
          Need advice on building scalable applications or improving web performance? I offer expert consulting services to help you optimize your applications and choose the right technologies.
        </p> {/* Description of consulting service */}
        <p className="service-conclusion">
          Whether you're looking to improve scalability, performance, or architecture, feel free to reach out for personalized consulting services tailored to your needs.
        </p> {/* Conclusion of consulting service */}
      </div>
    </div>
  );
}
