import logo1 from"../assets/AMROYD LOGO.jpg"

function Navbar(){
    return(
        < div id="nav" className="flex items-center justify-center  ">
        <nav className="bg-[ rgba(0, 0, 0, 0.868)] flex items-center justify-center gap-[200px]">
            <div className="  logo1 w-[5%] mr-[100px]">
                <img src={logo1} alt="" />
            </div>
            <ul className="gap-[60px] flex text-[#fff] text-[20px]">
                <li>
                    Home
                </li>
       
                <li>
                    About Us
                </li>
       
               
                <li>
                    Products
                </li>
              
                <li>
                    Contact Us
                </li>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar