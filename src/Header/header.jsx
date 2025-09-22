import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../assets/Untitled image.png";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Auto-close menu on route change
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="site-logo">
          <Link to="/" className="logo-link" aria-label="Home">
            <img src={logo} alt="Umeed Academy Logo" />
            <span className="brand-name">
              Umeed <span className="highlight">Academy</span>
            </span>
          </Link>
        </div>

        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/">🏠 Home</Link>
          <Link to="/chat">🤖 AI Chat</Link>
          <Link to="/upload">⬆️ Upload</Link>
          <Link to="/exp">📚 Lectures</Link>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            title="Toggle Dark Mode"
            aria-label="Toggle Theme"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            title="Menu"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
