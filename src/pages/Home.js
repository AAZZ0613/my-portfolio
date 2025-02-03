/* Home.js */
/* Student name: Rui Sun */
/* Student Number: 301480676 */
/* Date: 2025-02-02 */
/* This is the Home page of the website. 
   It contains a hero section with a title, a description,
   and a button that links to the About page. */
   
   import './Home.css'; // Import the CSS for the Home page styles
   import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom
   
   // Define the Home component
   export default function Home() {
     const navigate = useNavigate(); // Initialize the navigate function to change routes
   
     return (
       // Hero section to display on the Home page
       <section className="hero">
         <div className="hero-content">
           <h1>Welcome to My Portfolio</h1> {/* Main heading for the Home page */}
           <p>Focusing on creating excellent web experiences</p> {/* Descriptive text for the user */}
           {/* Button that redirects the user to the About page */}
           <button onClick={() => navigate('/about')}>Learn More →</button>
         </div>
       </section>
     );
   }
   