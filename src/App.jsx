import BestSellers from "./components/BestSeller";
import TopCategories from "./components/Category";
// import TabSection from "./components/EG.jsx";
// import Apps from "./components/EG.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import News from "./components/News";
import AboutPage from "./components/Pages/Aboutus";
import ContactPage from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import ProductsPage from "./components/Pages/Products";
import Scroll from "./components/Scroll";
import CarouselSection2 from "./components/Tabs";
import Carousel from "./components/logos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() { 
  return (
<>

<Router>
<Navbar/>
<Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Products" element={<ProductsPage />} />
      </Routes>
      <Footer/>

    </Router>
{/* <TabSection/> */}
</>
  );
}
export default App;
