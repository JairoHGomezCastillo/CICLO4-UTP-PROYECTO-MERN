import Footer from "./elements/footer";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <div>
      <main>
        <h1>Nuestra Empresa</h1>
        <div className="contenedor-nosotros">
          <div className="contenedor-card">
            <img
              src="/images/simbolo.jpg"
              class="imagen-nosotros"
              alt="..."
            ></img>
            <div class="informacion-nosotros">
              <h5 class="nombre-nosotros">Acerca de nosotros</h5>
              <p class="contenedor-texto-nosotros">
                Nuestra idea nace de una necesidad de la comunidad, pero ante
                todo de una lucha que se da por proteger los derechos que tienen
                los animales de nuestro país. En Reino Rolitos trabajamos en
                conjunto con las organizaciones que ayudan día a día a nuestros
                animales que son vulnerados (maltratados o abandonados).
              </p>
            </div>
          </div>

          <div className="contenedor-card">
            <img src="/images/logo.jpg" class="imagen-nosotros" alt="..."></img>
            <div class="informacion-nosotros">
              <h5 class="nombre-nosotros">Nuestro proposito</h5>
              <p class="contenedor-texto-nosotros">
                Somos una empresa que ofrece y distribuye productos que van
                orientados a satisfacer las necesidades y ofrecer soluciones
                integrales a los tenedores y sus animales de compañía.
              </p>
            </div>
          </div>

          <div className="contenedor-card">
            <img
              src="/images/mision.png"
              class="imagen-nosotros"
              alt="..."
            ></img>
            <div class="informacion-nosotros">
              <h5 class="nombre-nosotros">Nuestro objetivo</h5>
              <p class="contenedor-texto-nosotros">
                Para el 2025, Reino Rolitos se posicionará en el mercado
                colombiano, siendo altamente reconocida por la calidad de
                nuestros productos, el servicio que brindamos a nuestros
                clientes, el bienestar que otorgamos a todos los animales de
                compañía y de calle, además del compromiso social y ambiental
                que tenemos con nuestros grupos de interés.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default Nosotros;
