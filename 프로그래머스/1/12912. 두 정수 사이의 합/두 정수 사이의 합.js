function solution(a, b) {
  var answer = 0;
  if (a == b) return a;
  else {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    for (var i = min; i <= max; i++) {
      answer += i;
    }
    return answer;
  }
}