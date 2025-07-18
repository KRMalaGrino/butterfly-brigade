import ny from "../../images/new-york-logo.png";
import tn from "../../images/tennessee-logo.png";
import ga from "../../images/georgia-logo.png";
import ar from "../../images/arizona-logo.png";
import or from "../../images/oregon-logo.png";

function Directions() {
  return (
    <div className="directions">
      <div className="directions__wrapper-1">
        <p className="directions__title">New York</p>
        <img className="directions__img" src={ny} alt="new-york" />
      </div>
      <div className="directions__line"></div>
      <div className="directions__wrapper-2">
        <p className="directions__title">Tenessee</p>
        <img className="directions__img" src={tn} alt="tennessee" />
      </div>
      <div className="directions__line"></div>
      <div className="directions__wrapper-1">
        <p className="directions__title">Georgia</p>
        <img className="directions__img" src={ga} alt="georgia" />
      </div>
      <div className="directions__line"></div>
      <div className="directions__wrapper-2">
        <p className="directions__title">Arizona</p>
        <img className="directions__img" src={ar} alt="arizona" />
      </div>
      <div className="directions__line"></div>
      <div className="directions__wrapper-1">
        <p className="directions__title">Oregon</p>
        <img className="directions__img" src={or} alt="oregon" />
      </div>
    </div>
  );
}

export default Directions;
