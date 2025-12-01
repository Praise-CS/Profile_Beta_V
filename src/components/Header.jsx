// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header({ theme, setTheme }) {
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
// Render Header 
  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white px-3">
      <Link className="navbar-brand text-white fw-bold" to="/"></Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/projects">Projects</Link></li>
        </ul>

        {/* THEME BUTTON */}
        <button
          className="btn btn-light ms-3"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}
