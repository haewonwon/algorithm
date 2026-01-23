const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num = Number(input[0]);
    let result = "";
    
    for (let i = 0; i < num; i++) {
        result += "*".repeat(i + 1) + "\n"
        
    }
    console.log(result)
});