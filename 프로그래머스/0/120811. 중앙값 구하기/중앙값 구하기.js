function solution(array) {
    let n = parseInt(array.length / 2)
    return array.sort((a, b) => a - b)[n]
}