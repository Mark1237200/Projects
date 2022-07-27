function solution(nums) {
    let answer = []
//여기가 문제
for(let x=0;x<nums.length-2;x++) {
// if(x + 2 >= nums.length) break
 for(let y=x+1;y<nums.length-1;y++) {
  for(let z=y+1;z<nums.length;z++) {
  //세 숫자 고르기   
    let a = nums[x]+nums[y]+nums[z]
    
    answer++
      
    for(let n=2;n<=Math.sqrt(a);n++) {
        if(a % n === 0) {
            answer--
            break
        }
    }
}
}
}  
    return answer
}
    
// for(let x=0;x<nums.length;x++) {
//  for(let y=0;y<nums.length;y++) {
//   for(let z=0;z<nums.length;z++) {
//     let a = nums[x]+nums[y]+nums[z]
//     if(nums[x] !== nums[y] && nums[y] !== nums[z] && nums[x] !== nums[z]) {
//      if(a % 2 !== 0&& a % 3 !== 0&& a % 5 !== 0&& a % 7 !== 0) {
//       if(!answer.includes(a)) {
//        if(a > 6) {
//         answer.push(a)
//         }
//        }
//       } if(a === 7) {
//          if(!answer.includes(a)){
//           answer.push(a)
//          }
//         }
//     }
//    }
//   }
//  }
//     return answer.length;
// 