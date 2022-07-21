function solution(numbers) {
    let answer = 0;
    
    for(let y = 0; y < 10; y++) {
        if(!numbers.includes(y)) {
            answer = answer + y
        }
    }
    return answer;
}