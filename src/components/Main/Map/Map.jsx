import { useState } from "react";

import mapDark from "../../../images/map-dark.png";
import startPoint from "../../../images/start-point.jpg";

import { cities } from "../../../utils/constants";

function Map({ places, route, onSearch }) {
  const [typedInfo, settypedInfo] = useState("");
  const [pinPosition, setPinPosition] = useState(null);

  // Submit & change handlers for searchBar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typedInfo.trim()) {
      onSearch(typedInfo.trim());
    }
  };
  const handleChange = (e) => {
    settypedInfo(e.target.value);
  };

  // Filter search results based on whats typed
  const filterCities = cities.filter((place) =>
    place.name.toLowerCase().trim().includes(typedInfo.toLowerCase().trim())
  );
  // Render filtered cities
  const renderFilteredCities = () => {
    return filterCities.map((place) => (
      <img
        key={`${place.name}-${place.id || place.lat}-${place.lon}`}
        className={place.className}
        src={place.image}
        alt={place.name}
        onClick={() => onSearch(place.name)}
      />
    ));
  };

  // Handle clicking on the map
  const handleStartPointClick = (e) => {
    const map = e.target.getBoundingClientRect();
    const x = e.clientX - map.left; // x relative to image
    const y = e.clientY - map.top; // y relative to image
    setPinPosition({ x, y });
  };

  return (
    <div className="map">
      <div className="map__wrapper">
        <h1 className="map__title">East to West</h1>
        <img
          className="map__map"
          src={mapDark}
          alt="map"
          onClick={handleStartPointClick}
        />
        {route?.points && <RouteLines points={route.points} />}
        {pinPosition && (
          <img
            className="map__pin-icon"
            src={startPoint}
            alt="start-point"
            style={{
              top: `${pinPosition.y}px`,
              left: `${pinPosition.x}px`,
              transform: "translate(140px, 200px)",
            }}
          />
        )}
        <form
          className="map__searchBar-form"
          id="map-searchBar"
          onSubmit={handleSubmit}
        >
          <label className="map__searchBar-label" htmlFor="search-map">
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
      {renderFilteredCities()}
    </div>
  );
}

export default Map;
