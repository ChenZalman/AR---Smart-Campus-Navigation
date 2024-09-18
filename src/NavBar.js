import { Link } from "react-router-dom";
import './Login.css'
const NavBar = () => {
    return ( 
        <nav className="navBar">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/LoginPage">LogIn</Link>
            </nav>
     );
}
 
export default NavBar;