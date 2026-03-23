process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let result = "";
    
    // a = 가로, b = 세로
    // for (let i = 0; i < b; i++) {
    //     for (let j = 0; j < a; j++) {
    //         result += "*"
    //     }
    //     result += "\n"
    // }
    
    for (let i = 0; i < b; i++) {
        result += "*".repeat(a)
        result += "\n"
    }
    
    console.log(result)
});