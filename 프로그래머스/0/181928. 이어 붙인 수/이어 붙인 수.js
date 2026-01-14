function solution(num_list) {
    let a = num_list.filter((num) => num % 2 === 0).join("")
    let b = num_list.filter((num) => num % 2 === 1).join("")
    
    return parseInt(a) + parseInt(b)
}