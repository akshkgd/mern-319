import { useState } from 'react';
import Hero from '../assets/img/hero-illustration.png';
import {Link} from 'react-router-dom';
import MeetingCard from '../components/MeetingCard';
function Home() {
    const [meetings, setMeetings] = useState([]);
    fetch('https://mern-319-default-rtdb.firebaseio.com/meet.json').then(
        response => response.json()).then(data=>{
            let tempMeeting = []
            // console.log(data)
            for(const key in data){
                let meeting = {
                    id: key,
                    ...data[key]
                } 
                tempMeeting.push(meeting)
            }
            setMeetings(tempMeeting)
        })
    return (
        <div className='page'>
            <div className='hero'>
               <h1 className='emoji-title'></h1>
                <h1 className='title '>Organize all your Live 🤙 <span className='highlight'>meetings</span>  in one place</h1>
                <Link to='/add-meeting' className='add-btn-home' >Add New Meeting</Link>
            </div>
            <form method='post' action='test'>
          <button type='submit' className='btn'>Submit</button>
      </form>
        </div>
    )
}

export default Home;