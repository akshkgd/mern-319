import {useState} from 'react';
import MeetingCard from '../components/MeetingCard';
function PastMeetings(){
    const [meetings, setMeetings] = useState([]);
    fetch('https://mern-319-default-rtdb.firebaseio.com/meet.json').then(
        response => response.json()).then(data=>{
            let tempMeeting = []
            console.log(data)
            for(const key in data){
                let meeting = {
                    id: key,
                    ...data[key]
                } 
                tempMeeting.push(meeting)
            }
            setMeetings(tempMeeting)
        })



    return(
        <div className="page">
            <h2>Past Meetings</h2>
            <div className='meetings-container'>
            {
                meetings.filter((meeting)=>{
                        let today = new Date();
                        return (new Date(meeting.date) < today)
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

export default PastMeetings;