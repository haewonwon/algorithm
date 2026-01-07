function solution(my_string, letter) {
    return [...my_string].filter((arr) => !arr.includes(letter)).join("")
}