import { Link } from "react-router-dom";
import styles from '../css/header.module.scss'

const Header = () => {
    return (
        <>
        <div className={styles.navItems}>
            <Link to="/about">About</Link>
            <Link to="/exhibitions">exhibitions</Link>
            <Link to="/showcase">showcase</Link>
            <Link to="/contact">contact</Link>
        </div>    
        </> 
      )
}

export default Header