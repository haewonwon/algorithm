function solution(n, k) {
    let sum = 0;
    let s = Math.trunc(n / 10);
    let v = 0;

    s < k ? v = k - s : v = 0
    
    sum = n * 12000 + v * 2000
    return sum;
}