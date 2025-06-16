// _________________1_______________#dFeorS3m7u_______________________________
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

function countSymbols1 (string) {
    return string.length
}
console.log(countSymbols1 ('hello world'));
console.log(countSymbols1 ('lorem ipsum'));
console.log(countSymbols1('javascript is cool'));

// ______________with arrow function________________
let  countSymbols2 = (string) => string.length

console.log(countSymbols2 ('hello world'));
console.log(countSymbols2 ('lorem ipsum'));
console.log(countSymbols2('javascript is cool'));

// _____________variables declaration_______________
let a1 = 'hello world';
console.log(a1.length);
let a2 = 'lorem ipsum';
console.log(a2.length);
let a3 = 'javascript is cool';
console.log(a3.length);


// _____________________2_______________________#8lld9HMxXWB_____________________________
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let b = 'hello world';
let b1 = b.toUpperCase();
console.log(b1);

let c = 'lorem ipsum';
let c1 = c.toUpperCase();
console.log(c1);

let d = 'javascript is cool';
let d2 = d.toUpperCase();
console.log(d2);

// ------------------with arrow function_____________
let  changeToUpperCase = (string) => string.toUpperCase();
console.log(changeToUpperCase('hello world'));
console.log(changeToUpperCase('lorem ipsum'));
console.log(changeToUpperCase('javascript is cool'));


// ______________________3____________#ClDsAm7xba7__________________________________________
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let k = 'HELLO WORLD';
let k1 = k.toLowerCase();
console.log(k1);

let l = 'LOREM IPSUM'
let l2 = l.toLowerCase();
console.log(l2);

let m = 'JAVASCRIPT IS COOL'
let m2 = m.toLowerCase();
console.log(m2);

// ________________with arrow function______________
let  changeToLowerCase = (string) => string.toLowerCase();
console.log(changeToLowerCase('HELLO WORLD'));
console.log(changeToLowerCase('LOREM IPSUM'));
console.log(changeToLowerCase('JAVASCRIPT IS COOL'));

//
// _______________4_______________#0b89BkYZwu_________________________________________
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let str1 = str.trim()
console.log(str1)

// ________________with arrow function_______________
let cleanString = (string) => string.trim();
console.log (cleanString(' dirty string   '));


// _________________5______________#bfoJuse4ZzP_____________________________________
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let stringToArray = (str) => {
    if (str) {
        return str.split(' ');
    }
    return [' ']
}
console.log(stringToArray ('Ревуть воли як ясла повні'));

//__________________6______________ #Rbr5kEQ____________________________________________
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об’єкти в масиві на стрінгові.

let array = [10,8,-7,55,987,-1011,0,1050,0]
let mappedArray = array.map(function(value) {
        return value + '';
});
console.log (mappedArray);

// _______________array function____________
const numbers = [10,8,-7,55,987,-1011,0,1050,0]
let mappedNumbers = numbers.map(number => number + '');
console.log (mappedNumbers);


// ______________________7___________________#5hqyKTfmc_____________________________________________
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]


let nums = [11,21,3];

function sortNums(array,direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a-b);
    } else if (direction === 'descending') {
    return nums.sort((a, b) => b-a);
    }
}
console.log(sortNums( nums,'ascending'));
console.log(sortNums (nums,'descending'));

// ____________________8_________________#yo06d74c1C_____________________________________________________
// – є масив

const coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

// - відсортувати його за спаданням за monthDuration
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let sorted = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
    console.log(sorted);

let filtered = sorted.filter(value => value.monthDuration > 5);
    console.log(filtered);

let mapped = filtered.map((value, index) => {
        return {id: index +1, ...value}
    });
console.log(mapped);


 // — відсортувати coursesAndDurationArray  за спаданням за monthDuration/ DONE LIKE A SEPARATE TASK
function sortCourses (array) {
    let sort = array.sort((course1, course2) => {
        return (course2.monthDuration - course1.monthDuration);
    });
    console.log(sort);
}
sortCourses(coursesAndDurationArray);


// — відфільтрувати coursesAndDurationArray, залишивши тільки курси з тривалістю понад 5 місяців/ DONE LIKE A SEPARATE TASK
function filterCourses (array) {
    let filter = array.filter (value => {
        return  value.monthDuration > 5;
    });
    console.log(filter);
}
filterCourses (coursesAndDurationArray);


