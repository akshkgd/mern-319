import Hero from '../assets/home2.svg'
function Index(){
    return(
        <div>
            <div className='hero-container'>
                <img src={Hero} className='hero-img'  />
                <h1 className='title'>Study help tailored to your courses at Chegg</h1> 
                <p className='desc'>Access millions of expert solutions designed for your best study sessions. Learn by seeing each clear & concise step.1</p> 
            </div>
        </div>
    )
}
export default Index;