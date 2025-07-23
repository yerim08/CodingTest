function solution(n)
{
    var answer = 0;

for (const ch of String(n)) {
  answer += Number(ch);
}

    return answer;
}