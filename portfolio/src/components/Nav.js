import {Link} from 'react-router-dom'
function Nav(){
    return(
        <div className="nav">
            <Link to="/" className="logo">A</Link>
            <Link to="/" className="links">home</Link>
            <Link to='/about' className="links">about</Link>
            <Link className="links">blog</Link>
            <Link className="links">social</Link>
        </div>
    )
}

export default Nav;