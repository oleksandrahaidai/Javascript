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




const numbers = Array.from({length:100}, (value, i) => i+1)
console.log(numbers)

let numbersDiv = document.getElementById('numbers')
let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')

let page = 0
let perPage = 10

function render(pageNumber) {
    let start = pageNumber * perPage // 10
    let end = start + perPage//10 +10
    numbersDiv.innerHTML = numbers.slice(start, end).join('\n');
}
prevButton.addEventListener('click', () => {
    if (page > 0) page--;
    render(page);
});

nextButton.addEventListener('click', () => {
    if ((page + 1) * perPage < numbers.length) page++;
        render(page);
});


render(page);