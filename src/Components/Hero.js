import "../Styles/Hero.css";
import myImage from '../Assets/profile1.png';
import { motion, useInView, useAnimation } from "framer-motion"

const HeroSection = () => {
    
    return (
        <div className="hero-container">
            <div className="hero-inner-box">
                <div className="hero-name-box">
                    <h1 className="hero-normal"><b>Hey,</b></h1>
                    <h1 className="hero-normal"><b>I'm <span id="name-span">Eric Lee</span></b></h1>
                    
                    <h1 className="hero-mobile"><b>Hey, I'm <span id="name-span">Eric Lee</span></b></h1>
                    <h2>A Programmer</h2>

                    <div className="hero-details-box hero-details-left">
                        <h1>Studying at UNSW</h1>
                        <p> I am a final year Computer Science student at UNSW, 
                            driven by a deep passion for crafting captivating digital 
                            experiences. 
                        </p>
                    </div>
                </div>
                <div className="hero-image-box">
                    <img src={myImage} alt="The developer of this page"></img>
                </div>
                <div className="hero-details-box hero-details-right">
                    <h1>Studying at UNSW</h1>
                    <p> I am a final year Computer Science student at UNSW, 
                        driven by a deep passion for crafting captivating digital 
                        experiences. 
                    </p>
                </div>
            </div>
        </div>        
    );
};

export default HeroSection;