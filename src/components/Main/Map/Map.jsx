import { useState } from "react";
import { Link } from "react-router-dom";

import mapDark from "../../../images/map-dark.png";
import startPoint from "../../../images/start-point.jpg";

import { places } from "../../../utils/constants";

function Map() {
  const [typedInfo, settypedInfo] = useState("");
  const [pinPosition, setPinPosition] = useState(null);

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
      <Link key={place.name} to={place.route}>
        <img className={place.className} src={place.image} alt={place.name} />
      </Link>
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
      {renderFilteredPlaces()}
    </div>
  );
}

export default Map;
