// _________1_________#y7crMeFwHcS_______________________________
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum dolorum eaque enim fuga fugiat id illo, impedit ipsum laboriosam nobis obcaecati officiis porro reprehenderit saepe sapiente, sequi similique, soluta.</div>');
}

// ___________2__________#TYj7ncx_____________________________________
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> Lorem ipsum dolor sit amet, consectetur adipisicing elit ${i}</div>`);
}

// ______________3______#uzkt71dp_____________________________________
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while (i < 20) {
    document.write('<h1> This is the best day</h1>')
    i++;
}
// _____________4______________#OeT7t3uUMFi________________________
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ii = 0
while (ii < 20) {
    document.write(`<h1> Hello, friends ${ii}</h1>`)
    ii++;
}

// ________________5__________________#vLSZKMlO____________________
// – Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру за шаблоном

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (const item of listOfItems) {
    document.write(`<li> ${item} </li>`);
}
document.write(`</ul>`)

// _____________6___________#Hdjws7E__________________________________
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSCwilcVoltOj889uAzZkFD5E62J98EQ-8ealqqksrY8YfpfHab7p4rc&s'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'data:image/jpeg;base64,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'
    },
];
for (const product of products) {
    document.write(`
        <div>
            <h3 class=”product-title”>${product.title}. Price - ${product.price}</h3>
            <img src=${product.image} alt= "product photo" class="product-image">
        </div>`);
}

// ________________7_____________#4WrHwFTEop0___________________________
// є масив, за допомогою циклу вивести:

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


//  – користувачів зі статусом true
for (let i=0; i<users.length; i++) {
    if (users[i].status) {
        console.log(users[i]);
    }
}
// _______________getting users with status:True within one array

let usersTrue = []
for (let i=0; i<users.length; i++) {
    if (users[i].status) {
        usersTrue[usersTrue.length] = users[i]
    }
}
console.log(usersTrue);


//  – користувачів зі статусом false
for (let i=0; i<users.length; i++) {
    if (!users[i].status) {
        console.log(users[i]);
    }
}
// _______________getting users with status:False within one array
let usersFalse = []
for (let i=0; i<users.length; i++) {
    if (!users[i].status) {
        usersFalse[usersFalse.length] = users[i]
    }
}
console.log(usersFalse);


//  – користувачів, які старші за 30 років
for (let i=0; i<users.length; i++) {
    if (users[i].age> 30) {
        console.log(users[i]);
    }
}
// _______________getting users with age>30 within one array
let usersOverThirty = []
for (let i=0; i<users.length; i++) {
    if (users[i].age> 30) {
        usersOverThirty[usersOverThirty.length] = users[i]
    }
}
console.log(usersOverThirty);



