import { Link } from "react-router-dom";

import backBtn from "../../images/back-btn-2.png";

function Location() {
  return (
    <div className="location">
      <Link className="location__back-link" to="/">
        <img className="location__back-btn" src={backBtn} alt="return-btn" />
      </Link>
      <div className="location__img-wrapper">
        <img className="location__img" src={or3} alt="or3" />
        <img className="location__img" src={or5} alt="or5" />
        <img className="location__img" src={or1} alt="or1" />
        <img className="location__img" src={or8} alt="or8" />
        <img className="location__img" src={or9} alt="or9" />
        <img className="location__img" src={or7} alt="or7" />
        <img className="location__img" src={or6} alt="or6" />
        <img className="location__img" src={or10} alt="or10" />
        <img className="location__img" src={or2} alt="or2" />
      </div>
    </div>
  );
}

export default Location;
