import Hero from '../assets/img/hero-illustration.png';
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className='page'>
            <div className='hero'>
               <h1 className='emoji-title'></h1>
                <h1 className='title text-center'>Organize all your Live 🤙 <span className='highlight'>meetings</span>  in one place</h1>
                <Link to='/add-meeting' className='add-btn-home' >Add New Meeting</Link>
            </div>
        </div>
    )
}

export default Home;