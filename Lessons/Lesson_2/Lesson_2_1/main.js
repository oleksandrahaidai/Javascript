// ______________________________________________Arrays_________________________________________


let arr;
arr = [123, 234, 345, -123, 0, true, 'asd'];
console.log(arr);
console.log(arr [0]);
console.log(arr [1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr.length);

arr[0]= 'value1';
console.log(arr[0]);
console.log(arr);

arr[7]='okten'
console.log(arr);

arr[arr.length]='last new value';
console.log(arr);
arr[arr.length-1] ='last changed value';
console.log(arr);


let arr1 = [
    [1, 2, 3], //0
    [], //1
    [] //2
];
console.log(arr1);
console.log(arr1 [0]);
console.log(arr1 [0] [1]);

// _____________________________________________Objects_____________________________________

let user1 = {
    id: 1,
    name: 'vasya',
    age: 31,
}
console.log(user1);

let user2 = {
    id: 2,
    name: 'petya',
    age: 35,
    skills: ['html', 'js', 'java']
}
console.log(user2.skills);
console.log(user2.skills[2]);


let user3 = {
    id: 3,
    name: 'viktor',
    age: 20,
    skills: ['html', 'js', 'java'],
    wife: {
        name: 'olya',
        age: 19
    }
}
console.log(user3.wife.name);