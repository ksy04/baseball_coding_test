function solution(n, m) {
    let a = n;
    let b = m;
    let gcd = 0;

    while(b !== 0){
        gcd = b;
        b = a % b;
        a = gcd;
    }

    const lcm = n * m / gcd;

    return [gcd, lcm];
}