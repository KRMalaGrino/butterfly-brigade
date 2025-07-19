import { Link } from "react-router-dom";

import mapDark from "../../../images/map-dark.png";
import ny from "../../../images/new-york-logo.png";
import tn from "../../../images/tennessee-logo.png";
import ga from "../../../images/georgia-logo.png";
import ar from "../../../images/arizona-logo.png";
import or from "../../../images/oregon-logo.png";

function Map() {
  return (
    <div className="map">
      <div className="map__wrapper">
        <h1 className="map__title">East to West</h1>
        <img className="map__map" src={mapDark} alt="map" />
        <form className="map__searchBar-form">
          <label className="map__searchBar-label">
            <input className="map__searchBar-input" />
            <button className="map__searchBar-btn">Go</button>
          </label>
        </form>
      </div>
      <Link to="/new-york">
        <img className="map__ny-logo" src={ny} alt="ny" />
      </Link>
      <Link to="/tenessee">
        <img className="map__tn-logo" src={tn} alt="tn" />
      </Link>
      <Link to="/georgia">
        <img className="map__ga-logo" src={ga} alt="ga" />
      </Link>
      <Link to="/arizona">
        <img className="map__ar-logo" src={ar} alt="ar" />
      </Link>
      <Link to="/oregon">
        <img className="map__or-logo" src={or} alt="or" />
      </Link>
    </div>
  );
}

export default Map;
