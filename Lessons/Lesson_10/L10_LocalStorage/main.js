localStorage.setItem ('name', 'Stepan')// НАПОВНЮЄМО LOCAL STORAGE
localStorage.clear()// ВИДАЛЯЄМО УСЕ З LOCAL STORAGE
localStorage.setItem('name', 'Oleksii')
localStorage.setItem('name', 'Anton')
localStorage.setItem('surname', 'Popenko')
localStorage.setItem('age', '24')


console.log(localStorage.getItem('name'));// ДІСТАЄМО ЗНАЧЕННЯ ЗА КЛЮЧЕМ name
console.log(localStorage.getItem('age'));// ДІСТАЄМО ЗНАЧЕННЯ ЗА КЛЮЧЕМ age

localStorage.clear()
localStorage.setItem('user', JSON.stringify({id: '1', name: 'kokos'}));//ДОДАЄМО ОБЄКТ В LOCAL STORAGE

let userJson = localStorage.getItem('user');//ДІСТАЄМО ОБЄКТ З LOCAL STORAGE
console.log(userJson);

let user =JSON.parse(userJson); // ПЕРЕТВОРЮЄМО JSON НА ЗВИЧАЙНИЙ ОБЄКТ
console.log(user);

user.name = 'ananas';// - змінюємо value
user.surname = 'kokosenko';// - додаємо ключ

console.log(user);

let newUser = JSON.stringify(user);
console.log(newUser);


localStorage.setItem('user', newUser);// - ЗАМІНЮЄМО ОБЄКТ User НА ЗМІНЕНИЙ

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


localStorage.setItem('users', JSON.stringify(users)); //додали JSON обєкт

let usersJson = localStorage.getItem('users');
console.log(usersJson);

let newUsers = JSON.parse(usersJson);
console.log(newUsers);

newUsers[0].name = 'Slavunya'
newUsers.push({name: 'asaffaffa', age: 362, status: true});
console.log(users);

localStorage.setItem('users', JSON.stringify(newUsers));