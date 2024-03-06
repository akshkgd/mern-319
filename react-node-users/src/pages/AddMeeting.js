import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function AddMeetings(){
    let [loadingStatus, setLoadingStatus] = useState(false);
    let nameInput = useRef();
    let emailInput = useRef();
    let navigate = useNavigate();
    function addMeetingHandler(){
            setLoadingStatus(true)
          let users = {
            name: nameInput.current.value,
            email: emailInput.current.value,
          }  
          fetch('/api-add-user', {
            method: 'post',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
          }).then(()=>{
            setLoadingStatus(false);
            navigate('/all')
          })
    }
    return(
        
        <div className="page-sm">
            <h1>Add New user </h1>
            <p></p>

            <div>
                <input type="text" ref={nameInput} name="name" placeholder="Enter the meeting title"></input>
                <input type="email" ref={emailInput} name="email" placeholder="Enter the meeting image "></input>
                <button className="add-btn" onClick={addMeetingHandler}> <div className={loadingStatus == true ? "d-none": ""}>Add New User</div> <div className={loadingStatus == true ? "": "d-none"}>Adding new Meeting</div> <div className={loadingStatus == true ? "loader": ""}></div></button>
            </div>
        </div>
    )
}

export default AddMeetings;