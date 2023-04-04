// console.log('task 1')
// console.log('task 2')

// setTimeout(()=>{
//     console.log('task 3')
// }, 2000)

// console.log('task 4')
function notify(){
    console.log('Email Sent!')
}

function uploadRecording(){
   
    // notify();
}

// uploadRecording();

// promise syntax
// new Promise(()=>{

// }).then(()=>{

// }).then(()=>{

// })



// let test = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('recording uploaded!');
//         resolve();
//     }, 2000);
    
// }).then(()=>{
//     notify();
// })



// random quotes

function fetchQuote(){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // gerating a random number
    let random = Math.floor(Math.random()*data.length);
    console.log(random)
    document.getElementById('quote').innerText = data[random].text;
    document.getElementById('author').innerText = data[random].author;

  });
}
