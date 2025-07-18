import { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Oregon from "./Locations/Oregon/Oregon";
import Footer from "./Footer/Footer";

function App() {
  const navigate = useNavigate();

  const handleOregonClick = () => {
    navigate("/oregon");
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main handleOregonClick={handleOregonClick} />}
        />
        <Route path="/oregon" element={<Oregon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
