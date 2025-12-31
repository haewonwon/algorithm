function solution(n) {
    var answer = 0;
    
    // 반복문을 2부터 시작, 2씩 늘리기
    for (let i = 2; i <= n; i+=2) {
        if (i % 2 === 0) {
            answer += i;
        }
    }
    
    return answer;
}

// 수열을 이용한 방법도 있음 수학 공부 필요할 듯. . .