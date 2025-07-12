import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Theme App</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
