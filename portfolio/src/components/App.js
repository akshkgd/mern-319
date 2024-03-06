import './App.css';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="container">


      <div className='navbar'>
        <Nav />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
