import {useState, useEffect} from 'react';
import MeetingCard from '../components/MeetingCard';
function PastMeetings(){
    const [meetings, setMeetings] = useState([]);
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api-users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);
    return(
        <div className="page">
            <h2>All Users</h2>
            <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
            
        </div>
    )
}

export default PastMeetings;