function solution(n) {
    
    let answer = 0
    
    if (Math.floor(Math.sqrt(n)) ** 2 === n) {
        answer += (Math.sqrt(n) + 1) ** 2
    } else {
        answer += -1
    }
    
    return answer;
}

