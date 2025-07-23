function solution(n) {
  var as = 0;
  as = n.toString().split("");
  as.sort().reverse();
  as = Number(as.join(""));
  return as;
}