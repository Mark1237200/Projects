function solution(numbers) {
    let answer = [numbers[0]+numbers[1]];
    //2개의 무작위 수를 더해 낮은 순서대로 모두 리턴
    for(let x = 0; x < numbers.length; x++) {
        for(let y = 1 + x; y < numbers.length; y++) {
            let A = numbers[x], B = numbers[y]
            if(!answer.includes(A+B)) {
                // console.log(A+B)
                if(answer[0] > A+B) {
                    answer.unshift(A+B)
                    // console.log(A+B)
                } else if (answer[answer.length-1] < A+B) {
                    answer.push(A+B)
                    // console.log(A+B)
                } else if (!answer.includes(A+B)) {
                    for(let z = 0; z < answer.length;z++) {
                        if(answer[z] > A+B) {
                            answer.splice(z, 0, A+B)
                            // console.log(A+B)
                            break
                        }
                    }
                }
            }
        }
    }
    
    return answer;
}