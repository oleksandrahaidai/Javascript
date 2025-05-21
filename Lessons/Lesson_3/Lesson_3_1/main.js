let users = [
    {name:"John",age:5, status: true},
    {name:"Jane",age:6, status: false},
    {name:"January",age:4, status: false},
    {name:"Steve",age:9, status: true},
    {name:"Matt",age:8, status: false},
    {name:"Pat",age:9, status: false},
    {name:"Phil",age:12, status: false},
    {name:"Sam",age:3, status: true},
    {name:"Dave",age:9, status: false},
    {name:"Drew",age:12, status: false},
    {name:"Sandra",age:8, status: false},
];
debugger;

for (let user of users) {
    if (!user.status) {
        console.log(user.name);
    }
}