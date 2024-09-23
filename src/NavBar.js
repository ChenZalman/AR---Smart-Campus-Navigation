import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navBar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/loginpage">Login</Link>
            <Link to="/register">Register Now!</Link>

            </nav>
     );
}
 
export default NavBar;