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
import { Link } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../Styles/Movies.css';
const Movies = () => {
    return (
        <div className="containerm">
            <br />
            <h1 className="text"  >NOW SHOWING IN CINEMA</h1>
            <main className="grid">
                <article>
                    <Link to = "/dune">
                    <img src={dune} alt="Dune" width="250px" height="350px" />
                    <div className="text-white">
                        <h3>Dune</h3>
                        
                    
                    </div>
                    </Link>
                </article>
                <article>
                    <Link to = "/joker">
                    <img src={joker} alt="joker" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Joker</h3>
                        
                        

                    </div>
                    </Link>
                </article>
                <article>
                    <Link to = "/jojo">
                    <img src={jojo} alt="jojo" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Jojo Rabbit</h3>
                    
                    </div>
                    </Link>
                </article>
                <article>
                    <Link to = "/toy">
                    <img src={toy} alt="toy" width="250px" height="350px" />
                    <div className="text-white">
                        <h3>Toy Story 4</h3>
                        
                        
                    </div>
                    </Link>
                </article>
                <article>
                    <Link to="/batman">
                    <img src={batman} alt="batman" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>The Dark Knight Rises</h3>
                    </div>
                    </Link>
                </article>
                
                <article>
                    <Link to="/budapest">
                    <img src={budapest} alt="budapest" width="250px" height="350px"/>
                    <div className="text-white">
                        <div className="infoMovie">
                            <h3>The Grand Budapest Hotel</h3>
                            <div className="infoDetail">
                                <AccessTimeIcon className="time-icon" sx={{ fontSize: 20}}/>
                                <div className="duration">1h 40m</div>
                                <div className="age-rating">R</div>
                            </div>
                        </div>
                        

                    </div>
                    </Link>
                </article>
                <article>
                <Link to="/eeaao">
                    <img src={every} alt="budapest" width="250px" height="350px"/>
                    <div className="text-white">
                        <div className="infoMovie">
                            <h3>Everything Everywhere All at Once</h3>
                            <div className="infoDetail">
                                <AccessTimeIcon className="time-icon" sx={{ fontSize: 20}}/>
                                <div className="duration">1h 40m</div>
                                <div className="age-rating">R</div>
                            </div>
                        </div>
                        

                    </div>
                    </Link>
                </article>
                <article>
                <Link to="/aftersun">
                    <img src={aftersun} alt="budapest" width="250px" height="350px"/>
                    <div className="text-white">
                        <div className="infoMovie">
                            <h3>The Grand Budapest Hotel</h3>
                            <div className="infoDetail">
                                <AccessTimeIcon className="time-icon" sx={{ fontSize: 20}}/>
                                <div className="duration">1h 40m</div>
                                <div className="age-rating">R</div>
                            </div>
                        </div>
                        

                    </div>
                    </Link>
                </article>
            </main>
        </div>
    );
};

export default Movies;
