function solution(my_string) {
    return [...my_string].filter(char => !isNaN(Number(char))).map(Number).sort((a, b) => a - b);
}