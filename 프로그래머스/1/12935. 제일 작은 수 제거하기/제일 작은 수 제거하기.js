function solution(arr) {
    var answer = [];
    let minValue = arr.indexOf(Math.min.apply(null, arr));
    arr.splice(minValue,1)
    return arr.length === 0? [-1]:arr;
}