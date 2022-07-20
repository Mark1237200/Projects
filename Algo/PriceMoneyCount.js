function solution(price, money, count) {
    let answer = 0;
    //price * 1 ~ count - money 가 정답.
    
    for(let x = 1; x < count + 1; x++) {
        answer = price * x + answer
    }
    if (answer < money) {
        return 0
    }
    return answer - money;
}