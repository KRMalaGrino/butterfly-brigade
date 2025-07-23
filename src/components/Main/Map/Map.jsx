import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "../../../utils/constants";
import L from "leaflet";
import { Polyline } from "react-leaflet";
import { postJson } from "../../../utils/apiUtils";
import mapPin from "../../../images/map_pins/Map Pin.svg";
import mapPinRed from "../../../images/map_pins/Red Vector Map Pin.svg";

function Map() {
  const [originInput, setOriginInput] = useState("");
  const [routePoints, setRoutePoints] = useState([]);

  // grabs the map icons from google which you can do apparently
  const startIcon = new L.Icon({
    iconUrl: mapPin,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const endIcon = new L.Icon({
    iconUrl: mapPinRed,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  function handleOptimizeRoute() {
    postJson("/best_route/", {
      address: originInput, // min/max time and popularty can be called here
    })
      .then((data) => {
        const latlons = data.stops.map((s) => [s.lat, s.lng]);
        setRoutePoints(latlons);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    // Map imputs
    <div className="map">
      <h1 className="map__title">SunChaser</h1>
      <div className="map__userInput">
        <div className="map__searchBar">
          <input
            type="search"
            placeholder="Where are you?"
            value={originInput}
            onChange={(e) => setOriginInput(e.target.value)}
            className="map__searchBar-input"
          />
          <button
            onClick={handleOptimizeRoute}
            className="map__searchBar-button"
          >
            From
          </button>
        </div>
      </div>

      <MapContainer
        center={[39.5, -98.35]}
        zoom={4}
        style={{ height: "500px", width: "100%" }} // leaflet css div's don't work with markers
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {places.map((place) => (
          <Marker
            key={place.landmark}
            position={[Number(place.latitude), Number(place.longitude)]}
            alt={`${place.landmark}`}
          >
            <Popup>
              <h2>{place.landmark}</h2>
              {place.city}, {place.state} {place.averageUserRating}⭐ - Visiting
              time ~{place.visitTimeHrs}
              hr
              <img
                src={place.image}
                className="map__image-small"
              ></img>
            </Popup>
          </Marker>
        ))}
        {routePoints.map((coords, index) => (
          <Marker
            key={index}
            position={coords}
            icon={startIcon}
          >
            <Popup>{endIcon}</Popup>
          </Marker>
        ))}

        {routePoints.length > 1 && (
          <Polyline
            positions={routePoints}
            pathOptions={{ color: "blue", weight: 4, opacity: 0.7 }}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
