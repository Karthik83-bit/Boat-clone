import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Slider from './components/Slider';
import Nav from './components/Nav';
import Container from './components/Container';
import CartContainer from './components/CartCntainer';
import ShopHover from './components/ShopHover';
import { useStateValue } from './components/StateProvider';


function App() {
  return (
    <div className="App">
      <ShopHover/>
    {/* <Nav/> */}
    <Slider/>
    <Container/>
    <CartContainer/>
    </div>
  );
}

export default App;
