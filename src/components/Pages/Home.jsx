import BestSellers from "../BestSeller";
import TopCategories from "../Category";
import Hero from "../Hero";
import Join from "../Join";
import News from "../News";
import Carousel from "../Scroll";
import CarouselSection from "../Tabs";
import'../scss/Home.css'


function Home(){
    return(
        <>
        
<Hero/>
<BestSellers/>
<Join/>

<TopCategories/>
<CarouselSection/>

<Carousel/>


<News/>
<logos/>
        </>
    )
}
export default Home;