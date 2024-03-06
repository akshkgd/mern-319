import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <Link to="/" className="logo">User Portal</Link>
            <div className="links">
            
            <Link to="/all">All Users</Link>
            <Link to="/add">Add Users</Link>
            </div>
        </nav>
        
    )
}
export default Nav;