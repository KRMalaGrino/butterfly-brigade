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
          <a
            href="https://www.linkedin.com/in/victor-forman-9687b1a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__icon"
              src="https://media.licdn.com/dms/image/v2/D4D03AQFz2ml5q23H1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723445985603?e=1755734400&v=beta&t=7R7bO9Iloj7cTjtxJkJR8caGvK3hWThF46FViOnE2BY"
              alt="Victor"
            />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Liam</p>
          <a
            href="https://www.linkedin.com/in/liam-d-48935a34a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__icon"
              src="https://media.licdn.com/dms/image/v2/D4E35AQEvZ1BooiukDg/profile-framedphoto-shrink_400_400/B4EZgZn1E_GYAg-/0/1752776528455?e=1753578000&v=beta&t=EWW7fhbMU9bQRI4fUQ3v7ps61U8CMmqXZdn9EpSoZVc"
              alt="Liam"
            />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Sabrina</p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__icon"
              src="savrina icon"
              alt="Sabrina"
            />
          </a>
        </div>
        <div className="footer__wrapper">
          <p className="footer__icon-text">Brandon</p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__icon"
              src="brandon icon"
              alt="Brandon"
            />
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
