function solution(my_string, n) {
    let arr = my_string.split("")
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < n; j++) {
            newArr.push(arr[i])
        }
    }
    
    return newArr.join("")
}