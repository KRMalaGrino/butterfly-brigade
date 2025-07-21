import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "../../../utils/constants";

function Map() {
  const [typedInfo, setTypedInfo] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  // filter whenever typedInfo changes
  useEffect(() => {
    setFilteredPlaces(
      places.filter((place) =>
        place.name.toLowerCase().includes(typedInfo.toLowerCase().trim())
      )
    );
  }, [typedInfo]);

  return (
    // Map imputs
    <div className="map">
      <h1 className="map__title">East to West</h1>
      <div className="map__userInput">
        <div className="map__searchBar">
          <input
            type="search"
            placeholder="Where are you? !NOT IMPLEMENTED!"
            value={typedInfo}
            onChange={(e) => setTypedInfo(e.target.value)}
            className="map__searchBar-input"
          />
        </div>
        <div className="map__searchBar">
          <input
            type="search"
            placeholder="Where would you like to go?"
            value={typedInfo}
            onChange={(e) => setTypedInfo(e.target.value)}
            className="map__searchBar-input"
          />
        </div>
      </div>

      <MapContainer
        center={[39.5, -98.35]}
        zoom={4}
        style={{ height: "500px", width: "100%" }} // leaflet css div's don't work with markers
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filteredPlaces.map((place) => (
          <Marker
            key={place.landmark}
            position={[Number(place.latitude), Number(place.longitude)]}
          >
            <Popup>
              <strong>{place.landmark}</strong>
              <br />
              {place.city}, {place.state}
              <br />⭐ {place.averageUserRating} – Visit ~{place.visitTimeHrs}
               hr
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
