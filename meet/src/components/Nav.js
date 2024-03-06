import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <Link to="/" className="logo">Codekaro Meetings</Link>
            <div className="links">
            <Link to="/upcoming-meetings">Upcoming Meetings</Link>
            <Link to="/past-meetings">Past meetings</Link>
            <Link to="/add-meeting" className="btn">Add Meeting</Link>
            </div>
        </nav>
        
    )
}
export default Nav;