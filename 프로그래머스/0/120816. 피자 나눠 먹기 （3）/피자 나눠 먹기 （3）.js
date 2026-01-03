function solution(slice, n) {
    return n <= slice ? 1 : n % slice === 0 ? n/slice : Math.floor(n/slice) + 1
}