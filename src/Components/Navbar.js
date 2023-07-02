import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from "../Assets/logosc.png"
import profile from "../Assets/profile.png"
import '../Styles/Navbar.css';
const Navigation = () => {
    return (
        <div>
        <Navbar  className="navbar"  variant = 'dark'>
            <Container>

                <Navbar.Brand>
                <img
                src={logo}
                width="50"
                height="50"
                className="align-center"
                alt="logo"
                />
                SEA CINEMA</Navbar.Brand>
                <Nav>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Movies</Nav.Link>
                <img
                src = {profile}
                width="40"
                height="40"
                className="align-center"
                alt="profile"
                />
                </Nav>
                    
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigation