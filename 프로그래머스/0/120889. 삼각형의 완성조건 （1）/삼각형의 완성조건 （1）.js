function solution(sides) {
    let array = sides.sort((a, b) => b - a)
    return array[0] < array[1] + array[2] ? 1 : 2;
    
    // 다른 사람이 작성한 코드 중 명시적인 코드, 이런 사고도 배우면 좋을 듯
    // 구조 분해 할당을 이용한 코드
    // const [long, a, b] = sides.sort((a,b) => b-a);
    // return long < a + b ? 1 : 2
}             