import { Link } from "react-router-dom";

import newyork from "../../../images/new-york/new-york-logo.png";
import orlando from "../../../images/orlando/orlando-logo.jpg";
import stlouis from "../../../images/st-louis/st-louis-logo.jpeg";
import mtrush from "../../../images/mt-rush/mt-rush-logo.jpg";
import sanfran from "../../../images/san-fran/san-fran-logo.avif";

function Directions() {
  return (
    <div className="directions">
      {/* first stop */}
      <div className="directions__wrapper-1">
        <p className="directions__title">New York</p>
        <Link to="/new-york">
          <img
            className="directions__img"
            src={newyork}
            alt="new-york"
          />
        </Link>
      </div>
      <div className="directions__lines">
        <div className="directions__line-1"></div>
        <p className="directions__text">I-95 S (1,078 miles)</p>
        <div className="directions__line-2"></div>
        <p className="directions__text">16 hr 14 min</p>
        <div className="directions__line-3"></div>
      </div>
      {/* second stop */}
      <div className="directions__wrapper-2">
        <Link to="/tenessee">
          <img
            className="directions__img"
            src={orlando}
            alt="tennessee"
          />
        </Link>
        <p className="directions__title">Orlando</p>
      </div>
      <div className="directions__lines">
        <div className="directions__line-3"></div>
        <p className="directions__text">I-75 N and I-24 W (992 miles)</p>
        <div className="directions__line-2"></div>
        <p className="directions__text">14 hr 7 min</p>
        <div className="directions__line-1"></div>
      </div>
      {/* third stop */}
      <div className="directions__wrapper-1">
        <p className="directions__title">St Louis</p>
        <Link to="/georgia">
          <img
            className="directions__img"
            src={stlouis}
            alt="georgia"
          />
        </Link>
      </div>
      <div className="directions__lines">
        <div className="directions__line-1"></div>
        <p className="directions__text">I-29 N and I-90 W (974 miles)</p>
        <div className="directions__line-2"></div>
        <p className="directions__text">14 hr 5 min</p>
        <div className="directions__line-3"></div>
      </div>
      {/* fourth stop */}
      <div className="directions__wrapper-2">
        <Link to="/arizona">
          <img
            className="directions__img"
            src={mtrush}
            alt="arizona"
          />
        </Link>
        <p className="directions__title">Mt. Rushmore</p>
      </div>
      <div className="directions__lines">
        <div className="directions__line-3"></div>
        <p className="directions__text">I-80 W (1,357 miles)</p>
        <div className="directions__line-2"></div>
        <p className="directions__text">20 hr 52 min</p>
        <div className="directions__line-1"></div>
      </div>
      {/* fifth stop */}
      <div className="directions__wrapper-1">
        <p className="directions__title">San Fransisco</p>
        <Link to="/oregon">
          <img
            className="directions__img"
            src={sanfran}
            alt="oregon"
          />
        </Link>
      </div>
    </div>
  );
}

export default Directions;
