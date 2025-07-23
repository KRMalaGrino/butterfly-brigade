import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Main/Main";

import * as api from "../utils/api";

function App() {
  const [places, setPlaces] = useState([]);
  const [route, setRoute] = useState(null);
  const [singlePlace, setSinglePlace] = useState(null);

  // useEffect(() => {
  //   // get places
  //   api
  //     .getPlaces()
  //     .then((data) => {
  //       setPlaces(data);
  //     })
  //     .catch(console.error);

  //   // get routes
  //   api
  //     .getRoute([
  //       "New York",
  //       "Orlando",
  //       "St. Louis",
  //       "Mt. Rushmore",
  //       "San Francisco",
  //     ])
  //     .then((route) => {
  //       setRoute(route);
  //     })
  //     .catch(console.error);

  //   // get a single place by Id
  //   api
  //     .getPlaceById(1)
  //     .then((place) => {
  //       setSinglePlace(place);
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              places={places}
              route={route}
              singlePlace={singlePlace}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
