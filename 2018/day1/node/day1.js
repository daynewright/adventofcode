let fs = require('fs');
let inputArry = fs.readFileSync('../input.txt').toString().split('\n');

console.log(inputArry.reduce((acc, value) =>  acc + parseInt(value), 0));