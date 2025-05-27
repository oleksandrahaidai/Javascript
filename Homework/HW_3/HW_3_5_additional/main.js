// ____________________________#reLkOkTB29Q_________________________
// створити масив книжок (назва, кількість сторінок, автори , жанри).

 books = [
     {name: 'Harry Potter', pages: 650, authors: ['Joanne Rowling', 'One more author'], genres: ['fantasy', 'novel']},
     {name: 'Lord of Rings', pages: 720, authors: ['John Tolkien'], genres: ['adventure', 'fantasy','novel']},
     {name: 'Institute', pages: 580, authors: ['Stephen King', 'Co-author'], genres: ['science fiction', 'adventure']},
     {name: 'Independence', pages: 640, authors: ['Stephen King'], genres: ['science fiction', 'adventure', 'horror' ]},
 ]

// – знайти найбільшу книжку.
let bookName = books[0].name;
let maxBook = books[0].pages;
for (let i = 1; i < books.length; i++) {
    if (books[i].pages > maxBook) {
        bookName = books[i].name
        maxBook = books[i].pages;
    }
}
console.log(bookName);


// – знайти книжку/ки з найбільшою кількістю жанрів
let bookName1 = [books[0].name];
let maxGenresLength = books[0].genres.length
for (let i = 1; i < books.length; i++) {
    if (books[i].genres.length > maxGenresLength) {
        bookName1 = [books[i].name];
        maxGenresLength = books[i].genres.length;
        } else if (books[i].genres.length === maxGenresLength) {
        bookName1 [bookName1.length] = books[i].name;
    }
}
console.log(bookName1);


// // – знайти книжку/ки з найдовшою назвою
let bookName2 = [books[0].name];
let maxNameLength = books[0].name.length;
for (let i = 1; i < books.length; i++) {
    if (books[i].name.length > maxNameLength) {
        bookName2 = [books[i].name];
        maxNameLength = books[i].name.length;
    } else if (books[i].name.length === maxNameLength) {
        bookName2 [bookName2.length] = books[i].name;
    }
}
console.log(bookName2);


// – знайти книжку/ки, які писали 2 автори
let twoAuthorBook = []
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        twoAuthorBook[twoAuthorBook.length] = books[i].name;
    }
}
  console.log(twoAuthorBook)


// – знайти книжку/ки, які писав 1 автор
let oneAuthorBook = []
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        oneAuthorBook[oneAuthorBook.length] = books[i].name;
    }
}
console.log(oneAuthorBook)



// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.

let arr1 = []
for (let i = 0; i < 100; i+=2) {
    arr1[arr1.length] = i;
}
console.log(arr1);

// b. заповнити його 50 непарними числами за допомоги циклу.
let arr2 = []
for (let i = 1; i < 100; i+=2) {
    arr2[arr2.length] = i;
}
console.log(arr2);

// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
let arr3 =[]
for (let i = 0; i < 20; i++) {
    arr3.push (Math.random());
}
console.log(arr3)


// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr4 = []
for (let i = 0; i < 20; i++) {
    arr4.push (Math.floor(Math.random() * (732 - 8) + 8));
}
console.log(arr4)

// Math. random() * (max - min) + min
//Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются + округление


// 2. Вивести за допомогою console.log кожен третій елемент

for (let i = 2; i < arr4.length; i+=3) {
    console.log(arr4[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < arr4.length; i+=3) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let arr4new = [];
for (let i = 2; i < arr4.length; i+=3) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
        arr4new.push(arr4[i]);
    }
}
console.log(arr4new)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i+1] % 2 === 0) {
        console.log(arr4[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr5 = [100,250,50,168,120,345,188];
let check = arr5[0];
for (let i = 1; i < arr5.length; i++) {
   check = check + arr5[i];
   }
let middleCheck = check/ arr5.length
console.log(middleCheck);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr6 = []
for (let i = 0; i < 20; i++) {
    arr6.push (Math.floor(Math.random() * (100 - 1) + 1));
}
console.log(arr6)
let arr7 = []
for (let i = 0; i < arr6.length; i++) {
    arr7.push (arr6[i]*5);
}
console.log(arr7);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
let arr8 =[ true, 6, 'weather', false, 78, 'sun', 19, 2049]
let arr9 = []
for (let i = 0; i < arr8.length; i++) {
    if (typeof arr8[i] === 'number') {
        arr9.push (arr8[i]);
    }
}
console.log(arr9);

