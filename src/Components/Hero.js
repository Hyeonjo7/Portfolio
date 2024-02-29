import "../Styles/Hero.css";
import myImage from '../Assets/profile1.png';
import AnimatedPart from "./Animate";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const HeroSection = () => {

    const heroNormalText = <>
        <h1 className="hero-normal"><b>Hey,</b></h1>
        <h1 className="hero-normal"><b>I'm <span id="name-span">Eric Lee</span></b></h1>
    </>
    const heroMobileText = <>
        <h1 className="hero-mobile"><b>Hey, I'm <span id="name-span">Eric Lee</span></b></h1>
    </>

    const [occupations] = useTypewriter({
        words: ['A Developer', 'An Instructor', 'A Student'],
        loop: {},
    })
    const heroOccupation = <>
        <h2>
            <span style={{fontWeight: 'bold', color: 'green'}}> 
                {occupations}
            </span>
            <Cursor/>
        </h2>
    </>

    const heroNormalDetails = <>
        <h1>Studying at UNSW</h1>
        <p> I am a final year Computer Science student at UNSW, 
            driven by a deep passion for crafting captivating digital 
            experiences. 
        </p>
    </>
    const heroMobileDetails = <>
        <h1>Studying at UNSW</h1>
        <p> I am a final year Computer Science student at UNSW, 
            driven by a deep passion for crafting captivating digital 
            experiences. 
        </p>
    </>

    return (
        <div className="hero-container">
            <div className="hero-inner-box">
                <div className="hero-name-box">
                    <AnimatedPart part={heroNormalText} />
                    <AnimatedPart part={heroMobileText} />
                    <AnimatedPart part={heroOccupation} />
                    <div className="hero-details-box hero-details-left">
                        <AnimatedPart part={heroMobileDetails} />
                    </div>
                </div>
                <div className="hero-image-box">
                    <img src={myImage} alt="The developer of this page"></img>
                </div>

                <div className="hero-details-box hero-details-right">
                    <AnimatedPart part={heroNormalDetails} />
                </div>
            </div>
        </div>        
    );
};

export default HeroSection;