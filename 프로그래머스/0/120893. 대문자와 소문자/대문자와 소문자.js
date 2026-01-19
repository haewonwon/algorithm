function solution(my_string) {
//     let arr = [...my_string]
//     let result = ""
    
//     for (let i=0; i < arr.length; i++) {
//         if (arr[i] === arr[i].toUpperCase()) {
//             result += arr[i].toLowerCase()
//         } else {
//             result += arr[i].toUpperCase()
//         }
//     }
    
//     return result
    
    return [...my_string].map((i) => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join("")
}