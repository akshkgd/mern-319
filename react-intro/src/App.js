import logo from './logo.svg';
import Card from './components/Card'
import './App.css';
let foodItems = [
  {
    title: "Grilled Salmon",
    desc: "Freshly caught salmon grilled to perfection with a side of steamed veggies.",
    rating: 4.1,
    img: "https://source.unsplash.com/1600x900/?salmon",
    price: 280,
    votes: 318
  },
  {
    title: "Spaghetti Bolognese",
    desc: "Classic Italian pasta dish with rich meaty sauce and freshly grated Parmesan cheese.",
    rating: 3.9,
    img: "https://source.unsplash.com/1600x900/?pasta",
    price: 120,
    votes:107
  },
  {
    title: "Veggie Burger",
    desc: "Delicious plant-based burger made with fresh veggies and a side of crispy fries.",
    rating: 4.8,
    img: "https://source.unsplash.com/1600x900/?burger",
    price: 120,
    votes:281
  },
  {
    title: "Caesar Salad",
    desc: "Crisp romaine lettuce with shaved Parmesan cheese, croutons, and tangy Caesar dressing.",
    rating: 3.6,
    img: "https://source.unsplash.com/1600x900/?salad",
    price: 190,
    votes: 164
  }
]

function App() {
  return (
    <div className='flex'>
      {
        foodItems.map((foodItem)=>{
            return <Card title={foodItem.title} img={foodItem.img} price={foodItem.price} rating={foodItem.rating} desc={foodItem.desc} votes={foodItem.votes} />
        })
      }
    </div>
    
  );
}

export default App;
