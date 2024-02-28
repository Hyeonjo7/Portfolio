import RingLoader from "react-spinners/RingLoader";
import "../Styles/LandingPage.css";

const LandingPage = ({ loading, showMain }) => {
    return (
        <div className={`landing-page ${loading ? '' : 'fade-out'} ${!showMain ? 'landing-page-remove' : ''} `}>
            <RingLoader 
                size={100} 
                color={'#CC9933'} 
                loading={showMain}
            />
        </div>        
    );
};

export default LandingPage;