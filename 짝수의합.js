function solution(n) {
  var answer = 0;

  if (0 < n && n <= 1000) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 == 0) {
        answer += i;
      }
    }
  }

  return answer;
}

console.log(solution(10));
