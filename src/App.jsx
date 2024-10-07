import BestSellers from "./components/BestSeller";
import TopCategories from "./components/Category";
// import TabSection from "./components/EG.jsx";
// import Apps from "./components/EG.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Scroll from "./components/Scroll";
import CarouselSection2 from "./components/Tabs";
import Carousel from "./components/logos";


function App() { 
  return (
<>
<Navbar/>
<Hero/>
<BestSellers/>
<Join/>

<TopCategories/>
<Scroll/>
<CarouselSection2/>
<News/>
<Carousel/>
<Footer/>
{/* <TabSection/> */}
</>
  );
}
export default App;
