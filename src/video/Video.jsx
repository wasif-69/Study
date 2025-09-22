import "./video.css";

function extractYouTubeID(url) {
  if (!url) return null;
  try {
    const urlObj = new URL(url);

    // Handle youtu.be short links
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }

    // Handle standard youtube.com URLs
    if (
      urlObj.hostname === "www.youtube.com" ||
      urlObj.hostname === "youtube.com" ||
      urlObj.hostname === "m.youtube.com"
    ) {
      const vParam = urlObj.searchParams.get("v");
      if (vParam) return vParam;

      // Handle /embed/VIDEO_ID URLs
      const paths = urlObj.pathname.split("/");
      const embedIndex = paths.indexOf("embed");
      if (embedIndex !== -1 && paths.length > embedIndex + 1) {
        return paths[embedIndex + 1];
      }
    }

    return null; // if no known pattern matched
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
}
export default function YouTubeVideoCard({ videoUrl, title, category }) {
  const videoId = extractYouTubeID(videoUrl);

  if (!videoId) {
    return (
      <div className="video-card error">
        <p>Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="video-card">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-info">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
}
