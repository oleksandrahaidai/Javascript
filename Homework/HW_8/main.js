// ________________1_________________#iz6emEsP2BA________________________
// // – є масив
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// console.log(mappedCourses)
let mappedUser = coursesAndDurationArray.map ((course, index) => { return {...course, id: index + 1}});
console.log(mappedUser);

// let mappedUser = coursesAndDurationArray.map ((course, index) => { return {id: index + 1, title: course.title, monthDuration: course.monthDuration}});
// console.log(mappedUser);

// ________________2_______________#AiN5CoUQ________________________
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function cloner(object) {
    if (object) {
        let functions= [];
        for (const key in object) {
            if (typeof object[key] === 'function') {
               const functionCopy = object[key].bind ({})
                functions.push({functionCopy, key});
            }
        }
        console.log(functions);

        const clonedObject = JSON.parse(JSON.stringify(object));

        for (const func of functions) {
            clonedObject[func.key] = func.functionCopy;
            }
        console.log(clonedObject);
        return clonedObject;
    }
    throw new Error ('!!!!!');
}

const clone = cloner ({name: 'Oleksandr', surname: 'Protas', age: 35, greeting(){console.log (`hi`)}, foo() {console.log(`hello`)}});
clone.foo()
clone.greeting()

