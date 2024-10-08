
import '../scss/AboutUs.css';
import { FaStar, FaUser, FaShieldAlt, FaEye } from 'react-icons/fa';
import logo from"../../assets/AMROYD LOGO.jpg"
import abt from"../../assets/abt.png"
import Carousel2 from "../logos";
const AboutPage = () => {
    return (
        <div className="about-container mt-[100px] ">
                  <h1 className='text-[35px] font-weight-bold mb-[30px]'>About Us</h1>
            <section className="about-section">
          
                <div className="about-content">
                    <img src={logo} alt="About Us" className="about-image" />
                    <p>
                    Amroyd Investments service all sectors of the industry and offer quality garments at
compeve prices. Amroyd sports wear is proudly manufactured in Zimbabwe. These
garments are durable, comfortable and compevely priced. We offer a variety
consisng of corporate, medical, promoonal, service uniform, security, hiccup,
flame retardant, acid resistant, combat, freezer, sport, school, safety shoes,
Hi visibility, and chef wear.
                    </p>
                </div>
            </section>

            <section className="why-choose-us">
                <h2 className='text-[35px] font-weight-bold mb-[30px]'>Why Choose Us</h2>
                <div className="card-container">
                    <div className="card animate">
                        <h3>Expert Team</h3>
                        <p>Our team consists of experienced professionals.</p>
                    </div>
                    <div className="card animate">
                        <h3>Customer Focused</h3>
                        <p>We prioritize our customers' needs and feedback.</p>
                    </div>
                    <div className="card animate">
                        <h3>Innovative Solutions</h3>
                        <p>We provide cutting-edge solutions tailored to you.</p>
                    </div>
                    <div className="card animate">
                        <h3>Proven Results</h3>
                        <p>Our track record speaks for itself with successful projects.</p>
                    </div>
                </div>
            </section>

            <section className="our-values">
                <h2 className='text-[35px] font-weight-bold mb-[30px]'>Our Values</h2>
                <div className="values-container">
                    <div className="value-card">
                        <FaStar className="value-icon" />
                        <h3>Quality</h3>
                        <p>We strive for excellence in everything we do.</p>
                    </div>
                    <div className="value-card">
                        <FaUser className="value-icon" />
                        <h3>Leadership</h3>
                        <p>We lead by example and inspire others to excel.</p>
                    </div>
                    <div className="value-card">
                        <FaShieldAlt className="value-icon" />
                        <h3>Integrity</h3>
                        <p>We uphold the highest ethical standards.</p>
                    </div>
                    <div className="value-card">
                        <FaEye className="value-icon" />
                        <h3>Amroyd</h3>
                        <p>We are committed to our mission and vision.</p>
                    </div>
                </div>
            </section>

            <section className="our-vision">
                <h2 className='text-[35px] font-weight-bold mb-[30px]'>Our Vision</h2>
               
                <p className='flex items-center justify-center'>
                    To be Zimbabwe's premium supplier of qulity Sportswear and consumables
                </p>
            </section>
            <Carousel2/>
            <section className="our-mission">
                <h2 className='text-[35px] font-weight-bold'>Our Mission</h2>
                <div className="mission-content">
                    <p className='w-[30%]'>
                    Our mission is to create and manufacture a wide
variety of sportwear and corporate wear that protects
workers both in private and public employment.
Amroyd garments and consumables established
and maintained their reputaon for overall quality,
sasfying customers and the community’s ever-changing needs.v
                    </p>
                    <img src={abt} alt="Our Mission" className="mission-image w-[40%]" />
                </div>
            </section>
        </div>
    );
};

export default AboutPage;