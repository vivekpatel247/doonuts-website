import './App.css';
import Banner from './Component/Banner/Banner';
import Beyond from './Component/Beyond_Donuts/beyond';
import Discount from './Component/discount_card/discount';
import Responsive_donut from './Component/donut_slider/donut_slider';
import Surprisedonut from './Component/surprise_donut/Surprise_Donut';
import Donut from './Component/donuts_info/donuts_info';
import Footer from './Component/Footer/Footer';
import Happiness from './Component/Happiness/Happiness';
import Header from './Component/Header/Header';
import Menu from './Component/Menu/Menu';
import Responsive from './Component/Slider_Menu/slider';
import Rules from './Component/Taste_Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Menu/>
      <Rules />
      <Responsive />
      <Beyond />
      <Surprisedonut />
      <Donut />
      <Happiness />
      <Discount />
      <Responsive_donut />
      <Footer/>
    </div>
  );
}

export default App;
