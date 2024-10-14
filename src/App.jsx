

import Nav from "./components/Nav";
import Hero from "./components/hero";
import Boost from "./components/boost";
import Goals from "./components/goal";
import DigitalSolutionsSection from "./components/Solution";
import PricingSection from "./components/prices";
import FooterSection from "./components/Footer";
import ServicesSection from "./components/services";
import ContactSection from "./components/Contact";
import AboutSection from "./components/about";
import AboutSection2 from "./components/about2";
import AboutSection3 from "./components/about3";
import AboutSection4 from "./components/about4";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SiHomepage } from "react-icons/si";

import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import Home from "./components/Pages/Home";
import ServicesPage from "./components/Pages/ServicesPage";


function App() { 
  return (
<>
{/* <Nav/>
<Hero/>
<Boost/>
<Goals/>
<DigitalSolutionsSection/>
<PricingSection/>
<FooterSection/>
<ServicesSection/>
<ContactSection/>
<AboutSection/>
<AboutSection2/>
<AboutSection3/>
<AboutSection4/> */}

<Router>
<Nav/>
<Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <FooterSection/>

    </Router>
{/* <TabSection/> */}
</>
  );
}
export default App;
