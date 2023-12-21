function solution(num) {
  let answer = 0;
  let money = 1000;
  let change = money - num1;
  let coins = [500, 100, 50, 10];

  for (let coin of coins) {
    answer += Math.floor(change / coin);
    change %= coin;
  }
  return answer;
}
let num1 = 550;

console.log(solution(num1));
