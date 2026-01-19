// function solution(n, control) {
//     let w = control.split("w").length - 1
//     let s = control.split("s").length - 1
//     let d = control.split("d").length - 1
//     let a = control.split("a").length - 1
    
//     let sum1 = w - s
//     let sum10 = d - a
    
//     return (sum1 * 1) + (sum10 * 10) + n
// }

const solution = (n, control) => {
    // 1. 각 문자가 의미하는 값을 객체(딕셔너리)로 정의합니다.
    const ops = { w: 1, s: -1, d: 10, a: -10 };
    
    // 2. 문자열을 배열로 펼친 뒤([...control]), reduce로 값을 누적합니다.
    return [...control].reduce((acc, char) => acc + ops[char], n);
};