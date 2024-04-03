import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.scss';
import { blackLogo, whiteLogo } from '../assets/SVG';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setScrolled(!showDropdown || window.scrollY > 50);

    };

    useEffect(() => {
        const handleScroll = () => {
            if (!showDropdown && window.scrollY > 50)  {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showDropdown]);
    

    return (
        <header className={scrolled ? styles.scrolled : ''}>
            <Link to="/" className={styles.logo}>
                {scrolled ? whiteLogo : blackLogo}
            </Link>
            <div className={styles.navRight}>
                <div className={styles.topNav}>
                    <ul>
                        <li>
                            <Link 
                                to="/about" 
                                className={scrolled ? styles.scrolledText : ''}>About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/exhibitions"
                                className={scrolled ? styles.scrolledText : ''}>Exhibitions
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/showcase"
                                className={scrolled ? styles.scrolledText : ''}>Showcase
                            </Link>
                        </li>
                        <li className={styles.contactButton}>
                            <Link to="/contact">Get in Touch</Link>
                        </li>
                    </ul>
                </div>
                <Link to="#" className={styles.dropdownLink} onClick={toggleDropdown}>
                        <svg
                            className={`${styles.dropdownIcon} ${scrolled ? styles.scrolledIcon : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                        >
                            <path d="M4 6h22M4 15h22M4 24h22" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Link>
            </div>
            <div className={`${styles.dropdownMenuContainer} ${showDropdown ? styles.showDropdown : ''}`}>
                <div className={styles.dropdownMenu}>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/exhibitions">Exhibitions</Link>
                        </li>
                        <li>
                            <Link to="/showcase">Showcase</Link>
                        </li>
                        <li className={styles.contactButton}>
                            <Link to="/contact">Get in Touch</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
