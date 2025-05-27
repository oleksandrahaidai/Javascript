// _________________________#yHAwJOyiC__________________________
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

arr1 = [6, 8, -18, 17, 32, 1, 43, 97, -56, 7]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// ________________________#GamKju89ob__________________________
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
arr2 = ['big', 'small', 'short', 'tall', 'wide', 'narrow', 'slow', 'quick', 'happy', 'sad']
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

// _____________________________#Bm76xmg_____________________________
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
arr3 = ['attention', 7, {id: 1,  name: 'Olga'}, 'second', true, 15, 'first', false, -78, 'third']
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}

// _________________________________#u3vmD0YJXh_______________________________________
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
arr4 = [false, 7, {id: 1,  name: 'Olga'}, 'second', true, 15, 'first', false, -78, 'third']
for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'boolean') {
        console.log(arr4[i])
    }
}
// _______________________________#9stMq2ou_____________________________________
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
arr5 = [false, 7, {id: 1,  name: 'Olga'}, 'second', true, 15, 'first', false, -78, 'third']
for (let i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === 'number') {
        console.log(arr5[i])
    }
}

// ______________________________#mK4pmM4________________________________________
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
arr6 = [false, 7, {id: 1,  name: 'Olga'}, 'second', true, 15, 'first', false, -78, 'third']
for (let i = 0; i < arr6.length; i++) {
    if (typeof arr6[i] === 'string') {
        console.log(arr6[i])
    }
}

// _________________________________#0pm3EyTKy9______________________________________
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr7 =[];
arr7[0] = [1, 2, 3, 4, 5, 6];
arr7[1] = true;
arr7[2] = 'dog';
arr7[3] = 1250;
arr7[4] = false;
arr7[5] = {id: 1,  status: 'true'};
arr7[6] = 8;
arr7[7] = 'sequence';
arr7[8] = 15;
arr7[9] = undefined;
for (const elem of arr7) {
    console.log(elem);
}

// ________________________#mDMWMW5a__________________________________________
// – Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i < 11; i++) {
    document.write(`<p>${i}</p>`)
    console.log(i)
}

// __________________________#4sXhaa5YMM________________________________________
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i < 101; i++) {
    document.write(`<p>${i}</p>`)
    console.log(i)
}

// ______________________________#s24slNyz7_________________________________________
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i < 101; i+=2) {
    document.write(`<p>${i}</p>`)
    console.log(i)
}

// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=1; i < 101; i+=1) {
    if (i % 2 === 0) {
        document.write(`<p>${i}</p>`)
        console.log(i)
    }
}
// #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=1; i < 101; i+=1) {
    if (i % 2 !== 0) {
        document.write(`<p>${i}</p>`)
        console.log(i)
    }
}

