import Map from "./Map/Map";
import Directions from "./Directions/Directions";
import Footer from "./Footer/Footer";

function Main({ places, route, singlePlace }) {
  console.log(places);
  console.log(route);
  console.log(singlePlace);
  return (
    <div className="main">
      <Map places={places} route={route} />
      <Directions />
      <Footer />
    </div>
  );
}

export default Main;
