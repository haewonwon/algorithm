// function solution(angle) {
//     var answer = 0;
//     return answer;
// }

const solution = (angle) => angle === 180 ? 4 : angle > 90 && angle < 180 ? 3 : angle === 90 ? 2 : 1 

// filter를 이용해 length를 측정하는 방법도 있음