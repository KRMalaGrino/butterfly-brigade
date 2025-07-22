import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "../../../utils/constants";
// import newyork from "../images/new-york/new-york-logo.png";
// import orlando from "../images/orlando/orlando-logo.jpg";
// import stlouis from "../images/st-louis/st-louis-logo.jpeg";
// import mtrush from "../images/mt-rush/mt-rush-logo.jpg";
// import sanfran from "../images/san-fran/san-fran-logo.avif";

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

  // // Create the icon object
  // const customIcon = L.icon({
  //   iconUrl: place.image,
  //   iconSize: [40, 40], // adjust size as needed
  //   iconAnchor: [20, 40], // anchor (bottom-center of icon)
  //   popupAnchor: [0, -40], // popup appears above marker
  // });

  return (
    // Map imputs
    <div className="map">
      <h1 className="map__title">SunChaser</h1>
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
        // placeholder={"interactive map"} Placeholder doesn't work
        style={{ height: "500px", width: "100%" }} // leaflet css div's don't work with markers
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filteredPlaces.map((place) => (
          <Marker
            key={place.landmark}
            position={[Number(place.latitude), Number(place.longitude)]}
            alt={`${place.landmark} image`}
            // iconUrl={customIcon}
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
