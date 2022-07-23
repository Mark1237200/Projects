function solution(a, b) {
    let answer = 0;
    
    for(let x=0; x<a.length; x++) {
        answer = a[x]*b[x] + answer
    }
    
    return answer;
}