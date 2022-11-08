import Carrusel from "./elements/carrusel"
import Footer from "./elements/footer";
import Body from "./elements/body";
import "./home.css";

const Home = () => { 
    return (
      <div>
        <div className="contenedor-carrusel">
          <Carrusel />
        </div>
        <div className="contenedor-body">
          <Body />
        </div>
        <div className="contenedor-footer">
          <Footer />
        </div>
      </div>
    );
}
export default Home;