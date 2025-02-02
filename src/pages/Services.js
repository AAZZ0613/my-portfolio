import React from 'react';

export default function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <p>Here are the services I offer:</p>
      
      <div className="service">
        <h3>Web Development</h3>
        <p>I specialize in building high-performance web applications using React, Node.js, and other modern technologies.</p>
      </div>
      
      <div className="service">
        <h3>UI/UX Design</h3>
        <p>Creating intuitive and user-friendly interfaces is key to delivering great user experiences. I offer UI/UX design services tailored to your needs.</p>
      </div>

      <div className="service">
        <h3>Consulting</h3>
        <p>If you need advice on building scalable applications or improving your web performance, feel free to reach out for consulting services.</p>
      </div>
    </div>
  );
}
