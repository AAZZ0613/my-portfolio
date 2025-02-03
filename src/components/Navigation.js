/*Navigation.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail, FiCode } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
    
      <div className="logo">
        <Link to="/">
          <img 
            src={logo} 
            alt="Portfolio Logo" 
            className="logo-img"
            style={{ width: '100px', height: 'auto' }}
          />
        </Link>
      </div>

    
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FiHome className="nav-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FiUser className="nav-icon" />
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <FiBriefcase className="nav-icon" />
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            <FiCode className="nav-icon" />
            <span>Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <FiMail className="nav-icon" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;