import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Math", emoji: "➗" },
  { id: 2, name: "Physics", emoji: "🧲" },
  { id: 3, name: "Chemistry", emoji: "⚗️" },
  { id: 4, name: "Biology", emoji: "🧬" },
  { id: 5, name: "Computer Science", emoji: "💻" },
  { id: 6, name: "English", emoji: "📚" },
  { id: 7, name: "History", emoji: "🏛️" },
  { id: 8, name: "Economics", emoji: "💰" },
];

export default function Categories({ onSelectCategory }) {
  return (
    <section className="categories-section">
      <h2 className="categories-title">Explore by Category</h2>
      <div className="categories-container">
        {categories.map(({ id, name, emoji }) => (
          <Link to="/exp">
          <button
            key={id}
            className="category-card"
            onClick={() => onSelectCategory(name)}
            aria-label={`Category ${name}`}
            
          >
            <span className="category-emoji">{emoji}</span>
            <span className="category-name">{name}</span>
          </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
