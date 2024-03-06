import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to="/" className="logo">Codekaro</Link>
            <div className="links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/try">Try for Free</Link>
            </div>
        </nav>
    )
}
export default Navbar;