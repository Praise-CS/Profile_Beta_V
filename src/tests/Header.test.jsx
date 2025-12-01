import { Link } from "react-router-dom";

export default function Header({ toggleTheme, currentTheme }) {
  return (
    <nav className="header-nav">
      <div className="logo">Praise Babalola</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {currentTheme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
