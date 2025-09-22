import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="site-logo">
          <Link to="/">🎓 Lecture<span>Hub</span></Link>
        </div>

        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/chat">AI CHAT!</Link>
          <Link to="/upload">Upload Lecture </Link>
          <Link to="/exp">Watch Lectures</Link>
          {/* Add more links like About, Upload, etc. */}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(prev => !prev)}
            title="Toggle Theme"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            title="Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
