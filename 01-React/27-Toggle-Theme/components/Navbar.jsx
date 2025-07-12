import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h2>MyApp</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
