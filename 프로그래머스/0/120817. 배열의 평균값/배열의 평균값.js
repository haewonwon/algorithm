function solution(numbers) {
    return numbers.reduce((sum, dig) => sum + dig, 0) / numbers.length
}