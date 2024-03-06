import '../css/App.css';
import {useRef, useState} from 'react';
function Bmi() {
  let heightInput = useRef();
  let weightInput = useRef();
  let [bmi, setBmi] = useState('💪🍟😊')
  let [buttonStatus, setButtonStatus] = useState(true);
  let [name, setName] = useState('');
  function calculateBMIHandler(){
        let bmi = (weightInput.current.value) / (heightInput.current.value /100   * heightInput.current.value / 100);
        if(bmi <= 18.5){
            setBmi('Underweight 🍟');
        }
        else if(bmi> 18.5 && bmi<=24.9){
            setBmi('Normal 😁');
        }
        else if(bmi> 25 && bmi<=29.9){
            setBmi('OverWeight 😔');
        }
        else if(bmi> 30 && bmi<=35){
            setBmi('Obesity 😳');
        }
        else{
            setBmi('Severe Obesity 🤯');
        }
        
  }
  return (
    <div className="container">
        <h1>{bmi}</h1>
      <h2>Calculate your BMI </h2>
      <div className='flex'>
      <input ref={heightInput} placeholder='Enter your Height' type='text'/>
        <input ref={weightInput} placeholder='Enter your weight' type='text'/>
      </div>
      <button className={buttonStatus == true ? "btn" : "d-none"} onClick={calculateBMIHandler}>Submit</button>
    </div>
  );
}

export default Bmi;
