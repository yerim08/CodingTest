function solution(array, n) {
    var answer = 0;
    array.forEach((c) => {
        if(c === n)return answer++;
    })
    return answer;
}