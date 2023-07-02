import dune from "../Assets/list/dune.jpg";
import batman from "../Assets/list/batman.jpg";
import budapest from "../Assets/list/budapest.webp";
import joker from "../Assets/list/joker.webp";
import hereditary from "../Assets/list/hereditary.webp";
import jojo from "../Assets/list/jojo.webp";
import blade from "../Assets/list/blade.webp";
import aftersun from "../Assets/list/aftersun.jpg";
import every from "../Assets/list/every.jpg";
const Movies = () => {
    return (
        <div className="containerm">
            <br />
            <h1 className="text"  >Now Showing</h1>
            <main className="grid">
                <article>
                    <img src={dune} alt="Dune" width="300px" height="400px" />
                    <div className="text-white">
                        <h3>Dune</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>
                    </div>
                </article>
                <article>
                    <img src={joker} alt="Dune" width="300px" height="400px"/>
                    <div className="text-white">
                        <h3>Joker</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>

                    </div>
                </article>
                <article>
                    <img src={jojo} alt="Dune" width="300px" height="400px"/>
                    <div className="text-white">
                        <h3>Jojo</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>
                    </div>
                </article>
                <article>
                    <img src={batman} alt="Dune" width="300px" height="400px"/>
                    <div className="text-white">
                        <h3>Batman</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>
                    </div>
                </article>
                <article>
                    <img src={hereditary} alt="Dune" width="300px" height="400px" />
                    <div className="text-white">
                        <h3>Dune</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>

                    </div>
                </article>
                <article>
                    <img src={budapest} alt="Dune" width="300px" height="400px"/>
                    <div className="text-white">
                        <h3>Joker</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>

                    </div>
                </article>
                <article>
                    <img src={every} alt="Dune" width="300px" height="400px"/>
                    <div className="text-white">
                        <h3>Jojo</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>

                    </div>
                </article>
                <article>
                    <img src={aftersun} alt="Dune" width="300px" height="400px"/>
                    <div className="text-white">
                        <h3>Batman</h3>
                        <p>Description bla bla bla</p>
                        <a href="#" target="_blank" rel="noreferrer" className='btn btn-lg btn-primary'>Buy Ticket</a>

                    </div>
                </article>
            </main>
        </div>
    );
};

export default Movies;
