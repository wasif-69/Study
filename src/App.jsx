import { useState } from "react";
import "./App.css";
import Categories from "./categories/Categories";
import Header from "./Header/header";
import Main from "./Main/Main";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat/chat";
import ChatButton from "./Chat/ChatButton";
import UploadLecture from "./upload/UploadLecture";
import Footer from "./Footer/footer";
import YouTubeVideoCard from "./video/Video";
import MainHub from "./video/MainHub";
// import StudyVideos from './StudyVideos/StudyVideos' // <-- make sure to import if you have it

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Categories onSelectCategory={setSelectedCategory} />
              {/* <StudyVideos selectedCategory={selectedCategory} /> */}
              <ChatButton />
              <Footer />
            </>
          }
        />

        <Route
          path="/chat"
          element={
            <>
              <Header />
              <Chat />
              <Footer />
            </>
          }
        />

        <Route
          path="/upload"
          element={
            <>
              <Header />
              <UploadLecture />
              <Footer />
            </>
          }
        />

        <Route path="/exp" element={<>
        <Header/>
        <MainHub/>
        </>} />
       </Routes>
    </>
  );
}

export default App;
