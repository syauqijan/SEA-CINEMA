import './App.css';
import Navigation from './Components/Navbar';
import './Styles/Test.css';
import './Styles/Landingpage.css';
import CustomCarousel from './Components/Slider';
import Movies from './Components/Movies';
import HalamanSignin from './Page/SigninPage';
import Slider from './Components/Test';
import Dashboard from './Page/Dashboard';

function App() {
  return (
    <div>
      <div className='myBG'>
        <Dashboard/>
      {/* <Navigation/>
      <CustomCarousel/> */}
      {/* <Movies/> */}
      {/* <HalamanSignin/> */}
      </div>
    </div>
  );
}

export default App;
