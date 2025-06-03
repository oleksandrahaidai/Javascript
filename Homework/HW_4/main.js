// __________________1_______________ #I2XsG6f______________________________________________
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleSquare(a, b) {
    const result = a * b;
    console.log(result);
    return result
}
rectangleSquare(5, 5);
rectangleSquare(2, 7);
rectangleSquare(2, 8);


// _____________________2______________#ETGAxbEn8l______________________________________________
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function circleSquare(r) {
    return 3.14 * r * r;
}
console.log (circleSquare(5));
console.log (circleSquare(7));


// _________________________3_______________#Mbiz5K4yFe7____________________________________________________
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderSquare (radius, height) {
    return 2 * 3.14 * radius * height;
}
console.log (cylinderSquare (5,8));
console.log (cylinderSquare  (3, 6));


// _______________________4_________________#SIdMd0hQ________________________________________________________
// – створити функцію, яка приймає масив та виводить кожен його елемент
function displayItems (array){
    for (const item of array){
        console.log(item);
    }
}
displayItems ([2, 7, 8, 3]);
displayItems (['red', 'white', 'black']);
displayItems ([2008, true, 'sky']);


// ________________________5___________________#59g0IsA_________________________________________________________
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function printText (text) {
    document.write(`<p>${text}</p>`);
}
printText ('Hello, friends!');
printText ('Nice to meet you!');


// _______________________6_________________#hOL6126____________________________________________________________
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function printList (textElement) {
    document.write(`<ul>
        <li>${textElement}</li>
        <li>${textElement}</li>
        <li>${textElement}</li>
    </ul>`);
    }
printList ('milk');
printList ('bread');


// _________________________7___________________#0Kxco1edSN_________________________________________________________
// – створити функцію, яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createList (textElement, elementsNumber) {
        document.write (`<ul>`)
            for (let i = 0; i < elementsNumber; i++) {
                document.write (`<li> ${textElement} </li>`)
            }
        document.write (`</ul>`)
}
createList ('Hello', 9)
createList ('How are you?', 3)


// __________________________8__________________#gEFoxMMO_________________________________________________________
// – створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список (ul li) та виводить його через document.write

function newList (array) {
    document.write (`<ul>`)
        for (const elem of array) {
            document.write (`<li>${elem}</li>`)
        }
    document.write (`</ul>`)

}
newList ([1, true, 'placeholder', false, 26, 'winter']);
newList ([false, 'summer', 378, 'winter', true, 2094, 16, false, 184]);


// __________________________9_________________________#bovDJDTIjt____________________________________________________
// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об’єкту окремий блок.

function printObject (users) {
    for (const elem of users) {
        document.write(`<div> id: ${elem.id}, name: ${elem.name}, age: ${elem.age}</div>`);
    }
}
printObject ([
    {id: 1, name: 'Tom', age: 8},
    {id: 2, name: 'Jane', age: 10},
    {id: 3, name: 'Carter', age: 6}
]);
printObject ( [
    {id: 1, name: 'Katya', age: 30},
    {id: 2, name: 'Olya', age: 27},
    {id: 3, name: 'Valya', age: 29}
])


// __________________________10________________________#pghbnSB_____________________________________________________
// – створити функцію яка повертає найменше число з масиву

function findMinNumber (array) {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
console.log(minNumber);
return minNumber;
}

findMinNumber ([18, 3, 59, 46, 24, 2]);
findMinNumber ([169, 732, -158, 950, 200, 347]);


// _____________________________11_______________________#EKRNVPM__________________________________________________
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (arr) {
    let result = arr[0]
    for (let i = 1; i< arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log (sum ([ 16, 48, 25, 10, 46]));
console.log (sum ([ 1, 2, 3, 4, 5]));


// ___________________________12__________________________#kpsbSQCt2Lf_______________________________________________
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {
    if (index1< arr.length && index2 < arr.length) {
        let a = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = a;
        return arr;
    }
    return 'wrong index';
}
console.log (swap([11,22,33,44],3,1));
console.log (swap([11,22,33,44],0,8));

// _________________________13_______________________#mkGDenYnNjn.html________________________________________________
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange (sumUAH,currencyValues,exchangeCurrency){
    for (const currencyValue of currencyValues){
        if (currencyValue.currency === exchangeCurrency){
           return sumUAH/currencyValue.value;
        }
    }
}
console.log (exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));