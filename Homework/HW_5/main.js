// __________________1______________#I2XsG6f________________________________________
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleSquare = (a, b) => a * b;
console.log (rectangleSquare(3, 8));


// ___________________2_______________#ETGAxbEn8l______________________________________
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
let circleSquare = (r) => 3.14 * r * r;
console.log (circleSquare(8));


// ___________________3__________________#Mbiz5K4yFe7__________________________________________
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
let cylinderSquare = (radius, height) => 2 * 3.14 * radius * height;
console.log (cylinderSquare(3, 8));


// ___________________4___________________#SIdMd0hQ___________________________________________
// – створити функцію, яка приймає масив та виводить кожен його елемент
    let displayElements = (array) => {
        for (const item of array) {
            console.log (item);
        }
    }
    displayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    displayElements(['big', true, 178, false, 42, 'small', false, true, 'weather', 11111]);



// ______________________5________________#59g0IsA________________________________________________
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
let createText = (text) => {document.write (`<p> ${text} </p>`)}
createText('Hello, my friends!')
createText('Lets get started!')


// _____________________6____________________#hOL6126________________________________________________
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = (text) => {
    document.write (`<ul>
                     <li> ${text} </li>
                     <li> ${text} </li>
                     <li> ${text} </li>
                     </ul>`)}
createList('Surprise')
createList('Announcement')

// _______________________7_________________#0Kxco1edSN)____________________________________________________
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let newList = (elementsText, elementsNumber) => {
    document.write(`<ul>`)
    for (i = 0; i < elementsNumber; i++) {
       document.write(`<li> ${elementsText} </li>`)
    }
    document.write (`</ul>`)
}
newList('Good morning', 15)

// _______________________8_________________#gEFoxMMO_____________________________________________________
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createNewList = (array) => {
    document.write (`<ul>`);
    for (const item of array) {
        document.write(`<li> ${item} </li>`)
    }
    document.write (`</ul>`);
}
createNewList ([3, true, false, 'spring', 564, 'How are you?', 21, 7])


// ___________________________9____________#bovDJDTIjt_________________________________________________
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
let printObject = (array) => {
        for (const item of array) {
        document.write (`<p> id: ${item.id}, name: ${item.name}, age: ${item.age} </p>`)
    }
}
printObject([
    {id: 1, name: 'Anya', age: 28},
    {id: 2, name: 'Anton', age: 23},
    {id: 3, name: 'Ivan', age: 24}
]);

// ___________________10________________#pghbnSB____________________________________________
// – створити функцію, яка повертає найменше число з масиву
let findMinNumber = (array) => {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
};
console.log(findMinNumber([19, 8, 129, 36, 1965]));

// _________________________11__________________#EKRNVPM______________________________________
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        result +=arr[i];
    }
    return result;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7]));

// _____________________________12___________________#kpsbSQCt2Lf__________________________________________
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    a = arr [index1]
    arr [index1] = arr[index2]
    arr [index2] = a
    return arr;
}
console.log(swap([1, 2, 3, 4, 5, 6, 7], 0,6));

// _____________________________13__________#mkGDenYnNjn______________________________________________
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            result =  sumUAH / currencyValue.value
        }
    }
    return result;
}

console.log(exchange(10000, [{currency: 'USD',value: 40}, {currency:'EUR', value:42}], 'USD'));





