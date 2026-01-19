// function solution(n, control) {
//     let w = control.split("w").length - 1
//     let s = control.split("s").length - 1
//     let d = control.split("d").length - 1
//     let a = control.split("a").length - 1
    
//     let sum1 = w - s
//     let sum10 = d - a
    
//     return (sum1 * 1) + (sum10 * 10) + n
// }

function solution(n, control) {
    const ops = { w: 1, s: -1, d: 10, a: -10 };
    
    // 문자열(control)은 바로 for...of로 순회 가능합니다.
    for (const char of control) {
        n += ops[char];
    }
    
    return n;
}