function solution(rsp) {
//     let arr = [...rsp]
//     let newArr = []
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "0") {
//             newArr.push("5")
//         } else if (arr[i] === "2") {
//             newArr.push("0")
//         } else {
//             newArr.push("2")
//         }
//     }
    
//     return newArr.join("")
    
    // 각 대응하는 게 있으면 객체로 풀기
    let arr = {
        0: 5,
        2: 0,
        5: 2,
    }
    
    return [...rsp].map((n) => arr[n]).join("")
}