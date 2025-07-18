import Map from "../../images/map-dark.png";
import ny from "../../images/new-york-logo.png";
import tn from "../../images/tennessee-logo.png";
import ga from "../../images/georgia-logo.png";
import ar from "../../images/arizona-logo.png";
import or from "../../images/oregon-logo.png";

function Main({ handleOregonClick }) {
  return (
    <div className="main">
      <h1 className="main__title">East to West</h1>
      <img className="main__map" src={Map} alt="map" />
      <img className="main__ny-logo" src={ny} alt="ny" />
      <img className="main__tn-logo" src={tn} alt="tn" />
      <img className="main__ga-logo" src={ga} alt="ga" />
      <img className="main__ar-logo" src={ar} alt="ar" />
      <img
        className="main__or-logo"
        src={or}
        alt="or"
        onClick={handleOregonClick}
      />
    </div>
  );
}

export default Main;
