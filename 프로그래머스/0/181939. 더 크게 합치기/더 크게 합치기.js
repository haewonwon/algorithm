function solution(a, b) {
    let i = Number(a + "" + b)
    let j = Number(b + "" + a)
    
    return i >= j ? i : j
}