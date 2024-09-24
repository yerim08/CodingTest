function solution(array) {
    return array.sort((a, b) => b - a).at(Math.floor(array.length/2))
}