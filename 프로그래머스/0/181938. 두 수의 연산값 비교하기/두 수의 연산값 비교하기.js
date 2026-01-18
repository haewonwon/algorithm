function solution(a, b) {
    let n = Number(a + "" + b)
    
    return n >= 2*a*b ? n : 2*a*b
}