import '../css/App.css';
import {useRef, useState} from 'react';
function App() {
  let nameInput = useRef();
  let [buttonStatus, setButtonStatus] = useState(true);
  let [name, setName] = useState('');
  function submitNameHandler(){
    setName(nameInput.current.value);
    setButtonStatus(false)
  }
  return (
    <div className="container">
      <h1>Welcome to the React.js Bootcamp {name}! </h1>
      <input ref={nameInput} placeholder='Enter your name' type='text'/>
      <button className={buttonStatus == true ? "btn" : "d-none"} onClick={submitNameHandler}>Submit</button>
    </div>
  );
}

export default App;
