function solution(n) {
    var answer = [];
    
    for(let x=2; x<n; x++) {
        if( n % x === 1) {
            answer.push(x)
        }
    }
    return answer[0];
}