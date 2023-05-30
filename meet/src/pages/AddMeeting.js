import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function AddMeetings(){
    let [loadingStatus, setLoadingStatus] = useState(false);
    let titleInput = useRef();
    let imgInput = useRef();
    let linkInput = useRef();
    let dateInput = useRef();
    let navigate = useNavigate();
    function addMeetingHandler(){
            setLoadingStatus(true)
          let tempMeeting = {
            title: titleInput.current.value,
            img: imgInput.current.value,
            link: linkInput.current.value,
            date: dateInput.current.value,
          }  
          fetch('https://mern-319-default-rtdb.firebaseio.com/meet.json', {
            method: 'post',
            body: JSON.stringify(tempMeeting)
          }).then(()=>{
            setLoadingStatus(false);
            navigate('/upcoming-meetings')
          })
    }
    return(
        
        <div className="page-sm">
            <h1>Add New Meeting </h1>
            <p></p>

            <div>
                <input type="text" ref={titleInput} placeholder="Enter the meeting title"></input>
                <input type="text" ref={imgInput} placeholder="Enter the meeting image "></input>
                <input type="text" ref={linkInput} placeholder="Enter the meeting link"></input>
                <input type="datetime-local" ref={dateInput} placeholder="Enter the meeting date"></input>
                <button className="add-btn" onClick={addMeetingHandler}> <div className={loadingStatus == true ? "d-none": ""}>Add New Meeting</div> <div className={loadingStatus == true ? "": "d-none"}>Adding new Meeting</div> <div className={loadingStatus == true ? "loader": ""}></div></button>
            </div>
        </div>
    )
}

export default AddMeetings;