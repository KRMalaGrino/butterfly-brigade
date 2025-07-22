import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "../../../utils/constants";
import L from "leaflet";

function Map() {
  const [typedInfo, setTypedInfo] = useState("");
  const [originInput, setOriginInput] = useState("");
  const [originCoords, setOriginCoords] = useState(null);
  const [destinationInput, setDestinationInput] = useState("");
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const startIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const endIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  function handleOriginSearch() {
    if (!originInput.trim()) return;

    const query = encodeURIComponent(originInput.trim());
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setOriginCoords([parseFloat(lat), parseFloat(lon)]);
        } else {
          alert("Location not found.");
        }
      })
      .catch((err) => {
        console.error("Geocoding error:", err);
        alert("Failed to geocode address.");
      });
  }

  function handleDestinationSearch() {
    if (!destinationInput.trim()) return;

    const query = encodeURIComponent(destinationInput.trim());
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setDestinationCoords([parseFloat(lat), parseFloat(lon)]);
        } else {
          alert("Destination not found.");
        }
      })
      .catch((err) => {
        console.error("Geocoding error:", err);
        alert("Failed to geocode address.");
      });
  }

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
            placeholder="Where are you?"
            value={originInput}
            onChange={(e) => setOriginInput(e.target.value)}
            className="map__searchBar-input"
          />
          <button
            onClick={handleOriginSearch}
            className="map__searchBar-button"
          >
            From
          </button>
        </div>
        <div className="map__searchBar">
          <input
            type="search"
            placeholder="Where would you like to go?"
            value={destinationInput}
            onChange={(e) => setDestinationInput(e.target.value)}
            className="map__searchBar-input"
          />
          <button
            className="map__searchBar-button"
            onClick={handleDestinationSearch}
          >
            To
          </button>
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
        {originCoords && (
          <Marker position={originCoords} icon={startIcon}>
            <Popup>Start Location</Popup>
          </Marker>
        )}
        {destinationCoords && (
          <Marker position={destinationCoords} icon={endIcon}>
            <Popup>Destination</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
