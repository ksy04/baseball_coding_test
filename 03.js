function solution(s) {
  let numbers = s.split(" ").map(Number);

  let decimal = numbers.filter(decimal_num);
  let nodecimal = numbers.filter((num) => !decimal_num(num));

  let minnodecimal = Math.min(...nodecimal);
  let maxdecimal = Math.max(...decimal);

  return `${minnodecimal} ${maxdecimal}`;
}

function decimal_num(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let s = "97 75 88 99 95 92 73";

console.log(solution(s));
