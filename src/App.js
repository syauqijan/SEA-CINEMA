import './App.css';
import Navigation from './Components/Navbar';
import './Styles/Landingpage.css';
import CustomCarousel from './Components/Slider';
import Trending from './Components/List';
import Movies from './Components/Movies';

function App() {
  return (
    <div>
      <div className='myBG'>
      <Navigation/>
      <CustomCarousel/>
      <Movies/>
      </div>
    </div>
  );
}

export default App;
