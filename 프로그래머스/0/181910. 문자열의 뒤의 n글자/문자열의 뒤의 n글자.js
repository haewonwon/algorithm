function solution(my_string, n) {
    let l = my_string.length - n
    return [...my_string].slice(l, ).join("")
}