import { Link } from "react-router-dom";

import or1 from "../../../images/oregon/cliffs-and-rocky-shoreline-oregon.jpg";
import or2 from "../../../images/oregon/coast-rocks.jpg";
import or3 from "../../../images/oregon/mthood.png";
import or5 from "../../../images/oregon/multnomahfalls.webp";
import or6 from "../../../images/oregon/joseph-dawn-lights.jpg";
import or7 from "../../../images/oregon/joseph_or_main_st.jpg";
import or8 from "../../../images/oregon/wallowa-lake.jpg";
import or9 from "../../../images/oregon/watterfall-on-beach.webp";
import or10 from "../../../images/oregon/Secret-Beach-overlook.jpg";

import backBtn from "../../../images/back-btn-2.png";

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
