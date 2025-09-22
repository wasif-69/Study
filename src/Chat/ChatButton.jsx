import { useNavigate } from "react-router-dom";
import "./ChatButton.css";

export default function ChatSection() {
  const navigate = useNavigate();

  return (
    <section className="chat-section">
      <div className="chat-section-content">
        <h2>💬 Chat with Your AI Study Buddy</h2>
        <p>
          Stuck on a topic? Confused about a concept? Let our smart AI guide you through learning — like a genius best friend 🤖📚
        </p>
        <button onClick={() => navigate("/chat")}>Start Chatting 💡</button>
      </div>
    </section>
  );
}
