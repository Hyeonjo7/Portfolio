import "../Styles/Contact.css";
import GithubIcon from "../Assets/github-icon.png"
import AnimatedPart from "./Animate";

const ContactSection = () => {
    
    const contactGithub = <>
        <a href="https://github.com/Hyeonjo7" rel="noopener noreferrer" target="_blank">
            <button type="button" className="github-button btn btn-primary btn-lg">
                <img src={GithubIcon} alt="Github Icon"></img> Github
            </button>
        </a>
    </>
    return (
        <div className="contact-container">
            <div className="contact-inner-container">
                <AnimatedPart part={<h1><b>Let's get in touch!</b></h1>} />
                <div className="contact-last-row">
                    <div className="contact-email-box">
                        <AnimatedPart part = {<p id="email-tag">Email</p>} />
                        <AnimatedPart part = {<p>erichklee43@gmail.com</p>} />
                    </div>
                    <div className="contact-github-button">
                        <AnimatedPart part = {contactGithub} />
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default ContactSection;