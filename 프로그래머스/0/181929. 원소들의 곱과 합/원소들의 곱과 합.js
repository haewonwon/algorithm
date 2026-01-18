function solution(num_list) {
    let i = num_list.reduce((num, sum) => num * sum, 1)
    let n = num_list.reduce((num, sum) => num + sum, 0)
    
    return i < n**2 ? 1 : 0
}