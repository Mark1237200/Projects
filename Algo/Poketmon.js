function solution(nums) {
    let answer = [];
    let pokemon = nums.length / 2
    
    for(let x = 0; x < nums.length; x++) {  
        if (answer.length < pokemon) {
            if (!answer.includes(nums[x])) {
                answer.push(nums[x])
            }
        }
    }
    return answer.length;
 }