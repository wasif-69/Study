import "./main.css";
import heroImage from "../assets/study.png"; // Replace with your image file

export default function Main() {
  return (
    <main className="main-hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>Umeed Academy</span>
        </h1>
        <p>The best place for the best students. Learn faster. Learn smarter.</p>
        {/* Optional: Add a button to browse lectures */}
        <a href="#lectures" className="cta-button">Explore Lectures</a>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Students learning" />
      </div>
    </main>
  );
}
