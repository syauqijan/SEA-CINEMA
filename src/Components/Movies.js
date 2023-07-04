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
                        <p>Description bla bla bla</p>
                    
                    </div>
                    </Link>
                </article>
                <article>
                    <Link to = "/joker">
                    <img src={joker} alt="Dune" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Joker</h3>
                        <p>Description bla bla bla</p>
                        

                    </div>
                    </Link>
                </article>
                <article>
                    <img src={jojo} alt="Dune" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Jojo</h3>
                        <p>Description bla bla bla</p>
                        
                    </div>
                </article>
                <article>
                    <img src={batman} alt="Dune" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Batman</h3>
                        <p>Description bla bla bla</p>
                        
                    </div>
                </article>
                <article>
                    <Link to = "/toy">
                    <img src={toy} alt="Dune" width="250px" height="350px" />
                    <div className="text-white">
                        <h3>Dune</h3>
                        <p>Description bla bla bla</p>
                        
                    </div>
                    </Link>
                </article>
                <article>
                    <img src={budapest} alt="Dune" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Joker</h3>
                        <p>Description bla bla bla</p>
                        

                    </div>
                </article>
                <article>
                    <img src={every} alt="Dune" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Jojo</h3>
                        <p>Description bla bla bla</p>
                        

                    </div>
                </article>
                <article>
                    <img src={aftersun} alt="Dune" width="250px" height="350px"/>
                    <div className="text-white">
                        <h3>Batman</h3>
                        <p>Description bla bla bla</p>
                        

                    </div>
                </article>
            </main>
        </div>
    );
};

export default Movies;
