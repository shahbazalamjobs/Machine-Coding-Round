import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;
