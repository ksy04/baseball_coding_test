function solution(n) {
    return String(n).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}