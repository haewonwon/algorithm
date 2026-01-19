function solution(n, control) {
    let w = control.split("w").length - 1
    let s = control.split("s").length - 1
    let d = control.split("d").length - 1
    let a = control.split("a").length - 1
    
    let sum1 = w - s
    let sum10 = d - a
    
    return (sum1 * 1) + (sum10 * 10) + n
}