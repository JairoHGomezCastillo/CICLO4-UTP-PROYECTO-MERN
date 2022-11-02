import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carrusel = () => {
  return (
    
    <div>
          <Carousel className='carousel'>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="/rol6.jpg"
                      alt="Bienvenidos al reino"/>
              </Carousel.Item>
  
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="/rol5.jpg"
                      alt="Donde residen los reyes mas amados"/>
              </Carousel.Item>
  
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src="/rol1.jpg" 
                  alt=" Rolitos"/>
  
              </Carousel.Item>
  
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src="/Rol4.jpg" 
                  alt="Pets Rolitos"/>
  
              </Carousel.Item>
  
  
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src="/rol2.jpg" 
                  alt=" Rolitos"/>
              </Carousel.Item>
          </Carousel>
    
    </div>
  );
};
export default Carrusel;    