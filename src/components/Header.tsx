import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to="/about">About</Link>
            <Link to="/exhibitions">exhibitions</Link>
            <Link to="/showcase">showcase</Link>
            <Link to="/contact">contact</Link>
        </> 
      )
}

export default Header