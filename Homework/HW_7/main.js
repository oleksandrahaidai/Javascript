
// _____________1__________#XjJuucOMR0_______________________
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

 function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
 }

 let users = [
     new User(1, 'Oleg', 'Ivanenko', 'oleg@gmail.com', '380994862505'),
     new User(6, 'Ivan', 'Petrenko', 'ivan@gmail.com', '380994251973'),
     new User(3, 'Anton', 'Kononenko', 'anton@gmail.com', '380996473879'),
     new User(2, 'Stepan', 'Zlenko', 'stepan@gmail.com', '380992416330'),
     new User(5, 'Andrii', 'Chernenko', 'andrii@gmail.com', '380999864374'),
     new User(9, 'Oleksii', 'Pushkarenko', 'oleksii@gmail.com', '380991406307'),
     new User(7, 'Damir', 'Malyarenko', 'damir@gmail.com', '380998906211'),
     new User(8, 'Taras', 'Ostapenko', 'taras@gmail.com', '380993306732'),
     new User(4, 'Egor', 'Salenko', 'egor@gmail.com', '380998076432'),
     new User(10, 'Vadym', 'Chomenko', 'vadym@gmail.com', '380992517442')
 ]
console.log(users);

// let users1 = []
// users1.push(new User(1, 'Oleg', 'Ivanenko', 'oleg@gmail.com', '380994862505'));
// users1.push(new User(2, 'Ivan', 'Petrenko', 'ivan@gmail.com', '380994251973'));
// users1.push(new User(3, 'Anton', 'Kononenko', 'anton@gmail.com', '380996473879'));
// users1.push(new User(4, 'Stepan', 'Zlenko', 'stepan@gmail.com', '380992416330'));
// users1.push(new User(5, 'Andrii', 'Chernenko', 'andrii@gmail.com', '380999864374'));
// users1.push(new User(6, 'Oleksii', 'Pushkarenko', 'oleksii@gmail.com', '380991406307'));
// users1.push(new User(7, 'Damir', 'Malyarenko', 'damir@gmail.com', '380998906211'));
// users1.push(new User(8, 'Taras', 'Ostapenko', 'taras@gmail.com', '380993306732'));
// users1.push(new User(9, 'Egor', 'Salenko', 'egor@gmail.com', '380998076432'));
// users1.push(new User(10, 'Vadym', 'Chomenko', 'vadym@gmail.com', '380992517442'));
// console.log(users1);

// _________________2______________#2ikXsE2WiKZ_______________________
// – Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

// _________________3_______________#pOeHKct_____________________________
// – Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((user1, user2) => {
    return user1.id - user2.id;
});
console.log(sortedUsers);
// // _____AБО_____
// let sortedUsers1 = users.sort((user1, user2) => user1.id - user2.id);
// console.log(sortedUsers1);


//____________________4__________________#nkMXISv_____________________________
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients =[
    new Client(1, 'Ivan', 'Petrenko', 'ivan@gmail.com', '380994862505', ['bread', 'milk', 'tea']),
    new Client(2, 'Stepan', 'Ivanenko', 'stepan@gmail.com', '380998463720', ['coffee', 'bread', 'butter', 'potato', 'jam']),
    new Client(3, 'Ruslan', 'Glushko', 'ruslan@gmail.com', '380992345199', ['cucumbers', 'ham', 'eggs', 'apples']),
    new Client(4, 'Oleg', 'Surzhko', 'oleg@gmail.com', '380992345199', ['cucumbers', 'ham', 'biscuits', 'apples', 'tea', 'coffee', 'salt']),
    new Client(5, 'Anton', 'Stepanenko', 'anton@gmail.com', '380992345199', ['cucumbers', 'ham', 'eggs']),
    new Client(6, 'Vadym', 'Kosenko', 'vadym@gmail.com', '380992345199', ['onion', 'ham', 'eggs', 'apples', 'bread', 'butter']),
    new Client(7, 'Victor', 'Voitenko', 'victor@gmail.com', '380992345199', ['cucumbers', 'ham']),
    new Client(8, 'Andrii', 'Dubovenko', 'andrii@gmail.com', '380992345199', ['bread']),
    new Client(9, 'Oleksii', 'Malyarenko', 'oleksii@gmail.com', '380992345199', ['pears', 'ham', 'eggs', 'apples', 'bread', 'butter', 'salad', 'grapes']),
    new Client(10, 'Pavel', 'Karpenko', 'pavel@gmail.com', '380992345199', ['eggs', 'apples'])
]
console.log(clients);



