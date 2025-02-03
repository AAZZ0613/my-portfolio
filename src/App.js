/*App.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
// Import necessary components and modules from React Router and local files
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Navigation component for the app's header or menu
import Home from './pages/Home'; // Home page component
import About from './pages/About'; // About page component
import Projects from './pages/Projects'; // Projects page component
import Services from './pages/Services'; // Services page component
import Contact from './pages/Contact'; // Contact page component
import './App.css'; // Global CSS styles for the application

// Main application component
function App() {
  return (
    // Router for managing client-side routing
    <Router>
      {/* Render the navigation bar */}
      <Navigation />
      
      {/* Main content area for routing different pages */}
      <main>
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} /> {/* Route to Home page */}
          <Route path="/about" element={<About />} /> {/* Route to About page */}
          <Route path="/projects" element={<Projects />} /> {/* Route to Projects page */}
          <Route path="/services" element={<Services />} /> {/* Route to Services page */}
          <Route path="/contact" element={<Contact />} /> {/* Route to Contact page */}
        </Routes>
      </main>
    </Router>
  );
}

// Export the main application component
export default App;

