// let btn = document.querySelector('.btn');
// function btnClicked(e){
//     console.log('btn clicked!!')
//     console.log(e.target.value)
// }

// btn.addEventListener('click', btnClicked)

function changeColor(){
    let text = document.querySelectorAll('.text');
    for(i=0; i<text.length; i++){
        text[i].style.color = 'white';
    }
    let body = document.querySelector('body');
    body.style.backgroundColor = '#020202';
    let logo = document.querySelector('.logo');
    logo.style.color = 'white';
    let btnOutline = document.querySelector('.btn-outline')
    btnOutline.classList.remove('btn-outline');
    btnOutline.classList.add('btn-outline-dark')
}


let btn = document.querySelector('.darkBtn');
btn.addEventListener('click', changeColor)

