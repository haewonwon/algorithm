function solution(my_string, n) {
    // 내가 작성한 코드
    let arr = my_string.split("")
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < n; j++) {
            newArr.push(arr[i])
        }
    }
    
    return newArr.join("")
    
    // 참고 코드
    // let answer = [...my_string].map(v => v.repeat(n)).join("");
    // return answer;
}