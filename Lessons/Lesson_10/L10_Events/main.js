let target = document.getElementById('target');

// target.onclick = function(ev) {
//     console.log('clicked');
//     console.log(ev)
// };
//
// ___________________________________onmousemove - ПЕРЕМІЩЕННЯ МИШКИ ПО ОБЄКТУ________________
//
// target.onmousemove = function(ev ) {
//     console.log('move');
//     console.log(ev)
//     target.disable = false;
//     console.log(ev.clientX, ev.clientY)
//     let r = ev.clientX
//     let g = ev.clientY
//     let b = ev.clientY
//     this.style.background = `rgb(${r},${g},${b})`;
//
// }
//
//
// target.addEventListener ("click", function (ev) {
//     console.log ('newly clicked');
//     console.log(ev)
// })
//
// target.addEventListener ("click", function (ev) {
//     console.log('last clicked');
//     console.log(ev)
// });
//
// ___________________________________onmouseover/onmouseleave - НАВЕДЕННЯ НА ОБЄКТ МИШКИ/ВИВЕДЕННЯ З ОБЄКТУ________________

// target.onmouseover = function (ev) {
//     console.log("over")
//     console.log(ev)
// }
// target.onmouseleave = function (ev) {
//     console.log("leave")
//     console.log(ev)
// }
// ___________________________________oninput-ЗЧИТУВАТИ ІНПУТ З ФОРМИ_______записуємо в інпут, зчитуємо, виводимо в консоль_____________________
let i1 = document.getElementById('i1')
i1.oninput = function (e) {
    console.log(this.value)
    target.innerText = this.value
}
// ____________________________-onsubmit - ЗІБРАТИ ІНФО З ФОРМИ І ВІДХОПИТИ МОМЕНТ ВІДПРАВКИ________________________
// let f1 = document.getElementById ('f1')
    let f1 = document.forms.f1; //- ДОСТУПИТИСЯ ДО ФОРМИ
    f1.onsubmit = function (ev) {
    console.log(this.username.value)
    ev.preventDefault() //- ЗАБОРОНИТИ ПЕРЕЗАВАНТАЖЕННЯ - дефолтні дії
    let user = {name:this.username.value}
    console.log(user)

}

//__________________________________onload - ТРЕКАЄМО СТАН ДОКУМЕНТУ_________________________________

// window.onload = function () { //Ф-ЦІЯ СПРАЦЬОВУЄ КОЛИ БРАУЗЕРНЕ ВІКНО ЗАВАНТАЖИЛОСЯ
//         console.log('load')
// }
document.onreadystatechange = function () {
        // console.log(document.readyState)
    if (document.readyState === 'interactive') {
        document.body.innerText = 'loading started'
    }
    if (document.readyState === 'completed') {
        document.body.innerText = 'loading completed'
    }
}


// МОЖЕМО:
// ЗІБРАТИ ІНФО З ФОРМИ І ВІДПРАВИЛИ ЇЇ
// ЗІБРАТИ ІНФО З ФОРМИ І ВІДПРАВИТИ У ІНШЕ ВІКНО
// ЗІБРАТИ ІНФО З ФОРМИ І ПЕРЕДАЛИ НА ІНШУ СТОРІНКУ


// ___________________10_____________________#NKB0tgWIK1G________________________________
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

//
// const items = Array.from({length: 100}, (value, i) => `Об'єкт ${i + 1}`);
// let page = 0, perPage = 10;
//
// const itemsDiv = document.getElementById('items');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
//
//
// function render(pageNumber) {
//
//         let start = pageNumber * perPage;//0//10
//         let end = start + perPage//10/20
//         itemsDiv.innerHTML = items.slice(start, end).join('\n');
//     }
//
//
//     prevBtn.addEventListener('click', () => {
//         if (page > 0) page--;
//         render(page);
//     });
//
//     nextBtn.addEventListener('click', () => {
//         if ((page + 1) * perPage < items.length) page++;
//         render(page);
//     });
//
// render(page);