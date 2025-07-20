import newyork from "../images/new-york/new-york-logo.png";
import orlando from "../images/orlando/orlando-logo.jpg";
import stlouis from "../images/st-louis/st-louis-logo.jpeg";
import mtrush from "../images/mt-rush/mt-rush-logo.jpg";
import sanfran from "../images/san-fran/san-fran-logo.avif";

const cities = [
  {
    name: "New York",
    route: "/new-york",
    image: newyork,
    className: "map__ny-logo",
    latitude: "",
    longitude: "",
  },
  {
    name: "Orlando",
    route: "/orlando",
    image: orlando,
    className: "map__orlando-logo",
    latitude: "",
    longitude: "",
  },
  {
    name: "St. Louis",
    route: "/st-louis",
    image: stlouis,
    className: "map__st-logo",
    latitude: "",
    longitude: "",
  },
  {
    name: "Mt. Rushmore",
    route: "/mt-rushmore",
    image: mtrush,
    className: "map__mt-logo",
    latitude: "",
    longitude: "",
  },
  {
    name: "San Fransisco",
    route: "/san-fransisco",
    image: sanfran,
    className: "map__sanfran-logo",
    latitude: "",
    longitude: "",
  },
];

export { cities };
