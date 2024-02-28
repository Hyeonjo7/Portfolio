import "./Skill.css";

import bootstrapIcon from "./SkillAssets/bootstrap.png"
import cssIcon from "./SkillAssets/css-3.png"
import javascriptIcon from "./SkillAssets/javascript.png"
import nodeJsIcon from "./SkillAssets/nodejs-icon.png"
import pythonIcon from "./SkillAssets/python.png"
import reactIcon from "./SkillAssets/react.png"
import htmlIcon from "./SkillAssets/html-5.png"
import materialIcon from "./SkillAssets/material-ui-icon.png"


const Skill = ({ iconType }) => {
    let icon

    if (iconType === 'Bootstrap') {
        icon = <img src={bootstrapIcon} alt={iconType} />
    } else if (iconType === 'CSS') {
        icon = <img src={cssIcon} alt={iconType} />
    } else if (iconType === 'Javascript') {
        icon = <img src={javascriptIcon} alt={iconType} />
    } else if (iconType === 'Node-js') {
        icon = <img src={nodeJsIcon} alt={iconType} />
    } else if (iconType === 'Python') {
        icon = <img src={pythonIcon} alt={iconType} />
    } else if (iconType === 'React') {
        icon = <img src={reactIcon} alt={iconType} />
    } else if (iconType === 'Html') {
        icon = <img src={htmlIcon} alt={iconType} />
    } else if (iconType === 'Material UI') {
        icon = <img src={materialIcon} alt={iconType} />
    }
    
    else {
        icon = <p>error</p>
    }

    return (
        <div className="skill-container">
            <div className="skill-icon">
                {icon}
            </div>
            <div className="skill-name">
                <p>{iconType}</p>
            </div>
        </div>
    );
};

export default Skill;