// — за допомоги map перетворити кожен елемент coursesAndDurationArray на наступний тип {id,title,monthDuration}/ DONE LIKE A SEPARATE TASK
function mapCourses (array) {
    let map = array.map ((value, index) => {
        return { id: index + 1, ...value,};
    })
    console.log(map);
}
mapCourses (coursesAndDurationArray);


 // _____________________9_______________#4LJn7zBx_____________________________________________
// взяти з arrays.js масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// –написати пошук всіх об’єктів, в яких в modules є sass
function findObjectsWithModule1 (array) {
    let filteredModules = array.filter (course => {
        return (course.modules.includes('sass'))
        });
    console.log(filteredModules);
}
    findObjectsWithModule1(coursesArray);


// –написати пошук всіх об’єктів, в яких в modules є docker
function findObjectsWithModule2 (array) {
    let filteredModules = array.filter (course => {
        return (course.modules.includes('docker'))
    });
    console.log(filteredModules);
}
findObjectsWithModule2(coursesArray);


// –написати пошук всіх об’єктів, в яких в modules є sass, docker aбо будь-який інший модуль
function findObjectsWithModules (array, condition) {
    let filteredModules = array.filter (value => {
        return (value.modules.includes(condition))
    });
    console.log(filteredModules);
}
findObjectsWithModules(coursesArray, 'sass');
findObjectsWithModules(coursesArray, 'docker');
findObjectsWithModules(coursesArray, 'git');


// ___________________10___________________#bolvdlhP____________________________________
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }


    let deckOfCards = []
    let suits = ['diamonds', 'hearts', 'spades', 'clubs']
    for (let i = 6; i <= 10; i++) {
        for (const suit of suits) {
            if (suit === 'hearts' || suit === 'diamonds') {
                deckOfCards.push({cardSuit: suit, value: i, color: 'red'});
            } else {
                deckOfCards.push({cardSuit: suit, value: i, color: 'black'});
            }
        }
    }
        for (const suit of suits) {
            let values = ['Jack', 'Queen', 'King', 'Ace'];
            for (const value of values) {
                if (suit === 'hearts' || suit === 'diamonds') {
                    deckOfCards.push({cardSuit: suit, value: value, color: 'red'});
                } else {
                    deckOfCards.push({cardSuit: suit, value: value, color: 'black'});
                }
            }
        }
    console.log(deckOfCards);


// Після опису, використовуючи функції масивів:
//  – знайти піковий туз

function findCard (array) {
    let card = array.find (value => (value.cardSuit === 'spades' && value.value === 'Ace' ));
        console.log(card);
}
findCard(deckOfCards);


//  – всі шістки
function findSixCards (array) {
    let SixCards = array.filter (value => value.value === 6);
    console.log(SixCards);
}
findSixCards(deckOfCards);



//  – всі червоні карти
function findRedCards (array) {
    let redCards = array.filter (value => value.cardSuit === 'hearts' || value.cardSuit === 'diamonds');
        console.log(redCards);
    }
findRedCards(deckOfCards);


//  – всі буби
function findDiamondCards (array) {
    let diamondCards = array.filter (value => value.cardSuit === 'diamonds');
    console.log(diamondCards);
}
findDiamondCards(deckOfCards);

//  – всі трефи від 9 та більше
function findClubsOverNineCards (array) {
    let clubsCards = array.filter (value => value.cardSuit === 'clubs' && (value.value === 9 || value.value === 10 || value.value === 'Jack' || value.value === 'Queen' || value.value === 'King' || value.value === 'Ace'));
    console.log(clubsCards);
}
findClubsOverNineCards(deckOfCards);

// ___________________11_________________#EP5I1UUzAX_______________________________________________
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

function suitsDivision (array) {
   let reducedArray =  array.reduce((accumulator, value) => {
        if (value.cardSuit === 'hearts') {
            accumulator.hearts.push(value);
        } else if (value.cardSuit === 'diamonds') {
            accumulator.diamonds.push(value);
        } else if (value.cardSuit === 'clubs') {
            accumulator.clubs.push(value);
        } else if (value.cardSuit === 'spades') {
            accumulator.spades.push(value);
        }
        return accumulator;
    }, {
        hearts: [],
        diamonds: [],
        clubs: [],
        spades: []
   })
    console.log(reducedArray);
}
suitsDivision(deckOfCards);