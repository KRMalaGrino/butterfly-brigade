import Map from "../../images/map-dark.png";
import ny from "../../images/new-york-logo.png";
import tn from "../../images/tennessee-logo.png";
import ga from "../../images/georgia-logo.png";
import ar from "../../images/arizona-logo.png";
import or from "../../images/oregon-logo.png";

import Directions from "../Directions/Directions";

function Main({
  handleNewYorkClick,
  handleTennesseeClick,
  handleGeorgiaClick,
  handleArizonaClick,
  handleOregonClick,
}) {
  return (
    <div className="main">
      <div className="main__wrapper">
        <h1 className="main__title">East to West</h1>
        <img className="main__map" src={Map} alt="map" />
      </div>
      <img
        className="main__ny-logo"
        src={ny}
        alt="ny"
        onClick={handleNewYorkClick}
      />
      <img
        className="main__tn-logo"
        src={tn}
        alt="tn"
        onClick={handleTennesseeClick}
      />
      <img
        className="main__ga-logo"
        src={ga}
        alt="ga"
        onClick={handleGeorgiaClick}
      />
      <img
        className="main__ar-logo"
        src={ar}
        alt="ar"
        onClick={handleArizonaClick}
      />
      <img
        className="main__or-logo"
        src={or}
        alt="or"
        onClick={handleOregonClick}
      />
      <Directions />
    </div>
  );
}

export default Main;