function Client1(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}
let clients1 =[
    new Client1(1, 'Ivan', 'Petrenko', 'ivan@gmail.com', '380994862505','bread', 'milk', 'tea'),
    new Client1(2, 'Stepan', 'Ivanenko', 'stepan@gmail.com', '380998463720', 'coffee', 'bread', 'butter', 'potato', 'jam'),
    new Client1(3, 'Ruslan', 'Glushko', 'ruslan@gmail.com', '380992345199', 'cucumbers', 'ham', 'eggs', 'apples'),
    new Client1(4, 'Oleg', 'Surzhko', 'oleg@gmail.com', '380992345199', 'cucumbers', 'ham', 'biscuits', 'apples', 'tea', 'coffee', 'salt'),
    new Client1(5, 'Anton', 'Stepanenko', 'anton@gmail.com', '380992345199', 'cucumbers', 'ham', 'eggs'),
    new Client1(6, 'Vadym', 'Kosenko', 'vadym@gmail.com', '380992345199', 'onion', 'ham', 'eggs', 'apples', 'bread', 'butter'),
    new Client1(7, 'Victor', 'Voitenko', 'victor@gmail.com', '380992345199', 'cucumbers', 'ham'),
    new Client1(8, 'Andrii', 'Dubovenko', 'andrii@gmail.com', '380992345199', 'bread'),
    new Client1(9, 'Oleksii', 'Malyarenko', 'oleksii@gmail.com', '380992345199', 'pears', 'ham', 'eggs', 'apples', 'bread', 'butter', 'salad', 'grapes'),
    new Client1(10, 'Pavel', 'Karpenko', 'pavel@gmail.com', '380992345199', 'eggs', 'apples')
]
console.log(clients);


// _____________________5_________________#8abtVjRv________________________________
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort ((client1, client2) => {
    return client1.order.length - client2.order.length;
});
console.log(sortedClients);


// ______________________6_________________#vV9a6584I5________________________________
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car (model, producer, productionYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.productionYear = productionYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`moving at the speed of ${this.maxSpeed} per hour`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (addedSpeed) {
        if (addedSpeed > 0) {
            return this.maxSpeed = this.maxSpeed + addedSpeed;
        }
    }
    this.changeYear = function (newValue) {
        if (newValue > 1815) {
            return this.productionYear = newValue;
        }
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }
}

let car1 = new Car('RAV4', 'Toyota', 2015, 190, 2.0);
console.log(car1)
car1.drive();
car1.info();
car1.increaseMaxSpeed(5);
car1.changeYear(2018);
car1.addDriver({name:'Valentyn', age: '35', status:true});
console.log(car1)

// ___________________7__________________#5kla3yMpgp_______________________________
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car1 {
    constructor(model, producer, productionYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`moving at the speed of ${this.maxSpeed} per hour`)
    }
    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed(addedSpeed) {
        if (addedSpeed > 0) this.maxSpeed = this.maxSpeed + addedSpeed;
    }
    changeYear(newValue) {
        if (newValue > 1815) return this.productionYear = newValue;
    }
    addDriver(driver) {
        if (driver) this.driver = driver;
    }
}

let car2 = new Car1('X-trail', 'Nissan', 2016, 180, 2.4);
console.log(car2)
car2.drive();
car2.info();
car2.increaseMaxSpeed(10);
car2.changeYear(2022);
car2.addDriver({name:'Igor', age: '46', status:true});
console.log(car2)

let car3 = new Car1('Lancer', 'Mitsubishi', 2008, 200, 1.6);
console.log(car3)
car3.drive();
car3.info();
car3.increaseMaxSpeed(15);
car3.changeYear(2010);
car3.addDriver({name:'Stepan', age: '29', status:false});
console.log(car3)


// __________________8__________#zg6Fifnqig__________________________________________
//     Cтворити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
    let potentialCinderellas = [
        new Cinderella('Sofya', 19, 40),
        new Cinderella('Adelya', 17, 36),
        new Cinderella('Nastya', 18, 39),
        new Cinderella('Olena', 16, 32),
        new Cinderella('Anna', 15, 38),
        new Cinderella('Polina', 18, 34),
        new Cinderella('Ksenya', 17, 37),
        new Cinderella('Albina', 18, 33),
        new Cinderella('Ivanna', 15, 31),
        new Cinderella('Nastya', 18, 35)
    ];
console.log(potentialCinderellas);

class Prince {
    constructor(name, age, sizeOfShoeFound) {
        this.name = name;
        this.age = age;
        this.sizeOfShoeFound = sizeOfShoeFound;
    }
}

let prince = new Prince ('Albert', 25, 36);
console.log(prince)

let cinderellaWithPrince = [];
for (const cinderella  of potentialCinderellas) {
       if (cinderella.footSize === prince.sizeOfShoeFound) {
        cinderellaWithPrince.push(cinderella);
    }
}
console.log(cinderellaWithPrince)

// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
let wifeOfPrinceCinderella = potentialCinderellas.find(cinderella => cinderella.footSize === prince.sizeOfShoeFound);
console.log(wifeOfPrinceCinderella)


// ___________________9____________#gsKLAsNWM______________________________________
// *Через Array.prototype. створити власний foreach, filter
const array = [3, 5, 10, 7, 1, 13, 2, 15, 11, 40]

// Помножити усі значення масиву на 5, створити з них новий масив та вивести його:
let multipliedArray =[]
array.forEach(function(value) {
    console.log(value = value*10);
    multipliedArray.push(value);
});
console.log(multipliedArray)

// Відфільтрувати усі значення масиву, які діляться на 5 без решти:
let filteredArray =  array.filter(element => element % 5 === 0);
console.log(filteredArray);

let filteredArray1 =  array.filter(function(value) {
    return value % 5 === 0
});
console.log(filteredArray1);