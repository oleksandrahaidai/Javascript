// – Дано 2 масиви з рівною кількістю об’єктів.
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: ‘vasya’,
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: ‘Ukraine’,
//                 city: ‘Ternopil’
//             }
//         },
// // TO BE CONTINUED …..
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}

];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = []
for (const user of usersWithId) {
    for (let i=0; i< citiesWithId.length; i++) {
        if (user.id === citiesWithId[i].user_id) {
             usersWithCities.push(user);
             user.address = citiesWithId[i];
        }
    }
}
console.log(usersWithCities);


// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr = [8, 187, 63, 20, 14, 639, 27, 6, 1, 40]
for (const elem of arr) {
    if (elem % 2 === 0) {
        console.log(elem)
    }
}


// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr1 = [657, true, 'day', 83, false, 8, 129, 'weather', 15, 932]
let arr2 = []
for (const elem of arr1) {
    arr2.push(elem)
    //or
    // arr2 [arr2.length] = elem
}
console.log(arr2)


// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let arr3 = [ 'a', 'b', 'c']
let word1 = '';
for (let i = 0; i < arr3.length; i++) {
    word1 += arr3[i];
}
console.log(word1)


// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
let arr4 = [ 'a', 'b', 'c']
let word2 = '';
let i = 0
while  (i < arr4.length) {
    word2 += arr4[i];
    i++
}
console.log(word2)


// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
let arr5 = [ 'a', 'b', 'c']
let word3 = '';
for (const elem of arr5) {
    word3 += elem;
}
console.log(word3)