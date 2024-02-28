import '../Styles/Navbar.css'
import RingLoader from "react-spinners/RingLoader";
import { useRef, useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll';


const Navbar = () => {
    const navRef = useRef();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // show nav bar when scrolling up effect
    const handleScroll = useCallback(() => {
        const currentScrollPos = window.scrollY;
        setVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll, prevScrollPos]);



    // show Nav bar responsive effect
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header className={`navbar-container ${visible ? '' : 'hidden'}`}>
            <div className='logo'>
                <RingLoader 
                    size={40} 
                    color={'#CC9933'} 
                    loading={true}
                />
                <Link id="Eric" to="section1" smooth={true} duration={500} onClick={showNavBar}>
                    <p>Eric Lee</p>
                </Link>
            </div>
            <nav className="navbar" ref={navRef}>

                <ul className="navbar-list">
                    <li>
                        <Link to="section1" smooth={true} duration={500} onClick={showNavBar}>
                            Home
                        </Link>
                    </li>
                    <li id='about-width'>
                        <Link to="section2" smooth={true} duration={500} onClick={showNavBar}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="section3" smooth={true} duration={500} onClick={showNavBar}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="section4" smooth={true} duration={500} onClick={showNavBar}>
                            Projects
                        </Link>
                    </li>
                    <li id='contact-width'>
                        <Link to="section5" smooth={true} duration={500} onClick={showNavBar}>
                            Contact Me
                        </Link>
                    </li>
                </ul>

                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>

            {/* for mobile responsiveness */}
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;