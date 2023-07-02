import React from 'react';
import { Carousel } from 'react-bootstrap';
import sembilanbelas from "../Assets/1917.jpg"
import lincoln from "../Assets/lincoln.jpg"
import starwars from "../Assets/starwars.jpg"
const Slider = () => {
    return (
      <div className="slider-container">
        <Carousel className="carousel-container">
          <Carousel.Item>
            <div className="image-container">
              <img
                className="image-right"
                src={sembilanbelas}
                alt="Third slide"
              />
              <img
                className="image-left"
                src={lincoln}
                alt="First slide"
              />
            </div>
            <img
              className="image-center"
              src={starwars}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className="image-right"
                src={lincoln}
                alt="First slide"
              />
              <img
                className="image-left"
                src={starwars}
                alt="Second slide"
              />
            </div>
            <img
              className="image-center"
              src={sembilanbelas}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };
  
  export default Slider;