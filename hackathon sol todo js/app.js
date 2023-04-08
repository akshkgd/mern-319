const users = [];
const options = { weekday: 'long', day:'numeric',  month: 'long', }
let nameContainer = document.getElementById('nameContainer');

renderNames = ()=>{
    nameContainer.innerHTML = ''
    users.map((user)=>{
        let div = document.createElement('div');
        let p = document.createElement('p');
        let date = document.createElement('p');
        div.classList.add('card');
        p.innerText = user.name;
        let dateToFormat = new Date(user.date);
        let fDate = dateToFormat.toLocaleDateString('en', options)
        date.innerText = fDate;
        nameContainer.appendChild(div);
        div.appendChild(p);
        div.appendChild(date);
    })
    console.log(users)
}

addUser = ()=>{
    let name = document.getElementById('name');
    let date = document.getElementById('date');
    let tempUser = { name: name.value, date: date.value}
    users.push(tempUser);
    renderNames()
}