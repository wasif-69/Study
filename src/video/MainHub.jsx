import YouTubeVideoCard from "./Video";
import "./MainHub.css";

const videos = [
  {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Introduction to Calculus",
    category: "Math",
  },
  {
    videoUrl: "https://youtu.be/LRQtrE7zL6g",
    title: "Newton's Laws Explained",
    category: "Physics",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=oBOk7G_A9KU&t=30s",
    title: "Organic Chemistry Basics",
    category: "Chemistry",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
    title: "What is Machine Learning?",
    category: "Computer Science",
  },
  {
    videoUrl: "https://youtu.be/f0tMocQr1kE",
    title: "The Solar System Explained",
    category: "Astronomy",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=8mAITcNt710",
    title: "World War II in 7 Minutes",
    category: "History",
  },
  {
    videoUrl: "https://youtu.be/GyN2RLj5hCs",
    title: "Photosynthesis Process",
    category: "Biology",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=Wx9v7T9f-20",
    title: "Shakespeare's Hamlet Summary",
    category: "Literature",
  },
  {
    videoUrl: "https://youtu.be/UBVV8pch1dM",
    title: "French Revolution Explained",
    category: "History",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=H1WZJCFgVLE",
    title: "Quantum Physics for Beginners",
    category: "Physics",
  },
  {
    videoUrl: "https://youtu.be/V5BXuZL1HAg",
    title: "Algebra Basics",
    category: "Math",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=szm4t2yExfU",
    title: "Human Anatomy Overview",
    category: "Biology",
  },
  {
    videoUrl: "https://youtu.be/fNk_zzaMoSs",
    title: "Introduction to Python Programming",
    category: "Computer Science",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=Z6WlWq9HZ4A",
    title: "Ancient Egypt Civilization",
    category: "History",
  },
  {
    videoUrl: "https://youtu.be/7DXLkAUux5o",
    title: "Chemical Reactions Tutorial",
    category: "Chemistry",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=WTrk6QR4zE4",
    title: "Geometry Fundamentals",
    category: "Math",
  },
  {
    videoUrl: "https://youtu.be/6HcGq4q0wKc",
    title: "Electricity and Magnetism",
    category: "Physics",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=URUJD5NEXC8",
    title: "Cell Biology Basics",
    category: "Biology",
  },
  {
    videoUrl: "https://youtu.be/8mAITcNt710",
    title: "Roman Empire History",
    category: "History",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=Q52kFL8zVoM",
    title: "Data Structures Explained",
    category: "Computer Science",
  },
  {
    videoUrl: "https://youtu.be/7DXLkAUux5o",
    title: "Periodic Table Guide",
    category: "Chemistry",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
    title: "Neural Networks Introduction",
    category: "Computer Science",
  },
  {
    videoUrl: "https://youtu.be/f0tMocQr1kE",
    title: "Black Holes Explained",
    category: "Astronomy",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=UBVV8pch1dM",
    title: "American Civil War Overview",
    category: "History",
  },
  {
    videoUrl: "https://youtu.be=GyN2RLj5hCs",
    title: "Genetics and DNA",
    category: "Biology",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=Wx9v7T9f-20",
    title: "Macbeth Analysis",
    category: "Literature",
  },
  {
    videoUrl: "https://youtu.be=V5BXuZL1HAg",
    title: "Trigonometry Made Easy",
    category: "Math",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=H1WZJCFgVLE",
    title: "Relativity Theory Basics",
    category: "Physics",
  },
  {
    videoUrl: "https://youtu.be=szm4t2yExfU",
    title: "Evolutionary Biology",
    category: "Biology",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
    title: "Web Development Tutorial",
    category: "Computer Science",
  },
  {
    videoUrl: "https://youtu.be=Z6WlWq9HZ4A",
    title: "Middle Ages History",
    category: "History",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=7DXLkAUux5o",
    title: "Organic Chemistry Reactions",
    category: "Chemistry",
  },
  {
    videoUrl: "https://youtu.be=WTrk6QR4zE4",
    title: "Calculus Derivatives",
    category: "Math",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=6HcGq4q0wKc",
    title: "Thermodynamics Principles",
    category: "Physics",
  },
  {
    videoUrl: "https://youtu.be=URUJD5NEXC8",
    title: "Microbiology Introduction",
    category: "Biology",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=8mAITcNt710",
    title: "Ancient Greece Civilization",
    category: "History",
  },
  {
    videoUrl: "https://youtu.be=Q52kFL8zVoM",
    title: "Algorithms Tutorial",
    category: "Computer Science",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=7DXLkAUux5o",
    title: "Inorganic Chemistry",
    category: "Chemistry",
  },
  {
    videoUrl: "https://youtu.be=aircAruvnKk",
    title: "Artificial Intelligence Basics",
    category: "Computer Science",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=f0tMocQr1kE",
    title: "Galaxies and Universe",
    category: "Astronomy",
  },
  {
    videoUrl: "https://youtu.be=UBVV8pch1dM",
    title: "Industrial Revolution",
    category: "History",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=GyN2RLj5hCs",
    title: "Ecology and Ecosystems",
    category: "Biology",
  }
];

export default function MainHub() {
  return (
    <div className="main-hub">
      <h2>🎓 Lecture Library</h2>
      <div className="video-grid">
        {videos.map((vid) => (
          <YouTubeVideoCard
            key={vid.videoUrl}
            videoUrl={vid.videoUrl} 
            title={vid.title}
            category={vid.category}
          />
        ))}
      </div>
    </div>
  );
}
