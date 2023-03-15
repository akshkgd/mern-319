let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// map => transform all the values

function sqr(num){
    return num*num;
}
// anonymous fun => function with no names are anonymous functions
let result = a.map(sqr);
let cube = a.map((num)=>{
    return num* num * num
})
// console.log(result)
// console.log(cube)

// filter
let filters = a.filter((num)=>{
    return num % 2 == 1;
})
// console.log(filters)

// chaining
let chaining = a.filter((x)=>{
    return x%2 == 0;
}).map((x)=>{
    return x* x;
})


// let names = users.map((user)=>{
//         return user.firstName + " " + user.lastName
// })

// let females = users.filter((user)=>{
//     return user.gender == 'male'
// }).map((user)=>{
//             return user.firstName + " " + user.lastName;
//     })
// console.log(females)


let users = []
function register(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let tempUser = {
        name: name.value,
        email: email.value,
    }
    let userEmailCount = users.filter((user)=>{
        return user.email == email.value;
    })
    if(userEmailCount.length == 0){
        users.push(tempUser)
    }
    else{
        alert("user with same email exists!")
    }
    
    console.log(users)
}