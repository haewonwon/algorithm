function solution(array) {
    let n = parseInt(array.length / 2)
    return array.sort((a, b) => b - a)[n]
}