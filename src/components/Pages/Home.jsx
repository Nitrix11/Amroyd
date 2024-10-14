import DigitalSolutionsSection from "../Solution";
import Boost from "../boost";
import Goals from "../goal";
import Hero from "../hero";
import PricingSection from "../prices";

function Home(){
    return(
        <>
        <Hero/>
        <Boost/>
<Goals/>
<DigitalSolutionsSection/>
<PricingSection/>
        </>
    )
}
export default Home