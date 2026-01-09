function solution(n) {
    return Array.from(String(n), Number).reduce((acc, num) => acc + num, 0)
}