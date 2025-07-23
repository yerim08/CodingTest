function solution(arr) {
  var answer = 0;

  for (var i = 0; i < arr.length ; i++) {
    answer += Number(arr[i]);
  }
  return Number(answer / arr.length);
}