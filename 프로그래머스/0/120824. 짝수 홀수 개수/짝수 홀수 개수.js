function solution(num_list) {
    let i = num_list.filter((arr) => arr % 2 === 0).length
    let j = num_list.filter((arr) => arr % 2 === 1).length

    return [i, j];
}