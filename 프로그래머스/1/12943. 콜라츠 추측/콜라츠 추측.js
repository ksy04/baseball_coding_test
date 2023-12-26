1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
function solution(num) {
    var answer = num;
    let sum = 0;

    while(answer != 1 || sum === 500) {
        if (answer % 2 === 0) {
        answer = answer / 2
    } else if (answer % 2 === 1) {
        answer = answer * 3 + 1
        } if (sum === 500) {
        sum = -1
            break
    } 
        sum++
    } 


    return sum;
}
