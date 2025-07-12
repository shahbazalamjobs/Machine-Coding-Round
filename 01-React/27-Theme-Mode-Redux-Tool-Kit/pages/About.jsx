import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>
        This React application demonstrates the use of React Router for navigation
        and Redux Toolkit for global theme state management (light/dark mode).
      </p>

      <section className="about-section">
        <h2>Features</h2>
        <ul>
          <li>🔀 Routing with React Router</li>
          <li>🌓 Light/Dark Theme Toggle using Redux</li>
          <li>🧱 Modular folder structure</li>
          <li>🧑‍💻 Clean, modern UI</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>⚛️ React</li>
          <li>🧰 Redux Toolkit</li>
          <li>🛣️ React Router</li>
          <li>🎨 Custom CSS</li>
        </ul>
      </section>

      <div className="link-buttons">
        <Link to="/" className="btn">🏠 Home</Link>
        <button className="btn back-btn" onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    </div>
  );
}

export default About;
