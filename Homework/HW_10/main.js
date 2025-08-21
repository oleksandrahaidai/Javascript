// ____________________1________________#sH8c4er_______________________________
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let button = document.getElementsByClassName ('button')[0];

 button.onclick = function () {
     document.getElementById('text').remove();
 }


// ___________________2___________________#j693ca8_____________________________
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

let formButton = document.getElementsByClassName('btn')[0]
let target = document.getElementsByClassName('target')[0]

let i1 = document.getElementById('age');
i1.oninput = function () {
        formButton.onclick = function () {
            if (i1.value < 18) {
            target.innerText = `The age is less than 18`;
        }
    }
}


// ___________________3___________________#ymAmN2xJ__________________________
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let userDiv = document.getElementsByClassName('user')[0];

let f = document.forms.f1;
f.onsubmit = function (ev) {
    ev.preventDefault()
    if (this.name.value !== " " && this.surname.value !== " " && this.age.value !== "") {
        userDiv.innerText = `${this.name.value} ${this.surname.value} ${this.age.value}`;
    }
}


// __________________4_________________#2VaLt4vDczH__________________________
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem ('number')
currentNumber = currentNumber + 1;

localStorage.setItem ('number', currentNumber);

let numberDiv = document.getElementsByClassName('number')[0]
    numberDiv.innerText = currentNumber


// ____________________5__________________#LhSfdhM3_______________________________
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || []

sessionsList.push(new Date ())
localStorage.setItem ('sessionsList', JSON.stringify(sessionsList));


// __________________6______________#Jg0gPO00____________________________________
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let input = document.getElementById('kilo')
// input.oninput = function () {
input.addEventListener('input', function(ev) {
    let resultDiv = document.getElementsByClassName('result')[0];
    resultDiv.innerText = +this.value * 2.20462;
})


// __________________7_____________#RbQGnH5DuC________________________________________
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void
// let users = [{name:'Dima',age:35},{name: 'Anton', age:25}]

let users = [
    {name:'Dima',age:35},
    {name: 'Anton', age:25}
]
localStorage.setItem('users', JSON.stringify(users));


function addToLocalStorage(arrayName,objToAdd) {
   const lsItem = localStorage.getItem(arrayName)
    if (! lsItem) {
        throw new Error('there is no such array')
    }

    let parsedArray = JSON.parse(lsItem);
    if( typeof objToAdd === 'object') {
    parsedArray.push(objToAdd)};
    localStorage.setItem(arrayName, JSON.stringify(parsedArray));
}

addToLocalStorage('users', {name: 'Katya', age: 37})
addToLocalStorage('users', {name: 'Vasya', age: 28})


// ___________________8_______________#kUSgFqWY_____________________________________
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.


let form = document.forms.tableInfo
form.onsubmit = function (ev) {
    ev.preventDefault()
    let table  = document.getElementById("table")
        let linesNumber = +this.numberOfLines.value
        let cellNumber = +this.numberOfCells.value
        let cellValue = this.cellValue.value
        console.log(linesNumber, cellNumber, cellValue)

        for (let i = 0; i < linesNumber; i++) {
            let tr = document.createElement('tr')
            table.appendChild(tr)
            for (let j = 0; j < cellNumber; j++) {
                let td = document.createElement('td')
                tr.appendChild(td)
                td.innerText = cellValue
            }
        }
}


// __________________9_________________#bq1zkx7WP_________________________
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

if (!localStorage.getItem('sum')) {
    let sumMoney = document.getElementById('sum')
    localStorage.setItem('sum', sumMoney.innerText);
}

let newSumMoney = +localStorage.getItem('sum')

newSumMoney = newSumMoney + 10;

function refreshData() {
    localStorage.setItem('sum', newSumMoney);
}
setTimeout(refreshData, 10000);

let sumDiv = document.getElementById('sum')
sumDiv.innerText = newSumMoney;
