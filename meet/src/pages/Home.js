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
            <div className='meetings-container'>
            {
                meetings.filter((meeting)=>{
                        let today = new Date();
                        let meetingDate = new Date(meeting.date);
                        return meetingDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
                }).map((meeting)=>{
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    let date = new Date(meeting.date);
                    let fDate = date.toLocaleDateString('en', options)

                    return <MeetingCard title={meeting.title} img={meeting.img} date={fDate} />
                })
            }
            </div>
        </div>
    )
}

export default Home;