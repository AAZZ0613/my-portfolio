export default function Home() {
    return (
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Focusing on creating excellent Web experiences</p>
        <button onClick={() => window.location.href='/about'}>
        Learn More →
        </button>
      </section>
    );
  }