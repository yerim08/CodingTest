function solution(n) {
    var answer = [];
    while(n) {
        if(n % 2 === 1) answer.push(n);
        n--;
    }
    return answer.sort((a, b) => a - b);
}