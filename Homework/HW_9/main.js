//__________1__________#8Nmt60ZT_____________________________
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.


//
let div = document.createElement('div')
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.innerText = 'Hello Friends!';
console.log(div)

document.body.appendChild(div);

let divClone = div.cloneNode(true);
document.body.appendChild(divClone);

// ______________2____________#OPLI89c9G_____________________________
// – Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

let array = ['Main','Products','About us','Contacts']
let ulList = document.createElement('ul');
ulList.classList.add('menu');
    for (const item of array) {
        let liElement = document.createElement ('li')
        liElement.innerText = item;
        ulList.appendChild(liElement);
    }
document.body.appendChild(ulList);

// __________________3__________#jeBqHV525U5______________________________
// – Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 for (const item of coursesAndDurationArray) {
     let div = document.createElement ('div')
     div.innerText = item.title + ' ' + item.monthDuration;
     document.body.appendChild(div);
   }


 // ________________4_______________#Kx1xgoKy8_____________________________
// – Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray1) {
    let div = document.createElement('div')
    div.classList.add('item');

    let h1 = document.createElement ('h1')
    h1.classList.add('heading');
    h1.innerText = item.title;

    let p = document.createElement ('p')
    p.classList.add('description');
    p.innerText = item.monthDuration;

    div.append(h1,p);
    document.body.appendChild(div);
}

// __________________5________________________________________________
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let div = document.createElement('div')

    let div1 = document.createElement ('div')
    div1.innerText = course.title;

    let div2 = document.createElement ('div')
    div2.classList.add('position');
    div2.innerText = course.monthDuration;

    let div3 = document.createElement ('div')
    div3.classList.add('position');
    div3.innerText = course.hourDuration;

    let ul = document.createElement ('ul')
    for (const module of course.modules) {
        let li  = document.createElement('li')
        li.innerText = module;
    ul.append(li);

    }
div.append(div1,div2,div3,ul);
document.body.appendChild(div);
}