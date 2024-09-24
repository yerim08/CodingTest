function solution(array, height) {
    var answer = 0;
    array.forEach(c => {
        if(c > height) answer++;
    });
    return answer
}