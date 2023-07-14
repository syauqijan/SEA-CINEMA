import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import dune from "../Assets/list/dune.jpg";
import batman from "../Assets/list/batman.jpg";
import budapest from "../Assets/list/budapest.webp";
import joker from "../Assets/list/joker.webp";
import hereditary from "../Assets/list/hereditary.webp";
import jojo from "../Assets/list/jojo.webp";
import blade from "../Assets/list/blade.webp";
import aftersun from "../Assets/list/aftersun.jpg";
import every from "../Assets/list/every.jpg";
import toy from "../Assets/list/toy.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Movieslider.css";

const CardSlider = () => {
  const sliderRef = useRef(null);


  return (
    <div className="card-container">
        <h1 className="nowshowing"  >NOW SHOWING IN CINEMAS</h1>
        <div className="card-slider-body">
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={3000}
        ref={sliderRef}
      >
        <div>
          <Card className="card-item">
            

            <Card.Img variant="top" src={dune} />
            <Card.Body>
              <Card.Title>DUNE</Card.Title>
              <Card.Text> action, adventure  2h 35m</Card.Text>
              <Link to = "/dune">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card-item">
            <Card.Img variant="top" src={jojo} />
            <Card.Body>
              <Card.Title>  JOJO RABBIT</Card.Title>
              <Card.Text>darama, comedy 1h 48m</Card.Text>
              <Link to = "/jojo">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>

          </Card>
        </div>
        <div>
          <Card className="card-item">
          

            <Card.Img variant="top" src={joker} />
            <Card.Body>
              <Card.Title>JOKER</Card.Title>
              <Card.Text>thriller, drama 2h 2m</Card.Text>
              <Link to = "/joker">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
            

          </Card>
        </div>
        <div>
          <Card className="card-item">
            <Card.Img variant="top" src={toy} />
            <Card.Body>
              <Card.Title>TOY STORY 4</Card.Title>
              <Card.Text>action, comedy 1h 40m</Card.Text>
              <Link to = "/toy">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card-item">
            <Card.Img variant="top" src={budapest} />
            <Card.Body>
              <Card.Title>THE GRAND BUDAPEST HOTEL</Card.Title>
              <Card.Text> adventure, comedy 1h 39m</Card.Text>
              <Link to = "/budapest">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card-item">
            <Card.Img variant="top" src={aftersun} />
            <Card.Body>
              <Card.Title>AFTERSUN</Card.Title>
              <Card.Text>drama 1h 42m </Card.Text>
              <Link to = "/aftersun">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card-item">
            <Card.Img variant="top" src={every} />
            <Card.Body>
              <Card.Title>EVERYTHING EVERYWHERE ALL AT ONCE</Card.Title>
              <Card.Text>action, comedy 2h 19m </Card.Text>
              <Link to = "/eeaao">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="card-item">
            <Card.Img variant="top" src={batman} />
            <Card.Body>
              <Card.Title>THE DARK  KNIGHT RISES</Card.Title>
              <Card.Text>action, drama 2h 44m</Card.Text>
              <Link to = "/batman">
              <Button variant="primary">BUY TICKET</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Slider>
      
    </div>
    </div>
  );
};

export default CardSlider;
