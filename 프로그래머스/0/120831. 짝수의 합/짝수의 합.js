function solution(n) {
 var answer = 0;
  while(n) {
    if((n % 2)==0)
      answer += n
    n--;
  }
 return answer; 
}