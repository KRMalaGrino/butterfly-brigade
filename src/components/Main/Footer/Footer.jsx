import victor from "../../../images/teammates/vic.jpeg";
import liam from "../../../images/teammates/liam.jpeg";
import sabrina from "../../../images/teammates/sabrina.jpeg";
import ryan from "../../../images/teammates/Ryan.jpg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        Butterfly Brigade - Road Trip : East to West
      </p>
      <div className="footer__team-linked-ins">
        <div className="footer__wrapper">
          <p className="footer__icon-text">Victor</p>
          <a

            href="https://www.linkedin.com/in/victor-forman-9687b1a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__icon" src={victor} alt="Victor" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Sabrina</p>
          <a

            href="https://www.linkedin.com/in/sabrina-mcfield/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__icon" src={sabrina} alt="Sabrina" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Liam</p>
          <a
            href="https://www.linkedin.com/in/liam-d-48935a34a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__icon" src={liam} alt="Liam" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Ryan</p>
          <a
            href="https://www.linkedin.com/in/ryanjmalagrino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__icon"
              src={ryan}
              alt="Ryan"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
