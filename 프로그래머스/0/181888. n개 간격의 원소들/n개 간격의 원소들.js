function solution(num_list, n) {
//     let arr = []
    
//     for (let i = 0; i < num_list.length; i++) {
//         if (i % n === 0) {
//             arr.push(num_list[i])
//         }
//     }
    
//     return arr
    
    // filter를 이용해 index 조건에 맞는 배열 반환하는 방법
    return num_list.filter((_, i) => i % n === 0)
}