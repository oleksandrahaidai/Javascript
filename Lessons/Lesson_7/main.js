// ________________додаємо агрумент у вигляді об'єкту_________________________
function User(name, age, status, wife){
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = wife;
    console.log(this)
}


new User('Vanya', 36, false, {name:'Olya',age: 28});
new User('Petya', 49, true, {name:'Tanya',age: 34});
new User('Kolya', 22, false, {name:'Galya', age: 27});



// ________________додаємо агрумент у вигляді об'єкту_________________________
function User1 (name, age, status, wifeName, wifeAge){
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    console.log(this)
}

new User1('Vanya', 36, false, 'Olya', 28);
new User1('Petya', 49, true, 'Tanya', 34);
new User1('Kolya', 22, false, 'Galya', 27);

// _______________PROTOTYPE_____________________

function User2 (name, age) {
    this.name = name;
    this.age = age;
}
console.log(User2);

User2.prototype.greeting = function () {
        return `Hello, my name is ${this.name} and I'm ${this.age}`;
}
let user2 = new User2('Petya', 49)
console.log(user2.greeting());
let user3 = new User2('Vasya', 30)
console.log(user3.greeting());
let user4 = new User2('Olya', 36)
console.log(user4.greeting());

// _____________________CALL and APPLY_______________
function User3 (name, age) {
    this.name = name;
    this.age = age;
}
console.log(User3)

let user5 = new User3('Sonya', 28)
 user5.greeting = function (msg) {
    return `${msg}, my name is ${this.name}`;
 };
console.log(user5.greeting('Olla'));

let user6 = new User3('Egor', 31)
console.log(user5.greeting.apply(user6, ['Hello']));
let user7 = new User3('Tolya', 19)
console.log(user5.greeting.call(user7, 'Hi'));


// _____________________BIND_______________

function User4 (name, age) {
    this.name = name;
    this.age = age;
}
new User4('Vanya', 36),
console.log(User4);

let user8 = new User4('Tolya', 30);
user8.greeting = function(msg)  {
    return `${msg}, my name is ${this.name}`;
};

// user8.greeting = (msg) => { return ` ${msg}, my name is ${this.name}`; }; // WHY NOT WORKING

console.log(user8.greeting('Good morning'));


let user9 = new User4('Katya', 20)
let greetingCopy = user8.greeting.bind(user9, 'Хелоу');
console.log(greetingCopy());

// _________________________CLASS__and__CONSTRUCTOR__________________

class User5 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //  static greeting() {
    //     console.log (this);
    //     return `Hello, my name is ${this.name}`;_____STATIC
    // }
    greeting() {
        console.log (this);
        return `Hello, my name is ${this.name}`;
    }
    work(){
        return `work in progress`;
    }
}

// console.log (User5.greeting());_____STATIC

let user10 = new User5('Anton', 17);
console.log(user10.greeting());

let user11 = new User5('Sonya', 22);
console.log(user11.greeting());

// ____________EXTEND_________________________________

class Customer extends User5 {

    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }
}

let customer1 = new Customer('Olya', 30, 55555);
console.log(customer1);
console.log(customer1.work());

// _______________наслідування в стандартній функціональній конструкції за допомогою APPLY___________________

function User6 (name, age) {
    this.name = name;
    this.age = age;
}

function Customer1 (name, age, password) {
    User6.apply(this, arguments);
    this.password = password;
}
let customer2 = new Customer('Evgen', 39, 12345);
console.log(customer2);
   // Конструкція Сustomer побудована на базі констррукції User 