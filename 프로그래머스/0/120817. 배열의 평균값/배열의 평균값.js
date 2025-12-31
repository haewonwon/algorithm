function solution(numbers) {
    return numbers.reduce((sum, dig) => sum + dig, 0) / numbers.length
}

// numbers.reduce((sum, dig) => sum + dig, 0) / numbers.length
// 배열을 돌면서 하나로 응축해라!
// sum은 총합, dig는 현재 숫자, 초기값은 0, 배열의 길이로 나눔