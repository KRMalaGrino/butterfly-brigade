import { Link } from "react-router-dom";

import newyork from "../../../images/new-york/new-york-logo.png";
import orlando from "../../../images/orlando/orlando-logo.jpg";
import stlouis from "../../../images/st-louis/st-louis-logo.jpeg";
import mtrush from "../../../images/mt-rush/mt-rush-logo.jpg";
import sanfran from "../../../images/san-fran/san-fran-logo.avif";

function Directions() {
  return (
    <div className="directions">
      <div className="directions__wrapper-1">
        <p className="directions__title">New York</p>
        <Link to="/new-york">
          <img className="directions__img" src={newyork} alt="new-york" />
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
          <img className="directions__img" src={orlando} alt="tennessee" />
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
          <img className="directions__img" src={stlouis} alt="georgia" />
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
          <img className="directions__img" src={mtrush} alt="arizona" />
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
          <img className="directions__img" src={sanfran} alt="oregon" />
        </Link>
      </div>
    </div>
  );
}

export default Directions;
