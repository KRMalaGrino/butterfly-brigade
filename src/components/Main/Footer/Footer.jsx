// import victor from "";
// import liam from "";
// import sabrina from "";
// import brandon from "";
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
          <a href="" target="_blank" rel="noopener noreferrer">
            <img className="footer__icon" src="" alt="Victor" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Liam</p>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img className="footer__icon" src="" alt="Liam" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Sabrina</p>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img className="footer__icon" src="" alt="Sabrina" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Brandon</p>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img className="footer__icon" src="" alt="Brandon" />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Ryan</p>
          <a
            href="https://www.linkedin.com/in/ryanjmalagrino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__icon" src={ryan} alt="Ryan" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
