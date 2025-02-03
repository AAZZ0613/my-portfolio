/* Navigation.js */
/* Student name: Rui Sun */
/* Student Number: 301480676 */
/* Date: 2025-02-02 */

// Importing necessary components and icons from react-router-dom and react-icons
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail, FiCode } from 'react-icons/fi';

// Import the logo image and stylesheet
import logo from '../assets/images/logo.svg';
import './Navigation.css';

// Functional component for the navigation menu
function Navigation() {
  return (
    <nav className="navbar">
    
      {/* Logo Section: Clicking the logo redirects to the homepage */}
      <div className="logo">
        <Link to="/">
          <img 
            src={logo} 
            alt="Portfolio Logo" 
            className="logo-img"
            style={{ width: '100px', height: 'auto' }} // Inline style for image size
          />
        </Link>
      </div>

      {/* Navigation menu with links to different sections of the portfolio */}
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FiHome className="nav-icon" /> {/* Home icon */}
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FiUser className="nav-icon" /> {/* About icon */}
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <FiBriefcase className="nav-icon" /> {/* Projects icon */}
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            <FiCode className="nav-icon" /> {/* Services icon */}
            <span>Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <FiMail className="nav-icon" /> {/* Contact icon */}
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Export the Navigation component for use in other parts of the app
export default Navigation;