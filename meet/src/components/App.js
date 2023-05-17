import '../assets/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddMeetings from '../pages/AddMeeting';
import NotFound from '../pages/NotFound';
import UpcomingMeetings from '../pages/UpcomingMeetings';
import Nav from './Nav'
function App() {
  return (
    <div className="">
      <Nav />


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-meeting' element={<AddMeetings/>} />
        <Route path='/upcoming-meetings' element={<UpcomingMeetings/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
