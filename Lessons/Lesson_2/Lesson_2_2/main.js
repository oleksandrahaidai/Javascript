let age = + prompt('What is your age?');
console.log(age, typeof age);

if (age >= 18) {
    console.log ('films for adults');
} else if (age < 18) {
    console.log ('cartoon');
}

let color = prompt('enter color');
 if (color === 'green') {
     console.log('go');
 } else if (color === 'yellow') {
     console.log('stop');
 } else if (color === 'red') {
     console.log('wait');
 } else {
     console.log ('?????');
 }



// let color = prompt('enter color');
// switch (color) {
//     case 'green':
//         console.log ('go');
//         break;
//     case 'yellow':
//         console.log ('stop');
//         break;
//     case 'red':
//         console.log ('wait');
//         break;
// }