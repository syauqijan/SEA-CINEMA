import { Card, Container, Image } from "react-bootstrap";
import dune from "../Assets/list/dune.jpg";
import batman from "../Assets/list/batman.jpg";
import budapest from "../Assets/list/budapest.webp";
import joker from "../Assets/list/joker.webp";
import hereditary from "../Assets/list/hereditary.webp";
import jojo from "../Assets/list/jojo.webp";


const Trending = () => {
  return (
    <div className="containerl">
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <div className="movieWrapper" id="trending">
          <Card className="movieImage">
            <Image src={dune} alt="Dune Movies" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">DUNE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </div>
        <div className="movieWrapper2">
          <Card className="movieImage">
            <Image src={batman} alt="Dune Movies" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">
                  EVERYTHING EVERWHERE
                </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </div>
        <div className="movieWrapper">
          <Card className="movieImage">
            <Image src={budapest} alt="Dune Movies" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">INFINITE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </div>
        <div className="movieWrapper">
          <Card className="movieImage">
            <Image src={joker} alt="Dune Movies" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JOKER</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </div>
        <div className="movieWrapper">
          <Card className="movieImage">
            <Image src={hereditary} alt="Dune Movies"
            className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </div>
        <div className="movieWrapper">
          <Card className="movieImage">
            <Image src={jojo} alt="Dune Movies" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MORBIUS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with natural lead-in to additional content
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
