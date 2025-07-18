import { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Directions from "./Directions/Directions";
import Oregon from "./Locations/Oregon/Oregon";
import Footer from "./Footer/Footer";

function App() {
  const navigate = useNavigate();

  const handleNewYorkClick = () => {
    navigate("/new-york");
  };
  const handleTennesseeClick = () => {
    navigate("/tennessee");
  };
  const handleGeorgiaClick = () => {
    navigate("/georgia");
  };
  const handleArizonaClick = () => {
    navigate("/arizona");
  };
  const handleOregonClick = () => {
    navigate("/oregon");
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              handleNewYorkClick={handleNewYorkClick}
              handleTennesseeClick={handleTennesseeClick}
              handleGeorgiaClick={handleGeorgiaClick}
              handleArizonaClick={handleArizonaClick}
              handleOregonClick={handleOregonClick}
            />
          }
        />
        {/* <Route path="/new-york" element={<NewYork />} />
        <Route path="/tennessee" element={<Tenessee />} />
        <Route path="/georgia" element={<Georgia />} />
        <Route path="/arizona" element={<Arizona />} /> */}
        <Route path="/oregon" element={<Oregon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
