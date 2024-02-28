import "../Styles/Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import PortfolioImg from "../Assets/portfolio-website.png";
import LurkForWorkImg from "../Assets/lurk-for-lurk.png";
import ImageTTImg from "../Assets/image-tt.png"

import Skill from "../Skills/Skill"

const Projects = () => {
    const ESGImage = 'https://storage.googleapis.com/profit-prod/wp-content/uploads/2022/05/abccfeb7-esg.png'

    return (
        <div className="projects-container">
            <h2><b>Projects</b></h2>
            <div className="proj-row">
                <div className="proj-cell">
                    <img src={PortfolioImg} alt="Portfolio Hero Page"></img>
                    <div className="proj-text-section">
                        <h3>Personal Portfolio</h3>
                        <div className="proj-desc">
                            <p>
                            This personal portfolio was created as a foundation for me to express my journey on a web application.
                            As further projects are completed and as my work experience grows, 
                            this web portfolio will be correspondingly updated.
                            </p>
                        </div>
                        <div className="proj-skills">
                            <Skill iconType="React"/>
                            <Skill iconType="CSS"/>
                            <Skill iconType="Bootstrap"/>
                            <Skill iconType="Javascript" />
                            <Skill iconType="Material UI"/>
                        </div>
                        <div className="proj-alerts">

                        </div>
                        <div className="proj-buttons">
                            <a href="https://hyeonjo7.github.io/portfolio/">
                                <button type="button" className="btn btn-primary btn-lg">
                                    <p><FontAwesomeIcon icon={faRocket} /> Live Deployment</p>
                                </button>
                            </a>

                            <a href="https://github.com/Hyeonjo7/portfolio" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="proj-source btn btn-primary btn-lg">
                                    <p>&lt;&gt; Source Code</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ESG Management System Cell */}
                <div className="proj-cell">
                    <img src={ESGImage} alt="ESG hero from profito.co"></img>
                    <p id="place-holder-img-txt">Place holder image from <a href="https://www.profit.co/blog/kpi-library/what-are-esg-metrics/" rel="noopener noreferrer" target="_blank"> profit.co</a></p>
                    <div className="proj-text-section">
                        <h3>ESG Management System</h3>
                        <div className="proj-desc">
                            <p>
                            This is a collaborated project with 5 other developers to create a web application which
                            helps users manage ESG data for sustainable investing.
                            My responsibility is to create a React based web application while managing its UI & HTTP API.
                            </p>
                        </div>
                        <div className="proj-skills">
                            <Skill iconType="Html"/>
                            <Skill iconType="CSS"/>
                            <Skill iconType="Javascript"/>
                            <Skill iconType="Node-js"/>
                            <Skill iconType="Bootstrap"/>
                        </div>
                        <div className="proj-alerts">
                            <p>&lt; In development &gt;</p>
                            <p>&lt; This repository is currently private &gt;</p>
                        </div>
                        <div className="proj-buttons">
                            <button type="button" className="btn btn-primary btn-lg disabled-live" disabled>
                                <p><FontAwesomeIcon icon={faRocket} /> Live Deployment</p>
                            </button>
                            <button type="button" className="proj-source btn btn-primary btn-lg disabled-source" disabled>
                                <p>&lt;&gt; Source Code</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ImageTT Cell */}
                <div className="proj-cell">
                    <img src={ImageTTImg} alt="ImageTT demo"></img>
                    <div className="proj-text-section">
                        <h3>Image Translator Typesetter (ImageTT)</h3>
                        <div className="proj-desc">
                            <p>
                            This is a personal side project developed to help translate and typeset scanned images better than google translate. 
                            Through custom training data and testing of different machine learning models, 
                            this project is currently working on a CRNN model to improve text object detection.
                            </p>
                        </div>
                        <div className="proj-skills">
                            <Skill iconType="Python"/>
                        </div>
                        <div className="proj-alerts">
                            <p>&lt; In development &gt;</p>
                            <p>&lt; Project is not deployed &gt;</p>
                        </div>
                        <div className="proj-buttons">
                            <button type="button" className="btn btn-primary btn-lg disabled-live" disabled>
                                <p><FontAwesomeIcon icon={faRocket} /> Live Deployment</p>
                            </button>
                            <a href="https://github.com/Hyeonjo7/ImageTT/tree/main" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="proj-source btn btn-primary btn-lg">
                                    <p>&lt;&gt; Source Code</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* LurkForWork Cell */}
                <div className="proj-cell">
                    <img src={LurkForWorkImg} alt="LurkForWork Cover Page"></img>
                    <div className="proj-text-section">
                        <h3>LurkForWork</h3>
                        <div className="proj-desc">
                            <p>
                            A project collaborated with 2 other developers to create a friendly variation of LinkedIn. 
                            My contributions including writing tests for the backend functions and completing the backend.
                            The frontend is still in development.
                            </p>
                        </div>
                        <div className="proj-skills">
                            <Skill iconType="Html"/>
                            <Skill iconType="CSS"/>
                            <Skill iconType="Javascript"/>
                            <Skill iconType="Node-js"/>
                            <Skill iconType="Bootstrap"/>
                            <Skill iconType="Material UI"/>
                        </div>
                        <div className="proj-alerts">
                            <p>&lt; In development &gt;</p>
                            <p>&lt; Project is not deployed &gt;</p>
                        </div>
                        <div className="proj-buttons">
                            <button type="button" className="btn btn-primary btn-lg disabled-live" disabled>
                                <p><FontAwesomeIcon icon={faRocket} /> Live Deployment</p>
                            </button>
                            <a href="https://github.com/Hyeonjo7/LurkForLurk/tree/main" rel="noopener noreferrer" target="_blank">
                                <button type="button" className="proj-source btn btn-primary btn-lg">
                                    <p>&lt;&gt; Source Code</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects-more-info">
                <h3>For more information on the projects' status please checkout the README's in their Source Codes</h3>
            </div>
        </div>        
    );
};

export default Projects;