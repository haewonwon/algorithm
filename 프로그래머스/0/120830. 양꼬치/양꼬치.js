// function solution(n, k) {
//     let sum = 0;
//     // let s = Math.trunc(n / 10);
//     let v = 0;

//     Math.trunc(n / 10) < k ? v = k - Math.trunc(n / 10) : v = 0
    
//     Math.trunc(n / 10) < k ?
//     sum = n * 12000 + v * 2000
//     return sum;
// }

const solution = (n, k) => Math.trunc(n / 10) < k ? n * 12000 + (k - Math.trunc(n / 10)) * 2000 : n * 12000