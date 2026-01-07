function solution(my_string) {
    let v = ["a", "e", "i", "o", "u"]
    
    // arr에서 v에 포함된 요소들을 제거해 반환
    return [...my_string].filter((arr) => !v.includes(arr)).join("");
}