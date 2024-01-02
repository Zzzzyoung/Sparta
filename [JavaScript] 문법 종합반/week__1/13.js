// 조건부 실행
// 특정한 경우에만 실행하도록 함
let x = 10;

(x > 0) && console.log('x는 양수입니다.');

// if (x > 0) {
//    console.log('x는 양수입니다.');
// }

// or 조건(||)
// 삼항 연산자와 단축평가
let y; /// y는 undefined
let z = y || 20;

console.log(z);
