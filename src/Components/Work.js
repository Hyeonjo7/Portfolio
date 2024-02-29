import "../Styles/Work.css";
import TTA from "../Assets/Thinking-Tree-Website.png"
import JE from "../Assets/Junior-Engineers-Website.png"
import AnimatedPart from "./Animate";

const Work = () => {
    const jnrFrontEndCell = <>
        <div className="work-cell">
            <img src={TTA} alt="STEAM EDU Thinking Tree Website"></img>
            <div className="work-text-section">
                <h3><a href="https://www.thinkingtreesteam.com/" rel="noopener noreferrer" target="_blank">STEAM EDU</a></h3>
                <div className="work-status">
                    <p>Junior Frontend Developer</p>
                    <p>2023 - Present</p>
                </div>
                <div className="work-description">
                    <p>Working as a casual junior frontend developer. Primarily worked on website's mobile responsiveness and design.</p>
                </div>
            </div>
        </div>
    </>

    const ttaInstructorCell = <>
        <div className="work-cell">
            <img src={TTA} alt="STEAM EDU Thinking Tree Website"></img>
            <div className="work-text-section">
                <h3><a href="https://www.thinkingtreesteam.com/" rel="noopener noreferrer" target="_blank">STEAM EDU</a></h3>
                <div className="work-status">
                    <p>Coding Instructor</p>
                    <p>2021 - Present</p>
                </div>
                <div className="work-description">
                    <p>Working as a casual coding instructor for students from age 12-19. Taught Python, Html, Css, Javascript, React and Scratch fundamentals. Taught fundamental data structures to older students.</p>
                </div>
            </div>
        </div>
    </>

    const jnrEngInstructorCell = <>
        <div className="work-cell">
            <img src={JE} alt="Junior Engineers Website"></img>
            <div className="work-text-section">
                <h3><a href="https://www.juniorengineers.com.au/" rel="noopener noreferrer" target="_blank">Junior Engineers</a></h3>
                <div className="work-status">
                    <p>Coding Instructor</p>
                    <p>2023 - 2024</p>
                </div>
                <div className="work-description">
                    <p>Worked as a part time coding instructor for young students. Taught Arduino, Python, Javascript, Microbits.</p>
                </div>
            </div>
        </div>
    </>

    return (
        <div className="work-container">
            <AnimatedPart part={<h2><b>Work</b></h2>} />
            <div className="work-row">
                <AnimatedPart part={jnrFrontEndCell} />
                <AnimatedPart part={ttaInstructorCell} />
                <AnimatedPart part={jnrEngInstructorCell} />
            </div>
        </div>        
    );
};

export default Work;