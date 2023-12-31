import React from "react";
import { Carousel } from "react-bootstrap";
import sembilan from "../Assets/1917.jpg";
import star from "../Assets/starwars.jpg";
import lincoln from "../Assets/lincoln.jpg";
import "../Styles/Slider.css";

const Slider = () => {
  return (
    <div className="myBG">
      <Carousel interval={3000} pause={false} wrap={true}>
        <Carousel.Item>
          <div className="carousel-item-bg">
            <div className="containerslider">
              <h1>Example Headline 1</h1>
              <p>Example description 1</p>
              <a href="#" className="btn btn-lg btn-primary">
                Read
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-bg2">
            <div className="containerslider">
              <h1>Star Wars</h1>
              <p>Advance Ticket Sales</p>
              <a href="#" className="btn btn-lg btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-bg3">
            <div className="containerslider">
              <h1>Example Headline 2</h1>
              <p>Example description 2</p>
              <a href="#" className="btn btn-lg btn-primary">
                Read
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-bg4">
            <div className="containerslider">
              <h1>Example Headline 2</h1>
              <p>Example description 2</p>
              <a href="#" className="btn btn-lg btn-primary">
                Read
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
