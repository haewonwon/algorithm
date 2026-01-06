function solution(strlist) {
    // 내가 작성한 코드
    // push()인데 push[]로 작성해서 arr에 요소가 추가되지 않음 괄호 구분 잘하기
    
    // let arr = []
    
    // for (let i = 0; i < strlist.length; i++) {
    //     arr.push(strlist[i].length)
    // }
    
    // return arr
    
    // 참고 코드
    return strlist.map((el) => el.length)
}