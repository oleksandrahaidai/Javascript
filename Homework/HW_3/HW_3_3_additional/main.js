// _______________1__________#WpkK0ZH1___________________________
// –створити масив з:
// – з 5 числових значень
 let arr1 = [10, 16, 18, 15, 27];
     console.log(arr1);

// – з 5 стічкових значень
let arr2 = [ 'red', 'green', 'orange', 'blue', 'yellow'];
    console.log(arr2);

// – з 5 значень стрічкового, числового та булевого типу
let arr3 = [ 'good', 'bad', 10, true, false];
    console.log(arr3);

    // – та вивести його в консоль


// ______________2_____________#4aDbSgh_________________________________
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
    arr[0] = 8;
    arr[1] = 3;
    arr[2] = 'happy';
    arr[3] = true;
    console.log(arr);


// _____________3___________#qLQLJSeN7i_________________________________
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr4 = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i = 0
while (i < arr4.length) {
    console.log(arr4[i]);
    i++;
}

// 2. перебрати його циклом for
for (let i= 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом
let ii = 1;
while (ii < arr4.length) {
    console.log(arr4[ii]);
    ii= ii+2;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом
for (let i= 1; i < arr4.length; i+=2) {
    console.log(arr4[i]);
}
// 5. перебрати циклом while та вивести числа тільки парні значення
let iii = 0;
while (iii < arr4.length) {
    if (arr4[iii] % 2 === 0) {
       console.log (arr4[iii]);
    }
    iii++
}

// 6. перебрати циклом for та вивести числа тільки парні значення
for (let i= 0; i < arr4.length; i++) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}

// 7. замінити кожне число, кратне 3, на слово “okten”
for (let i= 0; i < arr4.length; i++) {
    if (arr4[i] % 3 === 0 ) {
        arr4[i] = 'okten';
    }
}
    console.log(arr4);

// 8. вивести масив у зворотньому порядку.
let arr5 =[]
for (let i = arr4.length-1; i >= 0; i--) {
    arr5.push(arr4[i]);
}
console.log(arr5);



// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// 1. перебрати його циклом while - ЗВОРОТНЬО
let a = arr4.length - 1
while (a >= 0) {
    console.log(arr4[a]);
    a--;
}

// 2. перебрати його циклом for - ЗВОРОТНЬО
for (let i = arr4.length-1; i >= 0; i--) {
    console.log(arr4[i]);
}

// 3. перебрати циклом while та вивести числа тільки з непарним індексом - ЗВОРОТНЬО
let j = arr4.length - 1;
while (j >= 0) {
    if (j % 2 !== 0) {
        console.log(arr4[j]);
    }
    j--;
}

// 4. перебрати циклом for та вивести числа тільки з непарним індексом - ЗВОРОТНЬО
for (let i= arr4.length-1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr4[i]);
    }
}

// 5. перебрати циклом while та вивести числа тільки парні значення - ЗВОРОТНЬО
let jj = arr4.length - 1;
while (jj >= 0) {
    if (arr4[jj] % 2 === 0) {
        console.log (arr4[jj]);
    }
    jj--
}

// 6. перебрати циклом for та вивести числа тільки парні значення - ЗВОРОТНЬО
for (let i= arr4.length - 1; i >= 0 ; i--) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
}
// / 7. замінити кожне число, кратне 3, на слово “okten” - ЗВОРОТНЬО
let arr6 = [2,17,13,6,22,31,45,66,100,-18];
for (let i= arr5.length- 1 ; i >=0; i--) {
    if (arr6[i] % 3 === 0 ) {
        arr6[i] = 'okten';
    }
}
console.log(arr6.reverse());