import '../css/App.css';
import Navbar from '../components/Navbar';
import ProfileCard from './ProfileCard';
import MeetingCard from './MeetingCard';
import AddTodo from './AddTodo';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Navbar />
        
        <div  className='card-container'>
          {/* <AddTodo /> */}
          {/* <MeetingCard /> */}
        </div>
        
    <Routes>
      <Route path='/' element={<AddTodo/>} />
    </Routes>
    </div>
  );
}

export default App;
