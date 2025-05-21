// _____________1___#67kfznmiMl___________________________
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['one ', 2, 'three', 4, 'five', {name: 'Steve'}, ['a','b','c'], 8, true, false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// ________________2______#LARqoUj5I___________________________

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let bookOne ={
    title: "Harry Potter",
    pageCount: 600,
    genre: 'fantasy'
}
let bookTwo = {
    title: "Lord of Rings",
    pageCount: 800,
    genre: 'adventure fantasy'
}
let bookThree = {
    title: 'Institute',
    pageCount: 500,
    genre: 'science fiction'
}

// ______________3_______#sA3Gg1sCp_____________________
// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: "Harry Potter",
    pageCount: 600,
    genre: 'fantasy',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 60
        },
        {
            name: 'John Tolkien',
            age: 90
        },
        {
            name: 'Stephen King',
            age: 70
        }
    ]
}

let book2 = {
    title: "Lord of Rings",
    pageCount: 800,
    genre: 'adventure fantasy',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 60
        },
        {
            name: 'John Tolkien',
            age: 90
        },
        {
            name: 'Stephen King',
            age: 70
        }
    ]
}

let book3 = {
    title: 'Institute',
    pageCount: 500,
    genre: 'science fiction',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 60
        },
        {
            name: 'John Tolkien',
            age: 90
        },
        {
            name: 'Stephen King',
            age: 70
        }
    ]
}
// console.log(book1);
// console.log(book2);
// console.log(book3);


// __________4_____#jCHFnEbdmFd____________________________
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача

users = [
    {
        name:'kiril',
        username: 'kiril',
        password: 'k1'
    },
    {
        name:'oleg',
        username: 'oleg',
        password: '0l1'
    },
    {
        name:'vanya',
        username: 'vanya',
        password: 'va1'
    },
    {
        name:'semen',
        username: 'semen',
        password: 's1'
    },
    {
        name:'anton',
        username: 'anton',
        password: 'a1'
    },
    {
        name:'stepan',
        username: 'stepan',
        password: 'st1'
    },
    {
        name:'damir',
        username: 'damir',
        password: 'd1'
    },
    {
        name:'ivan',
        username: 'ivan',
        password: 'iv1'
    },
    {
        name:'pavel',
        username: 'pavel',
        password: 'p1'
    },
    {
        name:'vadim',
        username: 'vadim',
        password: 'v1'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// ___________________5_______-#coYydZuaeEB__________________________
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temperature = [
    temperatureDay1 = {
        morningTemp: 3,
        dayTemp: 10,
        nightTemp: 4
    },
    temperatureDay2 = {
        morningTemp: 5,
        dayTemp: 12,
        nightTemp: 6
    },
    temperatureDay3 = {
        morningTemp: 1,
        dayTemp: 7,
        nightTemp: 3
    },
    temperatureDay4 = {
        morningTemp: 6,
        dayTemp: 11,
        nightTemp: 2
    },
    temperatureDay5 = {
        morningTemp: 8,
        dayTemp: 13,
        nightTemp: 4
    },
    temperatureDay6 = {
        morningTemp: 10,
        dayTemp: 15,
        nightTemp: 9
    },
    temperatureDay7 = {
        morningTemp: 12,
        dayTemp: 16,
        nightTemp: 10
    }
]
// console.log(temperature);

// _____________6_______#bAUsaq6LI_________________________________
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log ('Невірно');
}

let a = -3;
let isNotZero = a !== 0 ? 'Вірно': 'Невірно';
console.log(isNotZero);


// _________________7_______________#3ckURgvs___________________
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time = 40;
if (time < 15 ) {
    console.log ("quarter1");
} else if (time >= 15 && time < 30 ) {
    console.log ("quarter2");
} else if (time >= 30 && time < 45 ) {
    console.log ("quarter3");
} else if (time >= 45 && time < 60) {
    console.log ("quarter4");
}
<!--_____________8________#UMoNq4biWGe____________________________-->
<!--– У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).-->

let day = 10;
if (day <=10) {
    console.log ("decade1");
} else if (day > 10 && day <= 20 ) {
    console.log ("decade2");
} else if (day > 20 && day <= 31 ) {
    console.log ("decade3");
}

// ____________9_______#KzrtqyQ________________
// Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week =[
    firstDay = {
        dayNumber: 1,
        plan: 'swimming'
    },
    secondDay = {
        dayNumber: 2,
        plan: 'running'
    },
    thirdDay = {
        dayNumber: 3,
        plan: 'playing the guitar'
    },
    fourthDay = {
        dayNumber: 4,
        plan: 'volleyball'
    },
    fifthDay = {
        dayNumber: 5,
        plan: 'tennis'
    },
    sixthDay = {
        dayNumber: 6,
        plan: 'dancing'
    },
    seventhDay = {
        dayNumber: 7,
        plan: 'relax'
    }
]

week.dayNumber  = prompt('enter day number');
switch (week.dayNumber) {
    case '1':
        console.log (week [0].plan);
        break;
    case '2':
        console.log (week [1].plan);
        break;
    case '3':
        console.log (week [2].plan);
        break;
    case '4':
        console.log (week [3].plan);
        break;
    case '5':
        console.log (week [4].plan);
        break;
    case '6':
        console.log (week [5].plan);
        break;
    case '7':
        console.log (week [6].plan);
        break;
    default:
        console.log ('?????');
}
// ___________10___________#uwsz1RnTQJ1_________________

// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.

let b = prompt ('enter the 1st number');
let c = prompt ('enter the 2nd number');

if (b > c) {
    console.log(b);
} else if (b < c) {
    console.log (c);
} else{
    console.log (b);
}

// _________________11_________#iBvqtjEm______________________
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// 0
//false
//''
//null
//undefined
//NaN

// Use t instead of x cause x is already used in this file

let t = undefined;
if (t === 0 || t === null || t === undefined || t === '' || t === NaN) {
    t = 'default'
    console.log(t);
}

// let s = NaN;
// if (!s) {
//     s = 'default'
//     console.log(s)
// }
