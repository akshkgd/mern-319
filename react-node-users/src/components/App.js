import '../assets/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddUsers from '../pages/AddMeeting';
import NotFound from '../pages/NotFound';
import AllUsers from '../pages/PastMeetings';
import Nav from './Nav'
function App() {
  return (
    <div className="">

      
      <Nav />




      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddUsers/>} />
        <Route path='/all' element={<AllUsers/>} />

        <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
