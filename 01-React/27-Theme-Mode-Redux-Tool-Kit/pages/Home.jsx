import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Our React App</h1>
      <p>This is a simple app demonstrating routing and theming with Redux Toolkit.</p>

      <div className="link-buttons">
        <Link to="/" className="btn">Home</Link>
        <Link to="/about" className="btn">About</Link>
      </div>

      <button className="btn back-btn" onClick={() => navigate(-1)}>⬅ Go Back</button>
    </div>
  );
}

export default Home;
