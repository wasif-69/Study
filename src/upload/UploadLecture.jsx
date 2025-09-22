import { useState } from "react";
import "./UploadLecture.css";

export default function UploadLecture() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Math");
  const [videoFile, setVideoFile] = useState(null);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!videoFile || !title.trim()) {
      alert("Please fill in the title and choose a video.");
      return;
    }

    const videoURL = URL.createObjectURL(videoFile);

    const newVideo = {
      id: Date.now(),
      title,
      category,
      videoURL,
    };

    setUploadedVideos([newVideo, ...uploadedVideos]);

    // Reset form
    setTitle("");
    setCategory("Math");
    setVideoFile(null);
    e.target.reset(); // reset file input
  };

  return (
    <div className="upload-page">
      <h2>📤 Upload a New Lecture</h2>

      <form className="upload-form" onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Lecture Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Math">📐 Math</option>
          <option value="Physics">🧲 Physics</option>
          <option value="Chemistry">🧪 Chemistry</option>
          <option value="Biology">🧬 Biology</option>
          <option value="CS">💻 Computer Science</option>
        </select>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
        />

        <button type="submit">Upload</button>
      </form>

      <div className="uploaded-list">
        {uploadedVideos.length > 0 && <h3>🎞 Uploaded Lectures</h3>}
        {uploadedVideos.map((vid) => (
          <div key={vid.id} className="video-card">
            <video controls src={vid.videoURL}></video>
            <div className="video-info">
              <h4>{vid.title}</h4>
              <p>{vid.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
