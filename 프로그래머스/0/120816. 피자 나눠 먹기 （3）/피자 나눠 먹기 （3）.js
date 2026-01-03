function solution(slice, n) {
    // return n <= slice ? 1 : n % slice === 0 ? n/slice : Math.floor(n/slice) + 1
    
    // 올림하는 방법으로 풀기, Math.ceil() 공부하기
    return Math.ceil(n / slice);
}