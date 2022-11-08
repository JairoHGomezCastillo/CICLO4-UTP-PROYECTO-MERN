import Carousel from "react-bootstrap/Carousel";

const carrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="/images/rol1.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-80"
            src="/images/rol2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-80"
            src="/images/rol3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-80"
            src="/images/rol4.jpg"
            alt="Four slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-80"
            src="/images/rol5.jpg"
            alt="Five slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-80"
            src="/images/rol6.jpg"
            alt="Six slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default carrusel;
