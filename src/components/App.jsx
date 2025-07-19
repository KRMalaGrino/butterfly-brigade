import { Route, Routes } from "react-router-dom";

import Main from "./Main/Main";
import Oregon from "./Locations/Oregon/Oregon";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/new-york" element={<NewYork />} />
        <Route path="/tennessee" element={<Tenessee />} />
        <Route path="/georgia" element={<Georgia />} />
        <Route path="/arizona" element={<Arizona />} /> */}
        <Route path="/oregon" element={<Oregon />} />
      </Routes>
    </div>
  );
}

export default App;
