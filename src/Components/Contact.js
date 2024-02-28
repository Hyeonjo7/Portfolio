import "../Styles/Contact.css";
import GithubIcon from "../Assets/github-icon.png"

const ContactSection = () => {
    
    return (
        <div className="contact-container">
            <div className="contact-inner-container">
                <h1><b>Let's get in touch!</b></h1>
                <div className="contact-last-row">
                    <div className="contact-email-box">
                        <p id="email-tag">Email</p>
                        <p>erichklee43@gmail.com</p>
                    </div>
                    <div className="contact-github-button">
                        <a href="https://github.com/Hyeonjo7" rel="noopener noreferrer" target="_blank">
                            <button type="button" className="github-button btn btn-primary btn-lg">
                                <img src={GithubIcon} alt="Github Icon"></img> Github
                            </button>
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>        
    );
};

export default ContactSection;