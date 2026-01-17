function solution(n) {
    // 등차수열을 이용해 푸는 방법도 있음 수학 공부의 필요성을 느낀다...
    let num = 0;

    if (n % 2 === 0) {
        for (let i = 2; i <= n; i+=2) {
            num += i**2
        }
    } else {
        for (let i = 1; i <= n; i+=2) {
            num += i
        }
    }
    
    return num
    
}