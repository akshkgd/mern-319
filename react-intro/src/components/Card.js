function Card(props){
    function orderFoodHandler(){
        console.log("Order Successful: ", props.title);
        console.log("Price", props.price);
        if(props.price < 199){
            console.log("30 Rs Delivery Charges applicable, updated price", props.price + 30  )
        }
    }
    return(
        <div className="card" onClick={orderFoodHandler}>
            <div className="card-header">
                <img src={props.img} className="card-img" />
                <p className="ratings">{props.rating} ({props.votes} Votes) </p>
                
            </div>
           
            <div className="card-flex">
                <h4>{props.title}</h4>
                <div>
                <p className={props.rating > 4 ? "must-try" : "d-none"}>Must Try</p>
                </div>
            </div>
            <h4 className="m-0">{props.price}</h4>
            <p>{props.desc}</p>
        </div>
    )
}
export default Card;

