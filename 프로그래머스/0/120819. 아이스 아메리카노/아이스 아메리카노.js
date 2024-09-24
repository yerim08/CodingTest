function solution(money) {
    var answer = [];
    var count = Math.floor(money/5500)
    var account = money - count * 5500
    answer.push(count);
    answer.push(account);
    return answer;
}