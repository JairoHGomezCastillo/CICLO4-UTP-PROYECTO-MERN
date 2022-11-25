import { Container, Image, Col, Row, NavLink } from "react-bootstrap";
import "./comunidad.css";
import Footer from "./elements/footer";
import ReactPlayer from "react-player";

const Comunidad = () => {
  return (
    <div>
      <h2 className="blogR" >El blog que te acerca a los Reyes y Reinas de la casa.</h2>
      <Image src="/images/CAT_4.jpg" className="gatoimage" />

      <Container className="contaComunidad">
        <h2>Bienvenidos a la Comunidad Rolitos</h2>

        <div className="react-player">
          <title> Tejiendo saberes en La Ventana Azul</title>
          <ReactPlayer url="https://www.youtube.com/watch?v=bLB7qXiPUsk"  />
        </div>

        <div>
          <Row>
            <Col className="txt1">
              <p>
                Reino rolitos es un emprendimiento creado por dos socias,
                colegas y amigas que comparten una gran pasión por los animales
                de compañía (perros y gatos), ya que Cindy tiene (3) gatos y
                Diana tiene (3) perros, donde cada una tiene una historia que
                contar. Este es un espacio, pretende compartir contenido que
                permita promover el vínculo humano animal e informarnos sobre la
                responsabilidad como tenedores de animales de compañía,
                tendencias y demás datos de interés.
              </p>
            </Col>
          </Row>
        </div>

        <Row className="show-grid" style={{ textAlign: "justify" }}>
          <Col sm={4}  className="person-wrapper">
            <Image src="/images/CAT_12.jpg" circle className="img2" />
            <h3 style={{ textAlign: "center" }}>Humanización animal</h3>
            <p>
              Los animales de compañía han tenido gran acogida en los hogares,
              son un miembro más de la familia, tanto que hemos demostrado un
              gran amor, afecto y cariño, sin embargo, algunas personas lo
              elevan un poco más de la cuenta, llevándolo a un exceso que quizás
              cause un daño en el perro o gato..
            </p>
            <NavLink
              href="https://servicioalclienter54.wixsite.com/my-site-1/post/humanizaci%C3%B3n-animal"
              target="_blank"
              className="link"
            >
              Leer más
            </NavLink>
          </Col>
          <Col sm={4} className="person-wrapper">
            <Image src="/images/DOG_10.jpg" circle className="img2" />
            <h3 style={{ textAlign: "center" }}>Alimentación BARF</h3>
            <p>
              Algunos se preguntarán ¿Qué es eso de la dieta BARF?, que está muy
              de moda para los perros y gatos. El acrónimo en español sería
              Alimentación Cruda Biológicamente Apropiada, esto quiere decir que
              es una dieta alimentaria a base de productos frescos y naturales,
              lo cual, parecido a como nos alimentamos nosotros, cabe aclarar
              que los productos son seleccionados de acuerdo a las necesidades
              nutricionales, ya que trae muchos beneficios al animal.
            </p>
            <NavLink
              href="https://miperrocomebarf.com/"
              target="_blank"
              className="link"
            >
              Leer más
            </NavLink>
          </Col>
          <Col sm={4} className="person-wrapper">
            <Image src="/images/CAT_15.jpg" circle className="img2" />
            <h3 style={{ textAlign: "center" }}>
              ¿Cómo saber si mi animal de compañia está enfermo?
            </h3>
            <p>
              Los perros demuestran cuando se sienten mal, ellos lo expresan con
              su comportamiento y estado de ánimo, sin embargo, en caso de los
              gatos es más difícil de saberlo, ya que ellos cuando se sienten
              mal, suele ocultarse en lugares donde nadie los vea.
            </p>
            <NavLink
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xYzIzZmQ3Yy9wb2RjYXN0L3Jzcw=="
              target="_blank"
              className="link"
            >
              Leer más
            </NavLink>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <div>
        <Image src="/images/DOG_43.png" className="gatoimage" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Comunidad;
