import { useState } from "react";
import Card from '../components/Card'
let foodItem = {
        title: "Veggie Burger",
        desc: "Delicious plant-based burger made with fresh veggies and a side of crispy fries.",
        rating: 4.8,
        img: "https://source.unsplash.com/1600x900/?burger",
        price: 120,
        votes:281
}
function HookOne(){
    const [counter, setCounter] = useState(0);
    const [cardStatus, setCardStatus] = useState(false);
    function incrementHandler(){
        setCounter(counter+1)  
    }
    function decrementHandler(){
        setCounter(counter-1)
    }
    function showCardHandler(){
        setCardStatus(true)
    }
    function hideCardHandler(){
        setCardStatus(false)
    }
    return(
        <div className="">
            <div className="App">
                <h1>Introduction to Use State Hook {counter}</h1>
                <button className={cardStatus==false ? "btn" : "d-none"} onClick={showCardHandler}>Show Card</button>
                <button className={cardStatus==true ? "btn" : "d-none"} onClick={hideCardHandler}>Hide Card</button>

            </div>
            

            <div className="flex">
            <div className={cardStatus==true ? "card" : "d-none"}>
            <div className="card-header">
                <img src='https://source.unsplash.com/1600x900/?burger' className="card-img" />
                <p className="ratings">4.1 (103 Votes) </p>
                
            </div>
           
            <div className="card-flex">
                <h4>Veg Supreme Burger</h4>
                <div>
                <p className="must-try">Must Try</p>
                </div>
            </div>
            <h4 className="m-0">120 Rs</h4>
            <p>Delicious plant-based burger made with fresh veggies and a side of crispy fries.</p>
        </div>
            </div>
        </div>
    )
}

export default HookOne;