function solution(n) {
    var answer = [];
    answer = n.toString().split("")
    answer.reverse()
    
    return answer.map(c=> Number(c))
}