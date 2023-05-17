
function Nav(){
    return(
        <nav>
            <a href="/" className="logo">Codekaro Meetings</a>
            <div className="links">
            <a href="/about">Upcoming Meetings</a>
            <a href="/contact">Past meetings</a>
            <a href="/add-meeting" className="btn">Add Meeting</a>
            </div>
        </nav>
        
    )
}
export default Nav;