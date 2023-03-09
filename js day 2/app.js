// advance arrays and objects methods
// conditions => if and else

let items = ['bread', 'butter', 'milk']
// console.log(items)
// items.push('coffee')
// items.pop()
// items[1] = 'sugar'

// splice => index number, how much to delete, add new items(optional)
items.splice(1, 0, 'apple', 'cookies')

// console.log(items)


// objects

let user = {
    name: 'ashish',
    email: 'ashish@gmail.com',
    age: 24,
    address: 'Allahabad',
    hobbies: ['book reading', 'swimming',]
}
// user.salary = 45000
// delete user.age
// console.log(user.hobbies[0])

let users = [
    {name: 'nayan', email: 'nayan@gmail.com'},
    {name: 'yash', email: 'yash@gmail.com'},
    {name: 'pankaj', email: 'pankaj@gmail.com'},
    {name: 'noor', email: 'noor@gmail.com'},
    {name: 'priyanka', email: 'priyanka@gmail.com'},
    {name: 'himanshu', email: 'himanshu@gmail.com'},
    {name: 'suneel', email: 'suneel@gmail.com'},
    {name: 'avisha', email: 'avisha@gmail.com'},
]

// console.log(users.length)


// conditionals
let name = 'ashish';

// if(age > 18){
//     console.log('you can vote!')
// }
// else{
//     console.log('you can not vote!')
// }

if(name == 'ashish'){
    console.log('hello instructor')
}
else{
    console.log('hello', name)
}

// ternary operator

let age =  4;
age> 18 ? console.log('eligible') : console.log('not eligible');