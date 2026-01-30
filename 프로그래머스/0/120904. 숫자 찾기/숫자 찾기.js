function solution(num, k) {
    let n = [...String(num)].map(Number).indexOf(k)
    return n === -1 ? n : n+1
}