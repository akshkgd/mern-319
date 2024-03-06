// for and foreach
// for loop syntax
let users = [
    {firstName: 'ashish', lastName: 'shukla'},
    {firstName: 'himanshu', lastName: 'srivastava'},
    {firstName: 'abhishek', lastName: 'patel'},
    {firstName:  'dev' , lastname:'sathwara'},
    {firstName: 'gopichandu', lastName: 'appani'},
    {firstName: 'nikhil' , lastName: 'bhagat'},
    {firstName: 'Kedar', lastName:'Sharma'}
]


for(let i=0; i<users.length; i++){
    // console.log(i, users[i])
}

for(let i=0; i<=100; i++){
    if(i%2 == 0){
        // console.log(i)
    }
}
function renderNames(item, index){
    // console.log(item, index)
}
// foreach => with a array
// users.forEach(renderNames)


// render the first name using foreach

function displayUsers(user){
    // console.log(user.firstName);
}

users.forEach(displayUsers)
let firstNames = users.map((user)=>{
    return user.firstName;
})

// console.log(firstNames)

// console.log(r)