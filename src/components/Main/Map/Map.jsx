import { useState } from "react";
import { Link } from "react-router-dom";

import mapDark from "../../../images/map-dark.png";

import { places } from "../../../utils/constants";

function Map() {
  const [typedInfo, settypedInfo] = useState("");

  // Submit & change handlers for searchBar
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    settypedInfo(e.target.value);
  };

  // Filter search results based on whats typed
  const filterPlaces = places.filter((place) =>
    place.name.toLowerCase().trim().includes(typedInfo.toLowerCase().trim())
  );
  // Render filtered places
  const renderFilteredPlaces = () => {
    return filterPlaces.map((place) => (
      <Link
        key={place.name}
        to={place.route}
      >
        <img
          className={place.className}
          src={place.image}
          alt={place.name}
        />
      </Link>
    ));
  };

  return (
    <div className="map">
      <div className="map__wrapper">
        <h1 className="map__title">East to West</h1>
        <img
          className="map__map"
          src={mapDark}
          alt="map"
        />
        <form
          className="map__searchBar-form"
          id="map-searchBar"
          onSubmit={handleSubmit}
        >
          <label
            className="map__searchBar-label"
            htmlFor="search-map"
          >
            <input
              className="map__searchBar-input"
              type="search"
              id="map-searchBar"
              name="search"
              placeholder="Where would you like to go ?"
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Map;
