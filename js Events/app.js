function test(){
    console.log('test function called!')
}
let alertDiv = document.getElementById('alert');
function mouseOver(){
    alertDiv.style.display = 'block'
}

function mouseOut(){
    alertDiv.style.display = 'none'

}

function submitName(){
    let name = document.getElementById('name');
    let value = name.value;
    document.getElementById('userInput').innerHTML = value;
    // name.value = '';
}
let magicStatus = false;
let magicBtn = document.getElementById('magic');
let stopMagicBtn = document.getElementById('stopMagic');

function checkMagicStatus(){
    if(magicStatus == true){
        magicBtn.style.display = 'none'
        stopMagicBtn.style.display = 'block';
    }
    else{
        stopMagicBtn.style.display = 'none';
        magicBtn.style.display = 'block'
    }
}

function  magic(){
    magicStatus = true;
    let title = document.getElementById('title');
    title.classList.add('magic');
    checkMagicStatus();
    
}
function  stopMagic(){
    magicStatus = false;
    let title = document.getElementById('title');
    title.classList.remove('magic');
    checkMagicStatus();
}

// arrow function
// default
function defaultFunctionName(){
    // logic
}
arrowFunctionName = () => {
    // logic
}

add =(num1, num2)=> num1 + num2;
function multiply(num1, num2){return num1 * num2}


console.log(add(2,3))
console.log(add(12,3))
console.log(add(22,3))
