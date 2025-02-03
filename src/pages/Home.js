/*Home.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
/*This is the Home page of the website. 
It contains a hero section with a title,
a description and a button that links to the About page.*/
import './Home.css';
import { useNavigate } from 'react-router-dom';//import the useNavigate hook from the react-router-dom package

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Focusing on creating excellent web experiences</p>
        <button onClick={() => navigate('/about')}>Learn More →</button>
      </div>
    </section>
  );
}