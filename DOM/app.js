// functions
// function grinder(items){
//     console.log('grinding...', items)
// }


// grinder('tomatoes')
// grinder('onions')


// add two numbers
function add(num1, num2){
    let sum = num1 + num2;
    return sum;

}


// let result = add(2,3)
// console.log(add(10,10))
// console.log(result)

function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining the bootcamp!'
    title.style.color = 'tomato';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
}

function welcome(){
    let name = document.getElementById('name');
    document.getElementById('nameInput').innerText = name.value;
    name.value = ''
}   