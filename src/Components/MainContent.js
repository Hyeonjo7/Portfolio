import '../Styles/MainContent.css';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe'
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';

const MainContent = ({ loading, showMain }) => {
    return (
        <div className={`main ${loading ? '' : 'show'} ${showMain ? 'fade-in' : ''} `}>
            <Navbar/>
            <div id="section1"><Hero /></div>
            <div id="section2"><AboutMe /></div>
            <div id="section3"><Work /></div>
            <div id="section4"><Projects /></div>
            <div id="section5"><Contact /></div>
        </div>
    );
};

export default MainContent;
