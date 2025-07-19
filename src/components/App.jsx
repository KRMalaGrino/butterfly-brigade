import { Route, Routes } from "react-router-dom";

import Main from "./Main/Main";
import Oregon from "./Locations/Location";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oregon" element={<Oregon />} />
      </Routes>
    </div>
  );
}

export default App;
