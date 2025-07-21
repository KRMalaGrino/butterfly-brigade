import Map from "./Map/Map";
import Directions from "./Directions/Directions";
import Footer from "./Footer/Footer";

function Main({ places, onSearch }) {
  return (
    <div className="main">
      <Map onSearch={onSearch} places={places} />
      <Directions />
      <Footer />
    </div>
  );
}

export default Main;
