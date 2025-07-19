import { Link } from "react-router-dom";

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
        <Link to="/new-york">
          <img className="directions__img" src={ny} alt="new-york" />
        </Link>
      </div>
      <div className="directions__lines">
        <div className="directions__line-1"></div>
        <div className="directions__line-2"></div>
        <div className="directions__line-3"></div>
      </div>
      <div className="directions__wrapper-2">
        <p className="directions__title">Tenessee</p>
        <Link to="/tenessee">
          <img className="directions__img" src={tn} alt="tennessee" />
        </Link>
      </div>
      <div className="directions__lines">
        <div className="directions__line-3"></div>
        <div className="directions__line-2"></div>
        <div className="directions__line-1"></div>
      </div>
      <div className="directions__wrapper-1">
        <p className="directions__title">Georgia</p>
        <Link to="/georgia">
          <img className="directions__img" src={ga} alt="georgia" />
        </Link>
      </div>
      <div className="directions__lines">
        <div className="directions__line-1"></div>
        <div className="directions__line-2"></div>
        <div className="directions__line-3"></div>
      </div>
      <div className="directions__wrapper-2">
        <p className="directions__title">Arizona</p>
        <Link to="/arizona">
          <img className="directions__img" src={ar} alt="arizona" />
        </Link>
      </div>
      <div className="directions__lines">
        <div className="directions__line-3"></div>
        <div className="directions__line-2"></div>
        <div className="directions__line-1"></div>
      </div>
      <div className="directions__wrapper-1">
        <p className="directions__title">Oregon</p>
        <Link to="/oregon">
          <img className="directions__img" src={or} alt="oregon" />
        </Link>
      </div>
    </div>
  );
}

export default Directions;
