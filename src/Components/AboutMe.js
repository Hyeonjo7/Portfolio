import "../Styles/AboutMe.css";
import myImage from '../Assets/profile2.jpg';
import AnimatedPart from "./Animate";


const AboutMeSection = () => {

    const aboutText = <>
        <p>
            I'm Eric and I'm currently studying part time for my final year at UNSW, Sydney
            and expect to graduate at around mid August. 
        </p>
        <p>
            My journey has taught me so much from sole self learning to valuing teamwork and collaboration to produce amazing solutions.
            From this, I am always on the lookout for opportunities to challenge myself and to collaboratively approach problems with creativity to deliver impactful digital products.
        </p>
        <p>
            As I embark on this exciting journey, my goal is to not only enhance my own capabilities but also to contribute meaningfully to the world of technology. 
        </p>
        <p>
            I hope we can build something amazing together!
        </p>
    </>

    return (
        <div className="about-me">
            <AnimatedPart part={<h1>About Me</h1>} />
            <div className="contents">
                <div className="about-text-section">
                    <AnimatedPart part={aboutText} />
                </div>
                <div className="about-image-section">
                    <img src={myImage} alt="The developer of this page"></img>
                </div>
            </div>
        </div>        
    );
};

export default AboutMeSection;