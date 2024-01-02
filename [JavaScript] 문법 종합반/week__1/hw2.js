function solution(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        } else if (signs[i] === false) {
            answer -= absolutes[i];
        }
    }
    return answer;
}

let absolutes = [1,2,3];
let signs = [false,false,true];

// let absolutes = [4,7,12];
// let signs = [true,false,true];

console.log(solution(absolutes, signs));

// 1. return 해야 하는 answer 생성
// 2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
// 2-1. 두 배열은 크기가 같음
// 3. 출력


// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }