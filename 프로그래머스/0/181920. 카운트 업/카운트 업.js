function solution(start_num, end_num) {
    return Array.from(Array(end_num - start_num + 1).keys(), (i) => i + start_num)
}