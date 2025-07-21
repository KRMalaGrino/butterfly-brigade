import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Filters from "./PyFuncs/Filters";
import LandmarkCards from "./PyFuncs/LandmarkCards";
import RouteLines from "./PyFuncs/RouteLines";
import TripSummary from "./PyFuncs/TripSummary";

import Main from "./Main/Main";

import * as api from "../utils/api";

function App() {
  const [places, setPlaces] = useState([]);
  const [route, setRoute] = useState(null);
  const [filters, setFilters] = useState({ type: "all", sortBy: "popularity" });

  // get places on mount
  useEffect(() => {
    api
      .getPlaces()
      .then((data) => {
        setPlaces(data.places || data);
      })
      .catch(console.error);
  }, []);

  // Fetch optimized route when places or filters change
  useEffect(() => {
    if (places.length === 0) return;
    api.getOptimizedRoute(filters).then(setRoute).catch(console.error);
  }, [places, filters]);

  const handleSearch = (address) => {
    api.getRoute(address).then(setRoute).catch(console.error);
  };

  // Filter and sort landmarks on frontend for display
  const filteredPlaces = places
    .filter((p) => filters.type === "all" || p.type === filters.type)
    .sort((a, b) => {
      if (filters.sortBy === "popularity") return b.popularity - a.popularity;
      if (filters.sortBy === "visitTime")
        return a.visit_time_hrs - b.visit_time_hrs;
      return 0;
    });

  // const handleSubmit = () => {
  //   const exampleData = {
  //     name: "Ryan",
  //     email: "ryan@example.com",
  //     message: "Hello",
  //   };
  //   api
  //     .submitData(exampleData)
  //     .then((response) => {
  //       console.log("Submit success:", response);
  //     })
  //     .catch(console.error);
  // };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Main places={filteredPlaces} onSearch={handleSearch} />}
        />
      </Routes>
      <Filters filters={filters} setFilters={setFilters} />
      <LandmarkCards places={filteredPlaces} />
      <TripSummary route={route} />
    </div>
  );
}

export default App;
