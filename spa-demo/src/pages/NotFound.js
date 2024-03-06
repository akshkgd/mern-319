import Nf from '../assets/nf.svg'
function NotFound(){
    return(
        <div className="not-found-container">
           <div>
            <img src={Nf} className='notfound-img' />
            <h1>This page does not exist!</h1>
            <p>The page you are looking for either does not exsit or not available now!</p>
           </div>
        </div>
    )
}
export default NotFound;