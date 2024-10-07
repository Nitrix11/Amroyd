import TypingText from "./TypingText";
import "./scss/Hero.css"
function Hero(){
    return(
        <>
        <div id="hero">
            <div id="text">
                <h1 className="text-[40px] ">
                   The right kit for the job
                </h1>
                <h1 className="text-[35px] ">Lorm ipum dolo met.</h1>
                <p>
                   <TypingText/>
                </p>
            </div>
        </div>
        </>
    )
}
export default Hero;